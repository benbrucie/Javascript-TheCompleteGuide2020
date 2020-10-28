const ATTACK_VALUE = 10;
const SRONG_ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 10;

let chosenMaxlife = 100;
let currentMonsterHealth = chosenMaxlife;
let currentPlayerHealth = chosenMaxlife;

adjustHealthBars(chosenMaxlife);

function attackMonster(mode){
  let maxDamage;
  if (mode ==='ATTACK'){
    maxDamage = ATTACK_VALUE;
  }else if (mode === 'STRONG_ATTACK'){
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const monDamage = dealMonsterDamage(maxDamage);
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

function attackHandler(){
  attackMonster('ATTACK');
}

function strongAttackHandler(){
  attackMonster('STRONG_ATTACK');
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
