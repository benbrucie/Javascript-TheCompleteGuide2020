const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7){
    alert('Greater than 0.7');
}

console.log('--------------');

let myArray = [1,2,3,4,5];

for (let i = (myArray.length - 1); i >= 0; i-- ){
    console.log(myArray[i]);
}

console.log('--------------');

for (const el of myArray){
    console.log(el);
}

const randomNumber2 = Math.random()

if (randomNumber > 0.7 && randomNumber2 > 0.7 randomNumber <= 0.2 ||
randomNumber2 <= 0.2){
    alert('Greater than 0.7 or smaller than 0.2');
} 