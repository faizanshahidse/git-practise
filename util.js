function reverseString(str) {
  let reverseStr = "";
  const strLength = str.length;
  console.log("str length: ", strLength);

  for (let i = strLength - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  return reverseStr;
}
const string = "faizan";
const result = reverseString(string);

console.log("reverse string: ", result);
