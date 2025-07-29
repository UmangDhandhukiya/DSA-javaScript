let x = [30, 38, 310, 10, 2, 340, 32, 21, 39];
let y = [39, 310, 38, 39];

console.log(removeDuplicate(x, y));

function removeDuplicate(x, y) {
  let result = [];
  for (i = 0; i < x.length; i++) {
    let duplicate = false;
    for (j = 0; j < y.length; j++) {
      if (x[i] == y[j]) {
        duplicate = true;
        break;
      }
    }
    if (!duplicate) {
      result.push(x[i]);
    }
  }
  return result;
}
