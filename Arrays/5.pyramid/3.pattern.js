// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5 create pattern using js

const n = 10;

for (i = 1; i <= n; i++) {
  let row = " ";

  for (j = 1; j <= i; j++) {
    row = row + " " + j;
  }

  console.log(row);
}
