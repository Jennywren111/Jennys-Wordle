
function findLetterInCorrectPlace(guess, word) {

    let todaysWordArray = word.split("");
    let guessArray = guess.split("");
    let result = [".", ".", "."];

    console.log(`Today's word: ${todaysWordArray}`);

    // Check if item at same index of each array is same. If it is, place it in 'result' & remove matching item from todaysWordArray. Else, add X to result. 

    for (let i = 0; i < guess.length; i++) {
        if(guess[i] === word[i]) {
            result[i] = word[i];
            todaysWordArray[i] = " ";
        }
        else {
            result[i] = "*";
        }
    }

    console.log(`Guess: ${guessArray}`);
    console.log(`Today's word with matches removed: ${todaysWordArray}`);
    console.log(`Result: ${result}`);

}

findLetterInCorrectPlace("cat", "bat");

findLetterInCorrectPlace("bird", "bead");

findLetterInCorrectPlace("tea", "tea");