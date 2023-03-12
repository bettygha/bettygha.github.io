$(document).ready(gameStart);
let count;
let gameStatus=false; ;
function gameStart(){
    count = 0;
    $('#start').click(startFun);
    
    
}
function hoverFun(){
    if(gameStatus){

    $(this).addClass("youlose");
    count = count+1;
    }
    
}
function endFun(){
    if(count > 0){
        $('#status').text(" You Lose !!! ");
        gameStatus = false;
    }
    else{
        $('#status').text(" You Win !!! ")
        gameStatus = false;
        
       
    }
}
function startFun(){
    $('#boundary1').removeClass("youlose");
    $('div.boundary').removeClass("youlose");
    $('#maze').removeClass('youlose');
    $('.example').text('');
    count = 0;
    if(!gameStatus){
        $('#boundary1').hover(hoverFun);
        $('div.boundary').hover(hoverFun);
        $('#maze').mouseleave(hoverFun);
        $('#end').click(endFun);
        $('#status').text("Game Started");
        gameStatus = true;
       
    }    

} 

