function chechkIsIntersection(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) {
    return [];
  }

  const newArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      newArray.push(arr1[i]);
      i++;
      j++;
    }
  }

  return newArray;
}

const array1 = [1, 23, 46, null, 3, 9, 0];
const array2 = [1, 46, 9, 0, 2, 3, 56, 7767, 8667, 342, 303, null];
console.log(chechkIsIntersection(array1, array2));
