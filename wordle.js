
(function () {

    let words = ["daisy", "henge", "roots", "bathe", "shoes", "fluff", "dirty", "clean", "roads", "kitty", "tiger", "grass", "bench", "range", "acres", "blank", "walls", "viola", "words", "hives", "hover", "mouse", "honey", "scarf", "trees", "hares", "books", "tease", "zebra", "lolly"];
    
    // Why does this array only seem to receive the first 'change' - for example, on first guess you get 'A' correct but in incorrect place, A goes yellow. If you get it in the correct place on guess 2, it doesn't go green. WHYYYY??? Console seems to log the new version at that position but in the actual array it's not there. Grrr.
    // OF COURSE!!!! The function can't find the index of 'A' in alphabet cos it's been changed to <span> etc. So it doesn't add the new colour. 
    // Maybe I need 2 arrays, one immutable alphabet string to find the index of the guess letter, and the existing alphabet array to actually be changed. 
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const alphabetIndex = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let chosenWord = words[Math.floor(Math.random() * words.length)];
    let guessNumber = 0;

    let alphabetString = alphabet.join('');
    let alphabetDiv = document.querySelector("#alphabet");
    alphabetDiv.innerHTML = alphabetString;

    let button = document.querySelector("button");
    let inputField = document.querySelector(".textfield");
    button.addEventListener('click', () => matchLetters(chosenWord));
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            matchLetters(chosenWord);
        }
    });

    function matchLetters(word) {

        console.log(word);

        if (guessNumber >= 6) {
            inputField.setAttribute("readonly", "");
            inputField.value = "No more guesses!";
        }

        else {

            let guessInput = document.querySelector(".textfield").value;
            let resultArray = ["", "", "", "", ""];
            let guessArray = guessInput.toUpperCase().split("");
            let wordArray = word.toUpperCase().split("");

            // Refactor function to use forEach, as practice. Is this harder to read? Less obvious what the function does cos isn't named...
            guessArray.forEach(function(letter, index, guess) {
                    if (letter === wordArray[index]) {
                        resultArray[index] = `<span class=\"correct\">${letter}</span>`;
                        alphabet[alphabetIndex.indexOf(letter.toUpperCase())] = `<span class=\"correct\">${letter}</span>`;
                        wordArray[index] = "_";
                        guess[index] = ".";
                    }
            });

            markSemicorrectMatches(guessArray, wordArray, resultArray);
            
            let resultParagraph = document.createElement('p');
            let resultString = resultArray.join('');
            resultParagraph.innerHTML = resultString;
            let resultDiv = document.querySelector("div#result");
            resultDiv.append(resultParagraph);

            alphabetString = alphabet.join('');
            alphabetDiv.innerHTML = alphabetString;

            inputField.value = "";
            guessNumber++;

        }

    }

    function markSemicorrectMatches(guess, word, result) {

        for (let i = 0; i < guess.length; i++) {

            if (word.indexOf(guess[i]) !== -1) {
                result[i] = `<span class=\"halfcorrect\">${guess[i]}</span>`;
                alphabet[alphabet.indexOf(guess[i].toUpperCase())] = `<span class=\"halfcorrect\">${guess[i]}</span>`;
                word[word.indexOf(guess[i])] = "_";
                guess[i] = ".";
            }

            else if (guess[i] !== ".") {
                result[i] = `<span class=\"incorrect\">${guess[i]}</span>`;
                alphabet[alphabet.indexOf(guess[i].toUpperCase())] = `<span class=\"incorrect\">${guess[i]}</span>`;
            }
        }
    }

    /* Creating function to replace some of the repeated code above - WORK IN PROGRESS
    function convertArraytoStrAndAppend(arr, div) {
        let p = document.createElement('p');
        let string = arr.join('');
        p.innerHTML = string;
        let divToAppend = document.querySelector(div);
        divToAppend.append(p);
    }

    convertArraytoStrAndAppend(["Testing ", "my ", "function!"], "div#testfunction"); 
    */

}) ();

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
DONE - Add ability to hit enter key to submit guess
DONE WITH SLIGHT LOGIC ISSUE(?) - Log what letters have been used from alphabet (currently retains first colour, i.e. stays green if you got a letter's position correctly, stays yellow if incorrect position, even when you get it in right position) UPDATE - turns out that's how real Wordle works too, well at least for green letters - check yellows! 
DONE - Wrap code in self-executing function for these reasons:
    - If you use same variable name it could cause issues - this takes all vars out of global scope.
    - Stops people hacking the chosenWord in the browser unless they are really determined!
- Limit number of guesses to 6
- Create an input field for each guess and return the result into each input field (how do we prevent inputting into wrong field?)
- Prevent submitting guess unless it has 5 letters, and don't accept numbers or weird characters
- Create more Wordle-like interface
- Create result messages
DONE FOR NOW! - Refactor function (split into fewer?), array methods might be better than for loops?
- REMOVE REPETITION!!!? Particularly on the alphabet generating code.
- Look to eventually rebuild using framework such as React
*/

