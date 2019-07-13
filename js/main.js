// Declare and initialize some varibles 
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

// Call some functions to start the game 
$('#Xbtn').on("click", buttonX);
$('#Obtn').on("click", buttonO);
$('.index').off('click');

/**
 * Call this function when player1 select X symbole 
 */
function buttonX(){
    player1 = "X";
    player2 = "O";
    turn = 'X'; 
    $('#Xbtn').css("hover",false);
    setUpGame();
} 
/**
 * Call this function when player1 select O symbole 
 */
function buttonO(){
    player1 = "O";
    player2 = "X";
    turn = 'O';
    setUpGame();
} 
/**
 * This function called after both players select their symboles 
 * it displaies a message who's turn and what symbole of each player.
 * when the game start disable both X/O buttons to prevent any change 
 * during the game by players  
 */
function setUpGame(){
    $('.message').text("Player1: "+ player1 + " , Player2: "+player2); 
    $('#Xbtn').attr("disabled", true);
    $('#Obtn').attr("disabled", true);
    $('.index').on("click", startGame);
    $('.turn').text("it's "+ turn + " turn ");
}
/**
 * 
 * @param {*} event 
 * The heart of the game
 *  1- it prevents the previous events 
 *  2- it starts change the turn to the next player which is player2  
 */
function startGame(event){
    let idNum = $(this).attr('id');
    event.preventDefault();
    turn= player2;
    /**
     * checking which square that hit by the player and see if it's empty or not 
     * if not empty just prevent clicking to the board squares 
     */
    if(  $(event.target).text().length == 0 ){
        /**
         * 1- it counts the click if it was event flip the turn to the player1
         * and if it was odd flip the turn to player2 . 
         * 2- print a message that show's the player name  
         * 3- it changes the backgorud color of the target square 
         * 4- play the effect sound for each symbole 
         * 5- save the index of hitting square and push it to the player array
         * 6- change the turn to the next player 
         */
        if(clickCount %2 === 0 ){
            $('.turn').text("it's "+ turn + " turn ");
            $(event.target).text(player1);
            $(event.target).css("backgroundColor","#F97171");
            $('#clickEffect').get(0).play();
            play1Arr.push(getNumericPart(idNum));
            turn= player2;
        }else{
            turn= player1;
            $('.turn').text("it's "+ turn  + " turn ");
            $(event.target).text(player2);
            $(event.target).css("backgroundColor","#F97171");
            $('#plopEffect').get(0).play();
            play2Arr.push(getNumericPart(idNum));
        }
        /**
         * each round increase the click count to +1 
         * if the click reach to 9 click without any winer it's a tie 
         * so change the font color and add the score for tie 
         * play the tie effect sound 
         */
        clickCount +=1;
        if(clickCount == 9){
            $('.turn').text("it's a draw" ).css({"color":'#8AD6CC' , "font-weight":"bold"})
            scoreTie +=1;
            $('.scoreTie').text(scoreTie);
            $('#loseEffect').get(0).play();
        }
        /**
         * if the click count was hiegher than 5 start check if there is any winer 
         * and print the winnser name and add a score for it's name 
         */
        if(clickCount >= 5 ){
            whosWin(play1Arr,player1)
            whosWin(play2Arr,player2)
        }
    }else{
        $(event.target).off();
    }
     
}//end startGame function
/**
 * 
 * @param {player array} arr 
 * @param {player name} playerName 
 * A fntion that check whos the winner in this game 
 * 1- by taking two arguments ( the player array and the player name )
 * 2- then sort that array to assending order 
 * 3- then compare the player array with the combo winning array (winning chance) using find method 
 * 4- then to access to each array inside winning chance using every method 
 * 5- after that using include method to match between indexes in both arrays 
 * 6- if there a match then display a messge include the winer name and change it' color 
 * 7- prevent cliking in the board game and play the winning sound effect 
 * 8- add a score to the winning player 
 */
function whosWin(arr, playerName){
    let sortArr =arr.sort();
    saveResult = winChance.find(combo => combo.every(num => sortArr.includes(num.toString())) );
    console.log('win response is', saveResult);
    if(saveResult !== undefined){
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
/**
 * A function that reset the game without refreshing the page 
 * it return everything to it's default value except the scores 
 */
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
/**
 * 
 * @param {square id in the game board} id 
 * a function that parse the square indexes of game board from string id to integer 
 * using regex pattern 
 */
function getNumericPart(id) {
    let num = id.replace(/[^\d]+/, '');
    return num;
}



