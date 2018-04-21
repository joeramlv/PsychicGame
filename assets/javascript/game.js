var choices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guessesLeft = 9;
var guessedLetters = [];
var wins = 0;
var losses = 0;
var userguess = null;

// we made the computer choose a letter out of the "choices" array
var compGuess = choices[Math.floor(Math.random() * choices.length)];
console.log(compGuess);

// we data logged what keys the user is letting go of
document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode)
    .toLocaleLowerCase()
    
    console.log(userguess);

    if (userguess === compGuess) {
        wins++; 
        document.getElementById("wins").innerHTML = wins;
        
    } else {
        guessesLeft--;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
    }if (guessedLetters.indexOf(userguess) < 0 && choices.indexOf(userguess) >= 0) {

            guessedLetters[guessedLetters.length] = userguess; 
            document.getElementById("guessessofar").innerHTML = guessedLetters;
    }if (guessesLeft === 0) {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        alert("U Aint Psychic, you a Sidechick")
        guessesLeft = 9;
        
        

    }
}
