let answer = ["c", "a", "t"];

let guess = ["b", "a", "r"];

function findLetterInCorrectPlace(guess, answer) {
    
    // Check if item at same index of each array is same. If it is, log it. Else, log X.  
    for (let i = 0; i < guess.length; i++) {
        if(guess[i] === answer[i]) {
            console.log(guess[i]);
        }
        else {
            console.log("X");
        }
    }

}

findLetterInCorrectPlace(guess, answer);