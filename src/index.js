module.exports = function reverse (n) {
  let reversedStr = n.toString().split('').reverse().join('');
  let reversedNum = parseInt(reversedStr);
  return reversedNum;
}
