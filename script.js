let totalGames = 0;
let gameLose = 0;
let gameWin = 0;
const btns = document.querySelectorAll('button');
const games = document.querySelector('#games');
const wins = document.querySelector('#wins');
const loses = document.querySelector('#loses');

btns.forEach(btn => btn.addEventListener('click', newRound));

function newRound(e){
    let computer = computerPlay();
    let user= e.target.id;
    compare(user, computer);
}

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
    // let gameLose = 0;        //redundant variables
    // let gameWin = 0;
    // let totalGames = 0;
        
    while(totalGames != 5){
        let computer = computerPlay();
        // let user = prompt("'Rock, paper, SCISSORS!' \n \n time slows down, \n you calculate what the computer may choose next, \n \n Thats it...:")
        
        // newRound(user.toLowerCase() , computer) ;    //redundant function call
        
        compare(user.toLowerCase(), computer);     

        // totalGames++;
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


function compare(computer, user){

        totalGames++;
        games.textContent = totalGames;
    if (computer === user){
        console.log(`Draw! Both are ${user}.`);
        return;
    }else if ((computer == 'rock' && user == 'paper') || (computer =='paper' && user == 'scissors') || (computer == 'scissors' && user == 'rock')){
        console.log(`Nice! You beat ${computer} with ${user}`);
        win();
        wins.textContent= gameWin;
        return; 
    } else {
        console.log(`Aw, fuck! They beat your ${user} with ${computer}`);
        lose();
        loses.textContent= gameLose;
        return;
    }

}