// * * * * *
// * * * *
// * * *
// * *
// * create patter in js

const n = 5;

// for(i = 1; i <= n; i++ ){
//     let row = " "
//     for(j=0;j<=n-i;j++){
//         row = row + " " + "*"
//     }
//     console.log(row)
// }

for (i = n; i >= 0; i--) {
  let row = " ";
  for (j = 1; j <= i; j++) {
    row = row + "* ";
  }
  console.log(row);
}
