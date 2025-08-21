function playWithString(string) {
  let result = [];
  let char = "e";
  let array = string.split(" ");

  for (i = 0; i < array.length; i++) {
    let numberOfTimes = 3;
    let str = array[i];

    for (j = 0; j < str.length; j++) {
      if (str[j] == char) {
        numberOfTimes--;
      }
    }

    if (numberOfTimes == 0) {
      result.push(str);
    }
  }

  return result;
}

const string = "hello, good morning bookkeeper";
console.log(playWithString(string));
