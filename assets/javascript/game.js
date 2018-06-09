var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var win = 0;
var losses = 0;
var guesses = 9;

document.onkeyup = function(Event) {
    var userGuess  = event.key;

    if (typeof(userGuess) == "string") {
        alert("This is not a letter.")
        return;
    } else if (userGuess.length < 2) {
        alert("Please enter one letter at a time.")        
        return;
    }

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess.toLowercase() == computerGuess) {
        win++;
        guesses = 9;
    } else if (guesses = 0) {
        losses++;
        guesses = 9;
    }
}