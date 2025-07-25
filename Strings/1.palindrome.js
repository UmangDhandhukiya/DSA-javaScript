function isPalindrome(string) {
  let result = "";
  for (i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  if (string === result) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("umang"))
console.log(isPalindrome("ababa"))
