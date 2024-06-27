let userscore=0;
let compscore=0;
console.log("hi");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#message");
const uscore=document.querySelector("#userscore");
const cscore=document.querySelector("#compscore");


const compchoice=()=>{
    const options=["rock","paper","scissor"];
    const compchoice=Math.floor(Math.random()*3);
    return options[compchoice];
}

const drawGame = () => {

    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
  };
const showWinner=(userWin,choiceId,genCompChoice)=>{
    if(userWin){
        userscore++;
        uscore.innerText=userscore;
        
        msg.innerText=`You Win! You choose ${choiceId} Computer Chose ${genCompChoice}`;
        msg.style.backgroundColor="green";
    }else{
      compscore++;
      cscore.innerText= compscore;
       
        msg.innerText=`You Lose! You choose ${choiceId} Computer Chose ${genCompChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame = (choiceId) => {
  
    //Generate computer choice
    const genCompChoice = compchoice();
   

    if (choiceId === genCompChoice) {
      //Draw Game
      drawGame();
    } else {
      let userWin = true;
      if (choiceId === "rock") {
        //scissors, paper
        userWin = genCompChoice === "paper" ? false : true;
      } else if (choiceId === "paper") {
        //rock, scissors
        userWin = genCompChoice === "scissors" ? false : true;
      } else {
        //rock, paper
        userWin = genCompChoice === "rock" ? false : true;
      }
      showWinner(userWin,choiceId,genCompChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        playGame(choiceId);
        // if(choiceId==="rock"){

        // }
    });
});