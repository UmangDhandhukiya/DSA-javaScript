// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * * create patternwith for loop

for (i = 0; i < 5; i++) {
  let row = ""; // in javascript if we need to print character in same row then use this variable

  for (j = 0; j < 5; j++) {
    row += "* "; //we are add string like *****
  }
  console.log(row);
}
