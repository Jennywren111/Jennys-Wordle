
let words = ["daisy", "henge", "roots", "bathe", "shoes", "fluff", "dirty", "clean", "roads", "kitty", "tiger", "grass", "bench", "range", "acres", "blank", "walls", "viola", "words", "hives", "hover", "mouse", "honey", "scarf", "trees", "hares", "books", "tease", "zebra", "lolly"];

let chosenWord = words[Math.floor(Math.random() * words.length)];

let button = document.querySelector("button");
button.addEventListener('click', () => matchLetters(chosenWord));

function matchLetters(word) {
    console.log(word);
    let guessInput = document.querySelector("input").value;
    let resultArray = ["", "", "", "", ""];
    let guessArray = guessInput.split("");
    let wordArray = word.split("");

    for (let i = 0; i < guessArray.length; i++) {

        if (guessArray[i] === wordArray[i]) {
            resultArray[i] = `<span class=\"correct\">${guessArray[i]}</span>`;
            wordArray[i] = "_"; 
            guessArray[i] = ".";
        }
    }

    for (let i = 0; i < guessArray.length; i++) {

        if (wordArray.indexOf(guessArray[i]) !== -1) {
            resultArray[i] = `<span class=\"halfcorrect\">${guessArray[i]}</span>`;
            wordArray[wordArray.indexOf(guessArray[i])] = "_"; 
            guessArray[i] = ".";
        }
        else if (guessArray[i] !== ".") {
            resultArray[i] = `<span class=\"incorrect\">${guessArray[i]}</span>`;
        }
    }

    let paragraph = document.createElement('p');
    let resultString = resultArray.join('');
    paragraph.innerHTML = resultString;
    let resultDiv = document.querySelector("div#result");
    resultDiv.append(paragraph);

}

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
Thoughts...
- scope! Where do all the variables need to be? What do I pass in as an argument and what do I just call in via its variable if that makes sense?
- Refactor function to make more efficient, array methods might be better than for loops?
- multiple guesses - that's going to make things complicated... Need to eventually rebuild in React or something.
Next steps...
- Log what letters have been used from alphabet
- Limit number of guesses to 6
- Create more Wordle-like interface
- Create result messages
*/