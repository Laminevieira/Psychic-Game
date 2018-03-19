

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Set the variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var userGuess = null;
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar);


//computer picks the random number.
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log("Computer picked the letter: " + computerGuess);

document.onkeyup = function (event) {


    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    var reset = function(){
        
        guessesLeft = 9;
        guessesSoFar = [];
        computerGuess = letters[Math.floor(Math.random() * letters.length)];

    }





    //if computerGuess equals to userGuess increase wins.
    if (computerGuess == userGuess) {
        wins++;
        //update appropriate dom elemets
        document.getElementById("wins").innerHTML=("Wins:" +wins);
    
       
        alert("you win")
        //reset game (pick new comp guess, guessesLeft = 9;,  guessesSoFar = [])
        reset();



    } else if (guessesLeft == 0) {
        // if there is no guess left increase losses
        losses++;
        //update appropriate dom elemets
        document.getElementById("losses").innerHTML=("Losses:" +losses)
        alert("you lost");
        //reset game (pick new comp guess, guessesLeft = 9;,  guessesSoFar = [])
        reset();



    } else {
        console.log(guessesSoFar);
        if (guessesSoFar.indexOf(userGuess) < 0) {
            guessesSoFar.push(userGuess);
            guessesLeft--;

            document.getElementById("guesses left").innerHTML=("Guesses Left:" +guessesLeft);

            document.getElementById("guesses so far").innerHTML=("Guesses so Far:" +guessesSoFar);


            
        }
        
    }



}


				// Displaying progress to HTML
				var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I'm thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
				// place html into the game ID
				document.querySelector("#game").innerHTML = html;

