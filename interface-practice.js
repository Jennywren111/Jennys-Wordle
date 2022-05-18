
(function () {

    // Need to store each letter input as a variable so I can add an eventlistener. I think! Or can I add an eventlistener to a parent div and pass the focused input into the function??? Let's test

    let letter1 = document.querySelector('#letter1');
    let letter2 = document.querySelector('#letter2');
    let letter3 = document.querySelector('#letter3');
    let letter4 = document.querySelector('#letter4');
    let letter5 = document.querySelector('#letter5');

    styleLetter(letter1);

    /* Practice function that tabs to next field. Need to refactor. What do we need to know?
    - Field we're in (learn 'this' Jen!)
    - Next field (so we can tab to it on any keyup except backspace or delete)
    - Previous field (so we can tab back on backspace or delete)
    - Whether we're currently on the first or last field (so we can remain on current field if trying to autotab to a field that doesn't exist!)

    Do I need to do some sort of this.onkeyup(stuff happens) rather than what I have below?
    How do I pass my function the previous and next fields etc? Hmm.... 
    */

    // Hmm.. Below is repetitive. 

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
        if (e.key === 'Enter') {
            // function to check letter and style runs here
        }
    });

    function styleLetter(letter) {
        letter.classList.add('correct');
        console.log(letter);
    }

    function autoTab() {

    }

}) ();