
// Testing logging and changing input value without jQuery - new learnings!

let guessInput = document.querySelector("input").value;
console.log(guessInput); // should log "Hello"


function matchLetters(guess, word) {

    let resultArray = ["", "", "", "", ""];
    let guessArray = guess.split("");
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

matchLetters("fluff", "fruit");
matchLetters("snore", "sport");
matchLetters("trace", "crate");
matchLetters("heads", "death");



/* Instructions to self! 
- Take input value, send it into function. 
DONE - function needs to push items into array (problems - how to add the letter plus the span HTML?)
- eventually, will need to run the function on click
- scope! Where do all the variables need to be?
- multiple guesses - that's going to make things complicated... Need to eventually rebuild in React or something.
*/