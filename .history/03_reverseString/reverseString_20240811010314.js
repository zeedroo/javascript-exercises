let newString = "";
const reverseString = function (string) {
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  console.log(newString);
};

reverseString("hello world");
// Do not edit below this line
module.exports = reverseString;
