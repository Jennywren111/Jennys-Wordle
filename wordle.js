
let words = ["daisy", "henge", "roots", "bathe", "shoes", "fluff", "dirty", "clean", "roads", "kitty", "tiger", "grass", "bench", "range", "acres", "blank", "walls", "viola", "words", "hives", "hover", "mouse", "honey", "scarf", "trees", "hares", "books", "tease", "zebra", "lolly"];
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let chosenWord = words[Math.floor(Math.random() * words.length)];

// This chunk of code is being repeated too often! I need to see if I can create a reusable function. 
let alphabetParagraph = document.createElement('p');
let alphabetString = alphabet.join('');
alphabetParagraph.innerHTML = alphabetString;
let alphabetDiv = document.querySelector("div#result");
alphabetDiv.append(alphabetParagraph);

let button = document.querySelector("button");
let inputField = document.querySelector("input");
button.addEventListener('click', () => matchLetters(chosenWord));
inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        matchLetters(chosenWord);
    }
});

function matchLetters(word) {
    console.log(word);
    let guessInput = document.querySelector("input").value;
    let resultArray = ["", "", "", "", ""];
    let guessArray = guessInput.toUpperCase().split("");
    let wordArray = word.toUpperCase().split("");

    for (let i = 0; i < guessArray.length; i++) {

        if (guessArray[i] === wordArray[i]) {
            resultArray[i] = `<span class=\"correct\">${guessArray[i]}</span>`;
            alphabet[alphabet.indexOf(guessArray[i].toUpperCase())] = `<span class=\"correct\">${guessArray[i]}</span>`;
            wordArray[i] = "_"; 
            guessArray[i] = ".";
        }
    }

    for (let i = 0; i < guessArray.length; i++) {

        if (wordArray.indexOf(guessArray[i]) !== -1) {
            resultArray[i] = `<span class=\"halfcorrect\">${guessArray[i]}</span>`;
            alphabet[alphabet.indexOf(guessArray[i].toUpperCase())] = `<span class=\"halfcorrect\">${guessArray[i]}</span>`;
            wordArray[wordArray.indexOf(guessArray[i])] = "_"; 
            guessArray[i] = ".";
        }
        else if (guessArray[i] !== ".") {
            resultArray[i] = `<span class=\"incorrect\">${guessArray[i]}</span>`;
            alphabet[alphabet.indexOf(guessArray[i].toUpperCase())] = `<span class=\"incorrect\">${guessArray[i]}</span>`;
        }
    }
    
    // DRY this code cos it's same as the bit that does the alphabet! Make a function.
    let resultParagraph = document.createElement('p');
    let resultString = resultArray.join('');
    resultParagraph.innerHTML = resultString;
    let resultDiv = document.querySelector("div#result");
    resultDiv.append(resultParagraph);

    // ....and this EXACT BIT OF CODE is used above! That can't be right! Note to self - don't be lazy Jenny!
    alphabetString = alphabet.join('');
    alphabetParagraph.innerHTML = alphabetString;
    alphabetDiv = document.querySelector("div#result");
    alphabetDiv.append(alphabetParagraph);

    document.querySelector("input").value = "";

}

// Creating function to replace some of the repeated code above - WORK IN PROGRESS
function convertArraytoStrAndAppend(arr, div) {
    let p = document.createElement('p');
    let string = arr.join('');
    p.innerHTML = string;
    let divToAppend = document.querySelector(div);
    divToAppend.append(p);
}

convertArraytoStrAndAppend(["Testing ", "my ", "function!"], "div#testfunction")

/*
matchLetters("fruit");
matchLetters("sport");
matchLetters("crate");
matchLetters(chosenWord);
*/

/* Instructions to self! 
DONE - Take input value, send it into function. 
DONE - function needs to push items into array (problems - how to add the letter plus the span HTML?)
DONE - eventually, will need to run the function on click
DONE - Add ability to hit enter key to submit guess
DONE WITH SLIGHT ISSUE- Log what letters have been used from alphabet (currently stays green if you have EVER guessed a letter's position correctly)
- Limit number of guesses to 6
- Create more Wordle-like interface
- Create result messages
- Refactor function (split into fewer?), array methods might be better than for loops?
- REMOVE REPETITION!!! Particularly on the alphabet generating code.
- Look at how alphabet colour coding is working - there is a logic problem here
- Look to eventually rebuild using framework such as React
*/
