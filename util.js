function reverseString(str) {
  let reverseStr = "";
  const name = "faizan";
  const strLength = str.length;

  for (let i = strLength - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  return reverseStr;
}
const string = "faizan";
const result = reverseString(string);

console.log("reverse string: ", result);
