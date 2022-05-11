$(document).ready(function(){
    $(".warnings").empty()
    err_msg = "Please enter a valid clause";
    suc_msg = "Your clause has been added and will be randomly generated"
    $("#send_A").click(function(){
        $("#clauseA_warn").empty();
        if(isValid($("#clause_A").val())){
            str = $("#clause_A").val()
            if(!(str.charAt(0) >= 0 && str.charAt(0) <= 9)){
                str = str.charAt(0).toUpperCase() + str.slice(1);
                console.log("should be upper: ", str)
            }
            submit_A(str)
            //console.log($("#clause_A").val())
            $("#clauseA_warn").empty();
            
            $("#clauseA_warn").append(suc_msg);
        }
        else{
            $("#clauseA_warn").append(err_msg);
        }
    })

    $("#send_B").click(function(){
        $("#clauseB_warn").empty();
        str = $("#clause_B").val();
        if(isValid(str)){
            submit_B(str)
            $("#clauseB_warn").empty();
            $("#clauseB_warn").append(suc_msg);
        }
        else{
            $("#clauseB_warn").append(err_msg);
        }
    })
    

    $("#send_C").click(function(){
        $("#clauseC_warn").empty();
        str = $("#clause_C").val();
        if(isValid(str)){
            submit_C(str)
            $("#clauseC_warn").empty();
            $("#clauseC_warn").append(suc_msg);
        }
        else{
            $("#clauseC_warn").append(err_msg);
        }
    })
    
})

function isValid(str){
    if (str == "")
        return false;
    else if($.trim(str) == ''){
        return false;
    }
    else if(/^\d+$/.test(str)){
        console.log("here")
        return false
    }
    return true;

}
function submit_A(str){

    clauses = {}
    clauses["A"] = str
    $.ajax({
        type: "POST",
        url: "/add_A",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(clauses),
        success: function(result){
//            CONFIRM
            $("#clause_A").val("");
            console.log(result)
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}


function submit_B(str){

    clauses = {}
    clauses["B"] = str
    $.ajax({
        type: "POST",
        url: "/add_B",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(clauses),
        success: function(result){
//            CONFIRM
            $("#clause_B").val("");
            console.log(result)
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}


function submit_C(str){

    clauses = {}
    clauses["C"] = str
    $.ajax({
        type: "POST",
        url: "/add_C",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(clauses),
        success: function(result){
//            CONFIRM
            $("#clause_C").val("");
            console.log(result)
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}