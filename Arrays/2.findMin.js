// find minimum value from array

const findMinValue = (array) => {
  let min = Infinity;
  for (i = 0; i <= array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
};

// const array = [22, 4, 21, 2, 8, 9, 19];
const array = [-29,-10,-20,-302,-1,-12,90] // if there are value in minus
const result = findMinValue(array);
console.log(result);
