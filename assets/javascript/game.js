


// counter
var letters = ["a", "b", "c"];
var wins = 0;
var losses = 0;
var left = 0;


//event

document.onkeyup = function(){

    //store user choice
    var userguess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userguess);



    //store computer choice
    var pcguess = letters[Math.floor(Math.random() * letters.length)];
    console.log(pcguess);

    //if-else statement

    if (userguess == pcguess) {
        wins++;
        console.log('You won! '+ wins)
        
    }else{
        losses++;
        console.log('You lost! '+ losses)
    }


    //display stat to user
    


}

