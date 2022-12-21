// Retrieve user from the DOM
var generateMove = document.querySelector(".generate");

var score = {
    win: 0,
    loss: 0,
    tie: 0,
}

generateMove.addEventListener("click", playRound);
// Start game
function startGame() {
    
}

function playRound() {
    // Start game
    //getMyMove 
    var aiMove = getAIMove() //getAIMove() 
    compareMoves (myMove, aiMove) //compareMoves
    //display winner
    // keeping score
    // Replay or quit

}
//getMyMove
function getMyMove() {
    //depending on eventlistener, produce number
    //return number
}
//getAIMove
function getAIMove() {
    return Math.floor(Math.random() * 3);
}
//compareMoves
function compareMoves (myMove, aiMove) {
    //rock = 1
    //paper = 2
    //scissors = 3

    if (myMove == 1 ){

        if (aiMove == 1) {
            //tie
            score.tie++;
        }
        else if (aiMove == 2) {
            //ai wins
            score.loss++;
        }
        else if (aiMove == 3) {
            //i win
            score.win++;
        }


    }
    else if (myMove == 2) {

        if (aiMove == 1) {
            //i win
            score.win++;
        }
        else if (aiMove == 2) {
            //tie
            score.tie++;
        }
        else if (aiMove == 3) {
            //ai win
            score.loss++;
        }

    }
    else if (myMove == 3) {

        if (aiMove == 1) {
            //ai win
            score.loss++;
        }
        else if (aiMove == 2) {
            //i wins
            score.win++;
        }
        else if (aiMove == 3) {
            //tie
            score.tie++;
        }

    }

    //return who won
}
//get winner
function getWinner () {

    // ai or i won
    //rps beats rps
}
    // keeping score
    // Replay or quit