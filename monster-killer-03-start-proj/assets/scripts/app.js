const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 10;

let chosenMaxlife = 100;
let currentMonsterHealth = chosenMaxlife;
let currentPlayerHealth = chosenMaxlife;

adjustHealthBars(chosenMaxlife);

function attackHandler(){
  const monDamage = dealMonsterDamage(ATTACK_VALUE);
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);

  currentMonsterHealth -= monDamage;
  currentPlayerHealth -= playerDamage;

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0){
    alert('You won!');
  } else if (currentPlayerHealth <=0 && currentMonsterHealth > 0){
    alert('You lost!');
  } else if (currentPlayerHealth <=0 && currentMonsterHealth <= 0){
    alert('You have a draw');
  }
}

attackBtn.addEventListener('click', attackHandler);
