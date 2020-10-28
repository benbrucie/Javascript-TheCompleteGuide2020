const ATTACK_VALUE = 8;
const STRONG_ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 15;
const HEAL_VALUE = 10;

const enteredValue = prompt('Maximum life for you and monster', '100');

let chosenMaxlife = parseInt(enteredValue);

if (isNaN(chosenMaxlife) || chosenMaxlife <= 0){
  chosenMaxlife = 100;
}

let currentMonsterHealth = chosenMaxlife;
let currentPlayerHealth = chosenMaxlife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxlife);

function reset(){
  currentMonsterHealth = chosenMaxlife;
  currentPlayerHealth = chosenMaxlife;
  resetGame(chosenMaxlife);
}

function endRound(){
  const initailPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife){
    hasBonusLife = false;
    removeBonusLife ();
    currentPlayerHealth = initailPlayerHealth;
    setPlayerHealth(initailPlayerHealth);
    alert('You would be dead but the bonus life saved you!');
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0){
    alert('You won!');
  } else if (currentPlayerHealth <=0 && currentMonsterHealth > 0){
    alert('You lost!');
  } else if (currentPlayerHealth <=0 && currentMonsterHealth <= 0){
    alert('You have a draw');
  }

  if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0){
    reset();
  }
}

function attackMonster(mode){
  let maxDamage;
  if (mode ==='ATTACK'){
    maxDamage = ATTACK_VALUE;
  }else if (mode === 'STRONG_ATTACK'){
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}

function attackHandler(){
  attackMonster('ATTACK');
}

function strongAttackHandler(){
  attackMonster('STRONG_ATTACK');
}

function healPlayerHandler(){
  let healValue;
  if (currentPlayerHealth >= chosenMaxlife - HEAL_VALUE){
    alert("You can't heal more than intial max health.");
    healValue = chosenMaxlife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  //endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
