
function findLettersInCorrectPlace(guess, word) {

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

findLettersInCorrectPlace("cat", "bat");
findLettersInCorrectPlace("bird", "bead");
findLettersInCorrectPlace("tea", "tea");


function matchLetters(guess, word) {
    let index = 0;
    for (let letter of guess) {

        if (letter === word[index]) {
            console.log(`${letter} is in the same place in ${guess} as ${word}!`);
        }

        else if (word.includes(letter)) {
            console.log(`${letter} is present in ${word}.`);
        }

        else {
            console.log(`${letter} is not present in ${word}.`);
        }

        index++;
    }
}

// Next step - refactor above function to loop through exact matches first and replace with spaces. 
// Look up frequency analysis and learn what it is.

matchLetters("dog", "mad"); 
matchLetters("now", "win");
matchLetters("act", "cat");
matchLetters("tat", "tot");
matchLetters("mum", "umm");
matchLetters("add", "day");