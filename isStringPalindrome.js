function isStringPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let arr = str.split("");
  let startingIndex = 0;
  let endingIndex = arr.length - 1;

  while (startingIndex < endingIndex) {
    if (arr[startingIndex] !== arr[endingIndex]) {
      return false;
    }
    startingIndex++;
    endingIndex--;
  }
  return true;
}

console.log(isStringPalindrome("2fefef2"));
