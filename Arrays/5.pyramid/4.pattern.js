// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5 cerate pattern in js

const n = 9

for(i = 1; i<=n;i++){
    let row = " "
    for(j = 1; j<=i;j++){
        row = row + " " + i
    }
    console.log(row)
}