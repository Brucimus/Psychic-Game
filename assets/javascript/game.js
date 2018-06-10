var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var win = 0;
var losses = 0;
var guesses = 9;
var guessedLetters = "";

document.onkeydown = function(Event) {
    var userGuess  = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess == computerGuess) {
        win++;
        guesses = 9;
        guessedLetters = "";
    } else {
        guesses--
        guessedLetters = guessedLetters + " " + userGuess;
    }

    if (guesses == 0) {
        losses++;
        guesses = 9;
        guessedLetters = "";
    }

    var html =
        "<p>wins: " + win + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>guesses left: " + guesses + "</p>" +
        "<p>guessed letters: " + guessedLetters + "</p>";

    document.querySelector("#game").innerHTML = html;
};