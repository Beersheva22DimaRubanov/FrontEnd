//configuration
const nMoves = 3;
//elements
const inputElement = document.getElementById("input-id");
const goButtonElement = document.getElementById("go-id");
const squareElements = document.getElementsByClassName("square");
const resultMessageElement = document.getElementById("game-result");
const playAgainButtonElement = document.getElementById("play-again-id");

//global variables
let count = 0;
const word = 'align';
isWinner = false;

//functions

function game() {
    countGreen = 0;
    const inputWord = inputElement.value;
    for (let i = 0; i < word.length; i++) {
        let char = inputWord.charAt(i);
        if (checkChar(char, squareElements[i], i) == 'green') {
            countGreen++;
        }
    }
    count++;
    inputElement.value = "";
    if (count == nMoves || countGreen == word.length) {
        if(countGreen == word.length){
            isWinner = true;
        }
        finishGame();
    }

}

function checkChar(char, squareElement, index) {
    let color = 'red';
    let count = 1;
    for (i = 0; i < word.length; i++) {
        if (word.charAt(i) == char && i == index) {
            color = 'green';
            count++;
        } else if (word.charAt(i) == char && i != index) {
            color = 'yellow';
        }
    }
    squareElement.innerHTML = char;
    squareElement.style.backgroundColor = color;
    return color;
}

function startGame() {
    count = 0;
    inputElement.readOnly = false;
    goButtonElement.disabled = false;
    for (i = 0; i < squareElements.length; i++) {
        squareElements[i].style.backgroundColor = 'white';
        squareElements[i].innerHTML = '';
    }
    isWinner = false;
    resultMessageElement.style.display = '';
    playAgainButtonElement.hidden = true;
}

function finishGame() {
    inputElement.readOnly = true;
    goButtonElement.disabled = true;
    resultMessageElement.innerHTML = isWinner ? "You are the Winner!" : "Try one more time";
    playAgainButtonElement.hidden = false;
}

//Actions

goButtonElement.addEventListener("click", game);
playAgainButtonElement.addEventListener("click", startGame);
startGame();