//reverse Array 

function reverseArray(array){

    let newArray = []

    for(i=array.length-1;i>=0;i--){
        newArray.push(array[i])
    }
    return newArray
}

const array = [18,89,21,9,12]
const result = reverseArray(array)

console.log(result)