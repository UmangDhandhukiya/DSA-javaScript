function playWithArray(array) {
    let result = []
    let half = Math.floor(array.length / 2)

    for (let i = 0; i < half; i++) {
        result[i] = Math.abs(array[array.length-1 - i] - array[i])
    }

    let index = half
    for (let j = array.length - 1; j >= half; j--) {
        result[index] = array[j]
        index++
    }

    return result
}

const array = [10, 8, 3, 4, 5, 6]
console.log(playWithArray(array))
// Output: [4, 3, 1, 6, 5, 4]
