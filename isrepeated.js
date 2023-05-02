function isRepeated(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const curr = str[i];
    charCount[curr] = (charCount[curr] || 0) + 1;
  }

  for (let j = 0; j < str.length; j++) {
    const curr = str[j];
    if (charCount[curr] === 1) {
      return curr;
    }
  }
}

console.log(isRepeated("feeramizzrdsafs"));
