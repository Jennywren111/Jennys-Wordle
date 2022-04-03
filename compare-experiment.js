let todaysWord = "cat";
let todaysWordArray = todaysWord.split("");

let guess = "tab";
let guessArray = guess.split("");

let result = [".", ".", "."];

// Can I 'DRY' the above? Array thing is repetitive. I will think on this once I capture the input for "guess".

function findLetterInCorrectPlace(guess, word) {
    
    // Check if item at same index of each array is same. If it is, place it in 'result' & remove matching item from todaysWordArray. Else, add X to result. 
    for (let i = 0; i < guess.length; i++) {
        if(guess[i] === word[i]) {
            result[i] = word[i];
            todaysWordArray.splice(i, 1);
        }
        else {
            result[i] = "X";
        }
    }

}

// Identify correct letters in correct place, remove from todaysWord array
// Identify correct letters in wrong place, replace with a non-alphabet symbol so as to not mess up the array (still to do this)

findLetterInCorrectPlace(guessArray, todaysWordArray);
console.log(`Guess: ${guessArray}`);
console.log(`Today's word with matches removed: ${todaysWordArray}`);
console.log(`Result: ${result}`);