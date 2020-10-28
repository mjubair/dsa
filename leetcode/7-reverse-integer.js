const solution = (num) => {
  const result = String(Math.abs(num)).split("").reverse().join("");
  if (result > 2 ** 31 - 1) return 0;
  return result * Math.sign(num);
};

console.log(solution(-342));
console.log(solution(123));
console.log(solution(12325252552));
