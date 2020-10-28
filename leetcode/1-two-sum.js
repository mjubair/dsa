/*

BRUTE FORCE
===========

Time Complexity => O(N^2)

Iterate through the arr once
    for Each element iterate the loop again to check
    if there is another element that sums to the target value j+1
        if there arr[i] + arr[j] == target
            return [i, j]
return []

*/

function solution(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }

  return null;
}

/*

OPTIMIZED SOLUTION
=====================

Time Complexity => O(N)

crate a hash map data structure

Iterate through the array once
  if current value exists in the hash map
    return [object[current index], current index]

  if not add key as (target minus current value) and value as current index

return null

*/

function solution(arr, target) {
  const obj = {};

  for (i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (obj[num] !== undefined) return [obj[num], i];

    obj[target - num] = i;
  }

  return null;
}

console.log(solution([2, 7, 6], 9));
console.log(solution([2, 7, 6, 8, 8], 16));
console.log(solution([2, 7, 6, 8, 5], 16));
