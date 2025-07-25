//         *
//       * *
//     * * *
//   * * * *
// * * * * * create pattern in js

n = 5;

for (i = 5; i > 0; i--) {
  let row = " ";
  for (k = 1; k <= i - 1; k++) {
    row = row + "- ";
  }
  for (j = i; j <= n; j++) {
    row = row + "* ";
  }  
  console.log(row);
}
