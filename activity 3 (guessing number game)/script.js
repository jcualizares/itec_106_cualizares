const minNum = 1;
const maxNum = 10;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let attempts = 0;

function checkGuess() {
    let userGuess = parseInt(document.getElementById('userGuess').value);

    if (isNaN(userGuess) || userGuess < minNum || userGuess > maxNum) {
        document.getElementById('message').textContent = "Invalid input: Please input a number between 1 - 10";
    } else {
        attempts++;
        if (userGuess === answer) {
            document.getElementById('message').textContent = `Congratulations! You've guessed the correct number ${answer} in ${attempts} attempts.`;
            answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
            attempts = 0;
        } else if (userGuess < answer) {
            document.getElementById('message').textContent = "Too low! Try again.";
        } else {
            document.getElementById('message').textContent = "Too high! Try again.";
        }
    }
}
