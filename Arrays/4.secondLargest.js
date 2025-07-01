//find second largest number from array

function findSecondLargest(array) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (i = 0; i <= array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    }
    //if there are duplicate largest value then always return largest value thats why we need to add condition
    else if (array[i] > secondLargest && array[i] !== largest) {
      secondLargest = array[i];
    }
  }
  return secondLargest;
}

// const array = [40, -1, 30, 5, 16, 89, 90, 90];
const array = [-30, -32, -2, -3];
const result = findSecondLargest(array);
console.log(result);
