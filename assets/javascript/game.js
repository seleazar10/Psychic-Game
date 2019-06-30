


// variables
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
"Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var choices = [];
var pcchoices = [];




//counter 
var wins = 0;
var losses = 0;
var left = 10;



//restart

function restart() {

    
    choices = []
 
    
}

function askToPlayAgain() {
    var nextRound = confirm("Press OK to play again!");
    if (nextRound== true){
        restart();
        
    }else{
        
        left = 0;
        // var persist = confirm('Why are you scared Oz!!! Press OK to try one last time! :)')
               
        

    }
        
}




//event

document.onkeyup = function(event) {





    //store user choice
    var userguess = event.key.toLocaleUpperCase();
    console.log(userguess);
    choices.push(userguess);



    // store computer choice 
    var pcguess = letters[Math.floor(Math.random() * letters.length)];
    console.log(pcguess);
    pcchoices.push(pcguess);


  


    //if-else statement

    if (userguess === pcguess) {
        left = 10;
        wins++;
        console.log('You won! ' + wins + ' Left: ' + left)
        askToPlayAgain();


    } else {
        left--;
        if(left < 0){
            left = 10;
            losses++;
            console.log('You lost! ' + losses + ' Left: ' + left)
            askToPlayAgain();


        }
              
        
    }


    //upon start - display stat to user

    var stato = "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + (left) + "</p>" +
        "<p>Your Guesses so far: " + (choices) + "</p>";


    //getElement - display

    document.querySelector('#gamo').innerHTML = stato;


}



