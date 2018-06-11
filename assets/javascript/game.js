var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var availableUserChoices = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var win = 0;
var losses = 0;
var guesses = 9;
var guessedLetters = [];

document.onkeydown = function(Event) {
    var userGuess = event.key;

    //allows uper case guesses
    userGuess = userGuess.toLowerCase();

    //computer makes a guess
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //limits options to letters
    if (availableUserChoices.includes(userGuess) == false) {
        return;
    }

    //doesn't push letters to guessed letters list if repeated letter
    if (guessedLetters.includes(userGuess)) {
        return;
    }

    if (userGuess == computerGuess) {
        // what happens when user wins
        win++;
        guesses = 9;
        guessedLetters = [];
    } else {
        //what happens when user guesses wrong
        guesses--
        guessedLetters.push(userGuess);
    }

    //what happens when user loses
    if (guesses == 0) {
        losses++;
        guesses = 9;
        guessedLetters = [];
    }

    //display scores on on html
    var html =
        "<p>wins: " + win + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>guesses left: " + guesses + "</p>" +
        "<p>guessed letters: " + guessedLetters + "</p>";

    document.querySelector("#game").innerHTML = html;
};