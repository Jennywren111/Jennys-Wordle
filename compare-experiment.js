
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

matchLetters("dog", "mad"); 
matchLetters("now", "win");
matchLetters("act", "cat");
matchLetters("tat", "tot");
matchLetters("mum", "umm");
matchLetters("add", "day");