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

    //display guesses left
    var html1 =

        "<p>guesses left:</p>" +
        "<p>" + guesses + "</p>";

    document.querySelector("#game").innerHTML = html1;

    //display scores on on html
    var htmlWins = 
        "<p>wins: " + win + "</p>";
    document.querySelector("#wins").innerHTML = htmlWins;

    var htmlLosses = 
        "<p>losses: " + losses + "</p>"
    document.querySelector("#losses").innerHTML = htmlLosses;

    //displays guessed letters
    var htmlGuessed = 
        "<p>guessed letters:</p>" +
        "<p>" + guessedLetters + "</p>";
    document.querySelector("#guessed").innerHTML = htmlGuessed;
};