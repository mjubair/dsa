/*

Rearrange an array in maxium minimum form

Given a sorted array of positive integers, rearrange the arrray
alternately i.e. first element should be the maxium value, second
minimum value, third-second max, fourth-second min and so on.

*/

const solution = (arr) => {
  const size = arr.length;
  let isMaxTurn = true;
  const result = [];

  for (let i = 0; i < size; i++) {
    if (isMaxTurn) {
      result.push(arr.pop());
      isMaxTurn = false;
    } else {
      result.push(arr.shift());
      isMaxTurn = true;
    }
  }

  return result;
};

console.log(solution([1, 3, 4, 5, 8, 10]));
