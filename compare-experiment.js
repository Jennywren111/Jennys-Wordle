
function findLetterInCorrectPlace(guess, word) {

    let todaysWordArray = word.split("");
    let guessArray = guess.split("");
    let result = [".", ".", "."];

    console.log(`Today's word: ${todaysWordArray}`);

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