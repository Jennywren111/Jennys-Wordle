
// Testing logging and changing input value without jQuery - new learnings!

let formInput = document.querySelector("input").value;
console.log(formInput); // should log "Hello"

document.querySelector("input").value = "Goodbye";
console.log(document.querySelector("input").value); // should log "Goodbye"
console.log(formInput); // should STILL log "Hello"


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
