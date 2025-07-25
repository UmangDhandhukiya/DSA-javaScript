let x = [1,2,3,4,5,6,7,8,9,10]
let y = [1,2,5,3,4]
let z = []

for(i=0;i<=x.length;i++){
    if(x[i]!=y[i]){
        z.push(x[i])
    }
}

console.log(z)