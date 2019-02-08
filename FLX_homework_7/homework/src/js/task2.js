let confirmationPlay = confirm("Do you want to play a game?");
if (confirmationPlay === true){
    let prize = 10;
    let getPrize = 0;
    let forWhile = true;
    let range = 5;
    while (forWhile === true) {
        for (var i = 3; i > 0; i--){
            let number = prompt ("Enter a number from 0 to " + range + 
            "\n" + "Attempts left: " + i + "\n" + "Total prize: " + getPrize +
            "\n" + "Possible prize on current attempt: " + prize)        
            const result = Math.random() * range;

            if (result === + number) {
                getPrize = getPrize + prize;                
                var winContinue = confirm ("Congratulation! Your prize is: " + getPrize + " Do you want to continue?’");
                if (winContinue === true){
                    prize = prize * 3;
                    range = range * 2;
                    i = 3;
                    break;
                } else {
                    alert ("Thank you for a game. Your prize is: " + getPrize);
                    var playAgain = confirm ("Do you want to play again");
                    if (playAgain === false){                        
                        forWhile = false;
                    } else{ 
                        prize = 10;
                        getPrize = 0;
                        range = 5;
                    }                    
                }
            } else{
                
                prize = prize / 2 >> 0;
                if (i === 1) {
                    playAgain = confirm ("Do you want to play again?");
                    if (playAgain === false){                        
                        forWhile = false;
                    } else{
                        prize = 10;
                        getPrize = 0;
                        range = 5;
                        break;
                    }
                }
            }
        }
    }
}