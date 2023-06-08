function threeSum(decimalNumber) {
// write your code here
 let binaryNumber = "";

  while (decimalNumber > 0) {
    binaryNumber = (decimalNumber % 2) + binaryNumber;
    decimalNumber = Math.floor(decimalNumber / 2);
  }
  return binaryNumber;
}

module.exports = threeSum;
