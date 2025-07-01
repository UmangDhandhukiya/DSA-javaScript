//find max number from array

function findMaxValue(array) {
  let max = -Infinity; //there is built in infinite in only javascript
  for (i = 0; i <= array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

// const array = [10, -12, -8, 7, 4, 1, 20];
const array = [-10, -12, -8, -7, -4, -1, -20]; //if all number are negative in array then use infinity
const result = findMaxValue(array);
console.log(result);
