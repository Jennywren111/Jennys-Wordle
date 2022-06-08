
(function () {

    let words = ["daisy", "henge", "roots", "bathe", "shoes", "fluff", "dirty", "clean", "roads", "kitty", "tiger", "grass", "bench", "range", "acres", "blank", "walls", "viola", "words", "hives", "hover", "mouse", "honey", "scarf", "trees", "hares", "books", "tease", "zebra", "lolly"];
    
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const alphabetIndex = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let chosenWord = words[Math.floor(Math.random() * words.length)];
    let guessNumber = 0;

    let alphabetString = alphabet.join('');
    let alphabetDiv = document.querySelector("#alphabet");
    alphabetDiv.innerHTML = alphabetString;

    let inputField = document.querySelector(".textfield");

    inputField.addEventListener('keyup', (e) => {
   
        updateDisplay(inputField.value, e, chosenWord);

    });

    function updateDisplay(guess, e, word) {

        let displayLetters = document.querySelectorAll(`letter-block-${guessNumber} > letter-input`);  // (Can we use a template literal to make displayLetters a different set of boxes each time?) UPDATE - YES WE CAN AND WE DID!!!! :D 
        let guessArray = guess.toUpperCase().split(""); 

        if (e.key === 'Enter' && guess.length === 5) {
            if (e.key === 'Enter') {
                matchLetters(guess, word);
            }
        }

        displayLetters.forEach(function(box, index) {
            if (guessArray[index]) {
                box.innerHTML = guessArray[index];
            }
            else {
                box.innerHTML = " ";
            }
        });
        
    }

    function matchLetters(guess, word) {

        console.log(word);
        
        if (guessNumber >= 6) {
            inputField.setAttribute("readonly", "");
            inputField.value = "No more guesses!";
        }
        

        else {

            let resultArray = ["", "", "", "", ""];  // Either remove this, or use it to populate displayLetters? We may need to use guessNumber to populate a different displayLetters each time and give it focus?
            let guessArray = guess.toUpperCase().split("");
            let wordArray = word.toUpperCase().split("");

            guessArray.forEach(function(letter, index, guess) {
                    if (letter === wordArray[index]) {
                        resultArray[index] = `<span class=\"correct\">${letter}</span>`;
                        alphabet[alphabetIndex.indexOf(letter.toUpperCase())] = `<span class=\"correct\">${letter}</span>`;
                        wordArray[index] = "_";
                        guess[index] = ".";
                    }
            });

            markSemicorrectMatches(guessArray, wordArray, resultArray);
            
            // Won't need the below 5 lines once the displayLetters is updated. 
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
SORT OF DONE - Limit number of guesses to 6
PARTIALLY DONE ON BRANCH 5-INPUT-INTERFACE - Create an input field for each guess and return the result into each input field (how do we prevent inputting into wrong field?)

FOR BRANCH MVC-INTERFACE:
- Create single input field and position off view (once it's all tested.) 
- Create display for guess/result. Guess goes into hidden input - is pushed into array and displayed in letter-input boxes. On click or enter, guess input is checked and style added to each letter-input.  

- Prevent submitting guess unless it has 5 letters, and don't accept numbers or weird characters
- Create more Wordle-like interface
- Create result messages
DONE FOR NOW! - Refactor function (split into fewer?), array methods might be better than for loops?
- REMOVE REPETITION!!!? Particularly on the alphabet generating code.
- Look to eventually rebuild using framework such as React
*/

