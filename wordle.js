
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

        let displayLetters = document.querySelectorAll(`letter-block-${guessNumber} > letter-input`); 
        let guessArray = guess.toUpperCase().split(""); 

        if (e.key === 'Enter' && guess.length === 5) {
            matchLetters(guess, word, displayLetters);
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

    function matchLetters(guess, word, boxes) {

        console.log(word);
        
        if (guessNumber >= 6) {
            inputField.setAttribute("readonly", "");
            inputField.value = "No more guesses!";
        }
        

        else {

            // let resultArray = ["", "", "", "", ""];  
            let guessArray = guess.toUpperCase().split("");
            let wordArray = word.toUpperCase().split("");

            markCorrectMatches(guessArray, wordArray, boxes);

            markSemicorrectMatches(guessArray, wordArray, boxes);

            alphabetString = alphabet.join('');
            alphabetDiv.innerHTML = alphabetString;

            inputField.value = "";
            guessNumber++;

        }

    }

    function markCorrectMatches(guess, word, boxes) {
        guess.forEach(function (letter, index, guess) {
            if (letter === word[index]) {
                alphabet[alphabetIndex.indexOf(letter.toUpperCase())] = `<span class=\"correct\">${letter}</span>`;
                boxes[index].classList.add("correct");
                word[index] = "_";
                guess[index] = ".";
            }
        });
    }

    function markSemicorrectMatches(guess, word, boxes) {
        guess.forEach(function (letter, index, guess) {
            if (word.indexOf(letter) !== -1) {
                alphabet[alphabet.indexOf(letter.toUpperCase())] = `<span class=\"halfcorrect\">${letter}</span>`;
                boxes[index].classList.add("halfcorrect");
                word[word.indexOf(letter.toUpperCase())] = "_";
                guess[index] = ".";
            }
            else if (letter !== ".") {
                boxes[index].classList.add("incorrect");
                alphabet[alphabet.indexOf(letter.toUpperCase())] = `<span class=\"incorrect\">${letter}</span>`;
            }
        });
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

