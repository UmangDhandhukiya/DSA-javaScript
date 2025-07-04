// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * * create patternwith for loop

const n = 5

for (i = 0; i < n; i++) {
  let row = ""; // in javascript if we need to print character in same row then use this variable

  for (j = 0; j < n; j++) {
    row += "* "; //we are add string like *****
  }
  console.log(row);
}
