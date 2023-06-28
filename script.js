function getComputerChoise() {
    var rock = 1;
    var paper = 2;
    var scissors = 3;
    var choice; 
    var random = Math.floor(Math.random() * (3 - 1 + 1 ) + 1);
    if(random == 1){
        choice = "rock";               
    }else if(random == 2){
        choice = "paper";
    }else{
        choice = "scissors";
    }
    return choice;
}

function playerRound(playerSelection, computerSelection) {
    racizb = computerSelection;
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        return("Neodločeno");
        
        
    }
    if((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")){
            playerScore++;
            return("Zmagal si! Čestitke");
    }
    if((playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissors")){
            computerScore++;
            return("Izgubil si! Več sreče prihodnjič");

    }
    
}

function popup() {
    let popup = document.querySelector(".popup");
    popup.style.display = "initial";
}

function popupclose(){
    let popup = document.querySelector(".popup");
    popup.style.display = "none";
}
let playerScore = 0;
let computerScore = 0;

let rockBtn = document.getElementById("rock")
let paperBtn = document.getElementById("paper")
let scissorsBtn= document.getElementById("scissors")
let p = document.getElementById("p")
let racizbira = document.getElementById("racizbira")
let racizb;

rockBtn.addEventListener('click', () => handleClick('rock'))
paperBtn.addEventListener('click', () => handleClick('paper'))
scissorsBtn.addEventListener('click', () => handleClick('scissors'))

function handleClick(playerSelection) {
    popup();
    p.textContent = playerRound(playerSelection, getComputerChoise())
    switch(racizb) {
        case "rock":
            racizbira.textContent = "Računalnik je izbral: KAMEN";
            break;
        case "paper":
            racizbira.textContent = "Računalnik je izbral: PAPIR";
            break;
        case "scissors":
            racizbira.textContent = "Računalnik je izbral: ŠKARJE";
            break;
    }
    
    
}

