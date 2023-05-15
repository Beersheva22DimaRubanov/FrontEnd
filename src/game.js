//configuration
let nMoves;
//elements
const inputElement = document.getElementById("input-id");
const goButtonElement = document.getElementById("go-id");
const inputGroup = document.getElementsByClassName("input-group")[0];
let squareElements = [];
const squareSection = document.getElementById('square-group');
const resultMessageElement = document.getElementById("game-result");
const playAgainButtonElement = document.getElementById("play-again-id");
const readyButton = document.getElementById("ready-button");
const openLetterButton = document.getElementById("letter-button");
const inpuNumber = document.getElementById("input-number");
const startButton = document.getElementById("start-button")

//global variables
let count;
let openLetters = 0;
let word = '';
const words = [ ['OOP programming language', 'java'], ['The highest mountain in the world?', 'everest'] ];
isWinner = false;

//functions

function game() {
    
    countGreen = 0;
    const inputWord = inputElement.value;
    Array.from(squareElements).forEach(elem =>{
        elem.style.background = 'white'
    })
    
    inputElement.value = "";
    
    
        if(inputWord == word){
            isWinner = true;
        }
        finishGame();
}

function showLetter(){
    const num = inpuNumber.value;
    if(num < 1 || num > word.length){
        alert("Wrong number")
    } else{
        squareElements[num-1].style.backgroundColor = 'white';
        openLetters++;
        inpuNumber.value = '';
    }
    if(openLetters >= count){
        openLetterButton.disabled = true;
        goButtonElement.disabled = false;
        readyButton.style.display = 'none';
    } 
}

function setWord(){
    let index = Math.floor(Math.random() * (words.length ));
    document.getElementById('question').innerHTML = words[index][0];
    word = words[index][1];
    count = Math.floor(word.length/2);
    nMoves = count + 1;
    const wordArray = Array.from(word);
    const divsArray = wordArray.map(letter => `<div class ="square"> ${letter} </div>`)
    squareSection.innerHTML = divsArray.join('');
    squareElements = document.getElementsByClassName('square');

}

function startGame() {
    setWord();
    squareSection.style.display = 'flex';
    inputGroup.style.display = 'flex';
    inputElement.readOnly = false;
    goButtonElement.disabled = false;
    isWinner = false;
    resultMessageElement.innerHTML = '';
    playAgainButtonElement.hidden = true;
    goButtonElement.disabled = true;
    openLetterButton.disabled = false;
    readyButton.style.display = 'block';
}

function finishGame() {
    inputElement.readOnly = true;
    goButtonElement.disabled = true;
    resultMessageElement.innerHTML = isWinner ? "You are the Winner!" : "You are wrong. Try one more time";
    playAgainButtonElement.hidden = false;
}

function showButton(){
    openLetterButton.disabled = true;
    goButtonElement.disabled = false;
    readyButton.style.display = 'none';
}

//Actions

goButtonElement.addEventListener("click", game);
playAgainButtonElement.addEventListener("click", startGame);
openLetterButton.addEventListener("click", showLetter)
readyButton.addEventListener("click", showButton)