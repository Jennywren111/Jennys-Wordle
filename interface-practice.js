(function () {

    let letter1 = document.querySelector('#letter1');
    let letter2 = document.querySelector('#letter2');
    console.log(letter1);
    console.log(letter2);

    styleLetter(letter1);

    /* Practice function that tabs to next field. Need to refactor. What do we need to know?
    - Field we're in (learn 'this' Jen!)
    - Next field (so we can tab to it on any keyup except backspace or delete)
    - Previous field (so we can tab back on backspace or delete)
    - Whether we're currently on the first or last field (so we can remain on current field if trying to autotab to a field that doesn't exist!)

    Do I need to do some sort of this.onkeyup(stuff happens) rather than what I have below?
    How do I pass my function the previous and next fields etc? Hmm.... 
    */

    letter1.addEventListener('keyup', () => {
        letter2.focus();
    });

    function styleLetter(letter) {
        letter.classList.add('correct');
        console.log(letter);
    }

    function autoTab() {

    }

}) ();