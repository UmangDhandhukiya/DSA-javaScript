// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2
// 1 create patern in js

// const n = 5

// for(i=n; i>=0; i--){
//     let row = " "
//     for(j = 1; j <= i; j++){
//         row = row + " " + j 
//     }
//     console.log(row)
// }

const n = 5

for(i = 1; i <= n; i++ ){
    let row = " "
    for(j=0;j<=n-i;j++){
        row = row + " " + (j+1)
    }
    console.log(row)
}