// Retrieve user from the DOM
var generateMove = document.querySelector(".generate");

generateMove.addEventListener("click", playRound);
// Start game
function startGame() {
    
}

function playRound() {
    // Start game
    //getMyMove 
    getAIMove() //getAIMove() 
    //compareMoves
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
    var aiChoice = Math.floor(Math.random() * 3);
}
//compareMoves
function compareMoves () {
    //rock = 1
    //paper = 2
    //scissors = 3

    if (myMove == 1 ){

        if (aiMove == 1) {
            //tie
        }
        else if (aiMove == 2) {
            //ai wins
        }
        else if (aiMove == 3) {
            //i win
        }


    }
    else if (myMove == 2) {

        if (aiMove == 1) {
            //i win
        }
        else if (aiMove == 2) {
            //tie
        }
        else if (aiMove == 3) {
            //ai win
        }

    }
    else if (myMove == 3) {

        if (aiMove == 1) {
            //ai win
        }
        else if (aiMove == 2) {
            //i wins
        }
        else if (aiMove == 3) {
            //tie
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