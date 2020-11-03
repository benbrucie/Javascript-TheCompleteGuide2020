//Task 1
const myArray = [2, 4, 6, 8, 10];

const greaterThan5 = myArray.filter(val => val > 5);
console.log(greaterThan5);

const myMaps = myArray.map(val => ({ num: val }));
console.log(myMaps);

const multiplication = myArray.reduce(
  (curResult, curValue) => curResult * curValue,
  1
);
console.log(multiplication);

//Task 2
function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}

console.log(findMax(...myArray));

//Task 3
function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }else if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
}

const [min, max] = findMinMax(...myArray);

console.log(min, max);

//Task 4
const mySet = new Set();
mySet.add(1);
mySet.add(1);
mySet.add(2);

console.log(mySet);
