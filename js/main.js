
let player1 = '';
let player2 = '';
let play1Arr = [];
let play2Arr = [];
let winChance = [ [1, 2, 3],[4, 5, 6], [7, 8, 9], [1, 4, 7],
                [2, 5, 8], [3, 6, 9],[1, 5, 9],[3, 5, 7] ]; 
let clickCount = 0 ;
let scoreP1 = 0; 
let scoreP2 = 0;  
let scoreTie = 0 ;
let turn = ' ';

$('.index').unbind('click');
$('#Xbtn').on("click", buttonX);
$('#Obtn').on("click", buttonO);

function startGame(event){
    let idNum = $(this).attr('id');
    event.preventDefault();
    turn= player2;
    if(  $(event.target).text().length == 0 ){
        if(clickCount %2 === 0 ){
            $('.turn').text("it's "+ turn + " turn ");
            $(event.target).text(player1);
            $(event.target).css("backgroundColor","#F97171");
            $('#clickEffect').get(0).play();
            play1Arr.push(getNumericPart(idNum));
            turn= player1;
        }else{
            turn= player1;
            $('.turn').text("it's "+ turn  + " turn ");
            $(event.target).text(player2);
            $(event.target).css("backgroundColor","#F97171");
            $('#plopEffect').get(0).play();
            play2Arr.push(getNumericPart(idNum));
        }
        clickCount +=1;
        if(clickCount == 9){
            $('.turn').text("it's a draw" ).css({"color":'#8AD6CC' , "font-weight":"bold"})
            scoreTie +=1;
            $('.scoreTie').text(scoreTie);
            $('#loseEffect').get(0).play();
        }
        if(clickCount >= 5 ){
            whosWin(play1Arr,player1)
            whosWin(play2Arr,player2)
        }
    }else{
        $(event.target).off();
    }
     
}//end startGame function

function whosWin(arr, playerName){
    let sortArr =arr.sort();
    saveResult = winChance.find(combo => combo.every(num => sortArr.includes(num.toString())) );
    console.log('win response is', saveResult);
    if(saveResult === undefined){
       // console.log("game end");
        //$('.turn').text("it's a draw" )
        // $(event.target).text().length == 0
    }else{
       $('.turn').text("Player: "+playerName + " Win !" ).css({"color":'#8AD6CC' , "font-weight":"bold"})
       $(".board").children().unbind('click');
       $('#winEffect').get(0).play();
       if(player1 == playerName){
           scoreP1 +=1 ;
           $('.scorep1').text(scoreP1);
        }else if(player2 == playerName){
            scoreP2 +=1 ;
            $('.scorep2').text(scoreP2);
        } 
       console.log("Player: "+playerName + " Win !");
    }
}
$('.playAgain').on("click", function (event){
    $('.message').text(" "); 
    $('#Xbtn').attr("disabled", false);
    $('#Obtn').attr("disabled", false);
    $('.index').text("");
    $('.index').css("backgroundColor","#F99192");
    $('.turn').css({"color":"black","font-weight":"normal" });
    $('.turn').text(" ");
    $('.index').unbind('click');
    turn = '';
    player1 = '';
    player2 = '';
    play1Arr = [];
    play2Arr = [];
    clickCount = 0 ; 
});

function getNumericPart(id) {
    let num = id.replace(/[^\d]+/, '');
    return num;
}

function buttonX(event){
    player1 = "X";
    player2 = "O";
    $('.message').text("Player1: "+ player1 + " , Player2: "+player2); 
    $('#Xbtn').attr("disabled", true);
    $('#Obtn').attr("disabled", true);
    $('.index').on("click", startGame);
    $('#Xbtn').css("hover",false);
    turn = 'X'; 
    $('.turn').text("it's "+ turn + " turn ");
} 

function buttonO(event){
    player1 = "O";
    player2 = "X";
    $('.message').text("Player1: "+ player1 + " , Player2: "+player2); 
    $('#Xbtn').attr("disabled", true);
    $('#Obtn').attr("disabled", true);
    $('.index').on("click", startGame);
    turn = 'O';
    $('.turn').text("it's "+ turn + " turn ");
} 
