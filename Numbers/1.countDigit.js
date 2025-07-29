function countDigit(digit) {
  let count = 0;

  digit = Math.abs(digit);

  if(digit === 0) return 1

  while (digit > 0) {
    digit = Math.floor(digit / 10);
    count++;
  }
  return count;
}

console.log(countDigit(1));
