let totalGames = 0;
let gameLose = 0;
let gameWin = 0;

function computerPlay () {
        let choice = (Math.round(Math.random()*10)%3);
        let hand = "";
        switch(choice){
            case 0:
                hand = "rock";
                break;
            case 1:
                hand = "paper";
                break;
            case 2:
                hand = "scissors";
                break;
        }
        console.log(hand);      //delete this
        return hand;
    }

function newGame(){
    // let gameLose = 0;
    // let gameWin = 0;
    // let totalGames = 0;
        
    while(totalGames != 5){
        let computer = computerPlay();
        let user = prompt("'Rock, paper, SCISSORS!' \n \n time slows down, \n you calculate what the computer may choose next, \n \n Thats it...:")
        // let result = newRound(user.toLowerCase() , computer) ;
        
        compare(user, computer);

        totalGames++;
        console.log(totalGames);
        console.log(gameWin);
        console.log(gameLose);
        
    }
}

function lose() {
    gameLose++;
}
function win() {
    gameWin++;
}
    
function newRound (user, computer){
    const result = compare(computer , user); //should forward gameWin++
    return result;
}

function compare(computer, user){
    if (computer === user){
        console.log(`Draw! Both are ${user}.`);
        return;
    }else if ((computer == 'rock' && user == 'paper') || (computer =='paper' && user == 'scissors') || (computer == 'scissors' && user == 'rock')){
        console.log(`Nice! You beat ${computer} with ${user}`);
        win();
        return; 
    } else {
        console.log(`Aw, fuck! They beat your ${user} with ${computer}`);
        lose();
        return;
    }

}