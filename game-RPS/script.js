console.log("welcome to RPS game");

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScore = document.querySelector(".your-score");
const cScore = document.querySelector(".comp-score");

const getCompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];

}

const gameDraw =()=>{
    msg.innerHTML = "Game Draw. Try Again "
    msg.style.backgroundColor ="black";
    
}

const showWinner = (userWin)=> {
    if(userWin === true){
        msg.innerHTML = " Hurray!! You win" ;
        msg.style.backgroundColor ="green";
        userScore++;
        uScore.innerHTML = userScore ;
    }
    else{
        
        msg.innerHTML = "You lose. Better luck next time !"
        msg.style.backgroundColor ="red";
        compScore++
        cScore.innerHTML = compScore ;
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoise = choice.getAttribute("id");

        playGame(userChoise);
    });
});

const playGame = (userChoise) => {
    const compChoice = getCompchoice();

    // Draw condition
    if (userChoise === compChoice) {
        gameDraw();
    }
    else{
        let userWin = true;
        if(userChoise==="rock"){
            userWin = compChoice==="paper" ? false :true;
        }
        else if(userChoise==="paper"){
            userWin = compChoice==="scissors" ? false :true;
        }
        else{
            userWin = compChoice==="rock" ? false :true;
        }

        showWinner(userWin);
    }

}

