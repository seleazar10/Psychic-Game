


// variables
var letters = ["a", "b", "c", 'e'];
var choices = [];


var wins = 0;
var losses = 0;
var left = 0;





//event

document.onkeyup = function(){



   

    //store user choice
    var userguess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userguess);
    choices.push(userguess);



    //store computer choice
    var pcguess = letters[Math.floor(Math.random() * letters.length)];
    console.log(pcguess);

    //if-else statement

    if (userguess == pcguess) {
        left++;
        wins++;
        console.log('You won! '+ wins+ ' '+ left )
        
    }else{
        left++;
        losses++;
        console.log('You lost! '+ losses + ' '+ left)
    }


    //upon start - display stat to user

    var stato = "<p>Guess what letter I'm thinking of</p>" + 
    "<p>Wins: " + wins + "</p>" + 
    "<p>Losses: " + losses + "</p>"+ 
    "<p>Guesses Left: " + (10 - left) + "</p>" +
    "<p>Your Guesses so far: " + (choices) + "</p>";


    //getElement - display

    document.querySelector('#gamo').innerHTML = stato;


}

