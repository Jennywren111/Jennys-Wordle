let words = ["daisy", "henge", "roots", "bathe", "shoes", "fluff", "dirty", "clean", "roads", "kitty", "tiger", "grass", "bench", "range", "acres", "blank", "walls", "viola", "words", "hives", "hover", "mouse", "honey", "scarf", "trees", "hares", "books", "tease", "zebra", "lolly"];

function chooseRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

let chosenWord = chooseRandomWord();

function isLetterInWord(letter) {
    if(chosenWord.indexOf(letter) > 0) {
        return letter + " is in the chosen word!"
    }
    else {
        return "Nope. Not here."
    }
}

console.log(chosenWord);

console.log(isLetterInWord("a"));