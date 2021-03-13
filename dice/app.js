const resBtn = document.getElementById("res-button");
const guessInp = document.getElementById("guess");
resBtn.innerHTML = "Lets Play";

function rollDice() {
  const dice = [...document.querySelectorAll(".die-list")];
  let sum = 0;
  dice.forEach(die => {
    toggleClasses(die);
	let rndNum = getRandomNumber(1, 6);
	sum = sum + rndNum;
    die.dataset.roll = rndNum;
  });
  console.log("sum ", sum, guessInp.value);
 
 if ( sum === +guessInp.value) {
	 resBtn.style.color="green";
    resBtn.innerHTML = "You Won";
  }	
  else { 
  resBtn.style.color="red";
    resBtn.innerHTML = "You Lost"; 
  }
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("roll-button").addEventListener("click", rollDice);


