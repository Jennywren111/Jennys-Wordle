
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

    // input fields
    let letter1 = document.querySelector('#letter1');
    let letter2 = document.querySelector('#letter2');
    let letter3 = document.querySelector('#letter3');
    let letter4 = document.querySelector('#letter4');
    let letter5 = document.querySelector('#letter5');

    // Autotab code - backspace has been a bit buggy (is it just slow using this method?) - keep an eye!! Also, keyup, keydown and keypress all seem to behave differently. Why??
    letter1.addEventListener('keyup', (e) => {
        if (e.key !== 'Backspace') {
            letter2.focus();
        }
        
    });

    letter2.addEventListener('keyup', (e) => {
        if (e.key === 'Backspace') {
            letter1.focus();
        }
        else {
            letter3.focus();
        }
    });

    letter3.addEventListener('keyup', (e) => {
        if (e.key === 'Backspace') {
            letter2.focus();
        }
        else {
            letter4.focus();
        }
    });

    letter4.addEventListener('keyup', (e) => {
        if (e.key === 'Backspace') {
            letter3.focus();
        }
        else {
            letter5.focus();
        }
    });

    letter5.addEventListener('keyup', (e) => {
        if (e.key === 'Backspace') {
            letter4.focus();
        }
    });

    let button = document.querySelector("button");

    button.addEventListener('click', () => matchLetters(chosenWord));
    letter5.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            matchLetters(chosenWord);
        }
    });

    function matchLetters(word) {

        if (guessNumber >= 6) {
    
            letter1.setAttribute("readonly", "");
            letter2.setAttribute("readonly", "");
            letter3.setAttribute("readonly", "");
            letter4.setAttribute("readonly", "");
            letter5.setAttribute("readonly", "");
            alert("No more guesses!");
        }

        else {

            let resultArray = ["", "", "", "", ""];
            let guessArray = [letter1.value.toUpperCase(), letter2.value.toUpperCase(), letter3.value.toUpperCase(), letter4.value.toUpperCase(), letter5.value.toUpperCase()];
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

            letter1.value = "";
            letter2.value = ""; 
            letter3.value = "";
            letter4.value = ""; 
            letter5.value = "";
            guessNumber++;
            letter1.focus();
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

}) ();


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

