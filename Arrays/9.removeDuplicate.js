function removeDuplicateValue(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    duplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (array[i] === result[j]) {
        duplicate = true;
        break;
      }
    }
     if (!duplicate) {
      result.push(array[i]);
    }   
  }
  return result
}

const array = [5, 4, 3, 1, 2, 7, 7, 8, 9, 1, 3, 5];
console.log(removeDuplicateValue(array));
