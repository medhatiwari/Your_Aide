let userScore=0;
let computerScore=0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div= document.getElementsByClassName("score-board");
const result_div = document.querySelector(".result > p");
const rock = document.getElementById("p");
const paper = document.getElementById("k");
const scissors = document.getElementById("c");

function getComputerChoice(){
    const choices =['p','k','c'];
    const randomNumber= Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function convert(letter){
    if(letter === "p") return "Rock";
    if(letter==="k") return "Paper";
    else return "Scissors";
}
function wins(user,computer) {
    userScore++;
    userScore_span.innerHTML =userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convert(user) +" beats " + convert(computer) +" Woohoo! You win!";
    document.getElementById(user).classList.add('green');
    setTimeout(function(){document.getElementById(user).classList.remove('green')},300);
}
function lose(user,computer) {
    computerScore++;
    userScore_span.innerHTML =userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convert(user) +" loses to " + convert(computer) +", Better luck next time";
    document.getElementById(user).classList.add('red');
    setTimeout(function(){document.getElementById(user).classList.remove('red')},300);
}
function draw(user , _computer) {
    userScore_span.innerHTML =userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "It's a Draw!";
    document.getElementById(user).classList.add('yellow');
    setTimeout(function(){document.getElementById(user).classList.remove('yellow')},300);
}
function Pikachu(userChoice){
    const compChoice = getComputerChoice();
    switch(userChoice + compChoice){
        case "pc":
        case "ck":
        case "kp":
            wins(userChoice , compChoice);
            break;
        case "cp":
        case "kc":
        case "pk":
            lose(userChoice , compChoice);
            break;
        case "pp":
        case "kk":
        case "cc":
            draw(userChoice , compChoice);
            break;
    } 
}


function main(){
rock.addEventListener('click',function(){
    Pikachu("p");
})
paper.addEventListener('click',function(){
    Pikachu("k");
})
scissors.addEventListener('click',function(){
    Pikachu("c");
})}

main();