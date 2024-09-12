// Given an array of size N, find the majority element. The majority element is the element that appears more than floor(N/2) times.
// You may assume that the array is non-empty and the majority element always exist in the array.

const majorityElement = function (A) {
  // if (A.length <= 2) return A[0]
  const obj = {};
  let maxVal,
    count = 0;
  for (const val of A) {
    if (obj[val] === undefined) {
      obj[val] = 1;
    } else {
      obj[val]++;
    }
  }
  for (const key in obj) {
    if (obj[key] > count) {
      count = obj[key];
      maxVal = key;
    }
  }
  return maxVal;
};

//Moore voting Algorithm
const majorityElementMoore = function (A) {
  let count = 0,
    item = null;
  for (const val of A) {
    if (count === 0) {
      item = val;
      count = 1;
    } else if (val === item) {
      count++;
    } else {
      count--;
    }
  }
  return Number(item);
};
