//find count negative number from array

function countNegativeValue(array) {
    let count = 0
    let minus = []
    for(i = 0;i <= array.length;i++){
        if(array[i] < 0){
            count = count+1
            minus.push(array[i])
        }
    }
    return [count,minus]
}

const array = [2,19,0,-30,89,7,2,-2] 
const result = countNegativeValue(array)
console.log(result);
