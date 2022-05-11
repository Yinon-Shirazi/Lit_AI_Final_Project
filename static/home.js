function wrap(clause_A, clause_B, clause_C){
    wrapper = '<div class = "row white"> <div class = "col-md-1 profile">'+
    '<img src = "https://i.dailymail.co.uk/i/pix/scaled/2012/12/04/article-2242722-1657FE04000005DC-708_308x185.jpg" class = "img"></div>'+
    "<div class = 'col-md-11 compliment'><div class = 'name'> Plotto's Fake News Generator</div><div class = 'content'>" +
    clause_A + ' ' + clause_B +' ' +clause_C + '</div> </div> </div>';

    return wrapper;
}

$(document).ready(function(){

    $("#do_it").click(function(){  

        let test  = Math.floor(Math.random() * (clause_A.length))
        console.log(test)
        A = clause_A[test]
        B = clause_B[Math.floor(Math.random() * (clause_B.length))]
        C = clause_C[Math.floor(Math.random() * (clause_C.length))]
        newTweet = wrap(A,B,C)
        $("#insert_here").prepend(newTweet)
    })



})