function numberIsPalindrome(digit) {
  let reminder = 0;
  let result = 0;

  let number = Math.abs(digit);

  while (number > 0) {
    reminder = number % 10;
    result = result * 10 + reminder;
    number = Math.floor(number / 10);
  }

  if (result === Math.abs(digit)) {
    return digit + " -> " + result
  } else {
    return digit + " is not palindrom " + result
  }
}

console.log(numberIsPalindrome(567890));