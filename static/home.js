function wrap(clause_A, clause_B, clause_C){
    wrapper = '<div class = "row white"> <div class = "col-md-1 profile">'+
    '<img src = "http://coms4170.cs.columbia.edu/2020-spring/hw/hw2/columbia.jpg" class = "img"></div>'+
    '<div class = "col-md-11 compliment"><div class = "name"> Columbia Univeristy</div><div class = "content">' +
    clause_A + ' ' + clause_B +' ' +clause_C + '</div> </div> </div>';

    return wrapper;
}

$(document).ready(function(){
    $("#do_it").click(function(){  
        console.log("test")
        A = clause_A[Math.floor(Math.random() * 4)]
        B = clause_B[Math.floor(Math.random() * 3)]
        C = clause_C[Math.floor(Math.random() * 3)]
        newTweet = wrap(A,B,C)
        $("#insert_here").prepend(newTweet)
    })



})