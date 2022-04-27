
// Testing logging and changing input value without jQuery - new learnings!

let guessInput = document.querySelector("input").value;
console.log(guessInput); // should log "Hello"

let testArray = ["<span class=\"red\">A</span>", "<span class=\"blue\">B</span>", "<span class=\"green\">C</span>", "", ""];
let paragraph = document.createElement('p');
let testHtmlString = testArray.join('');
paragraph.innerHTML = testHtmlString;
let resultDiv = document.querySelector("div#result");
console.log(resultDiv);
resultDiv.append(paragraph);

// Need to refactor matchLetters to return guess with correct / incorrect markers. 

function matchLetters(guess, word) {

    let guessArray = guess.split("");
    let wordArray = word.split("");

    for (let i = 0; i < guessArray.length; i++) {

        if (guessArray[i] === wordArray[i]) {
            console.log(`${guessArray[i]} is in the same place in ${guess} as ${word}!`);
            wordArray[i] = "_"; 
            guessArray[i] = " ";
            console.log(wordArray, guessArray);
        }
    }

    for (let i = 0; i < guessArray.length; i++) {

        if (wordArray.indexOf(guessArray[i]) !== -1) {
            console.log(`${guessArray[i]} is in ${guess} and ${word}, but not in the same place!`);
            wordArray[wordArray.indexOf(guessArray[i])] = "_"; 
            guessArray[i] = " ";
            console.log(wordArray, guessArray);
        }
    }

}



// matchLetters("dog", "mad")); 
// matchLetters("now", "win");
// matchLetters("act", "cat");
// matchLetters("tat", "tot");
// matchLetters("mum", "umm");
// matchLetters("add", "day");


/* Instructions to self! 
- Take input value, send it into function. 
- function needs to push items into array (problems - how to add the letter plus the span HTML?)
- eventually, will need to run the function on click
- scope! Where do all the variables need to be?
- multiple guesses - that's going to make things complicated... Need to eventually rebuild in React or something.
*/