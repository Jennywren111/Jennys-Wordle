let words = ["daisy", "henge", "roots", "bathe", "shoes", "fluff", "dirty", "clean", "roads", "kitty", "tiger", "grass", "bench", "range", "acres", "blank", "walls", "viola", "words", "hives", "hover", "mouse", "honey", "scarf", "trees", "hares", "books", "tease", "zebra", "lolly"];

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function chooseRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let chosenWord = chooseRandomItem(words);
let chosenLetter = chooseRandomItem(alphabet);

function isLetterInWord(letter) {
    if(chosenWord.indexOf(letter) > -1) {
        return `Yes, "${letter}" is in the chosen word!`;
    }
    else {
        return `Letter "${letter}", let's see... Nope, not in ${chosenWord}.`;
    }
}

console.log(`This function chooses a random word: ${chosenWord}`);

console.log(`This function checks whether a given letter is in a word: ${isLetterInWord(chosenLetter)}`);

function locateLetterInWord(letter, word) {
    let result = "";
    for (let i = 0; i < word.length; i++) {
        if(word[i] === letter) {
            result += "✓";
        }
        else {
            result += "X";
        }
    }
    return result;
}

console.log(`This function locates a given letter (${chosenLetter}) in a word (${chosenWord}): ${locateLetterInWord(chosenLetter, chosenWord)}`);



// Checks letters in guess against a word

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

console.log($result);

matchLetters("dog", "mad"); 
matchLetters("now", "win");
matchLetters("act", "cat");
matchLetters("tat", "tot");
matchLetters("mum", "umm");
matchLetters("add", "day");

