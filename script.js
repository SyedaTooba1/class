let wrongGuessCount;
let randomNumber;
function resetGame() {
    randomNumber = parseInt(Math.random() * 101);
    wrongGuessCount = 0;
}

resetGame();

function guessTheNumber() {
    let input = parseInt(document.querySelector("input").value);
    if (input > randomNumber) {
        alert("To Big");
        wrongGuessCount++;
    } else if (input < randomNumber) {
        alert("To Small");
        wrongGuessCount++;
    } else {
        alert("congratulations You Have Won, your wrong guesses " + wrongGuessCount);
        resetGame();
    }
}