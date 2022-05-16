(function () {

    let letter01 = document.querySelector("#letter1");
    console.log(letter01);

    styleLetter(letter01);

    function styleLetter(letter) {
        letter.classList.add('correct');
        console.log(letter);
    }

}) ();