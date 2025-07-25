// in javascript there are multiple falsy value like [0,false," ",null,NaN,undefined]
// truly value [],{}
function removFalsyValueFromArray(arr){
    result = []
    for(i=0;i<arr.length;i++){
        if(arr[i]){
            result[result.length] = arr[i]
        }
    }
    return result
}

const array = [1,2,0,undefined,3,"",NaN,4,5,false,[],{},null]
console.log(removFalsyValueFromArray(array))