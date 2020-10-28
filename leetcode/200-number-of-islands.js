const solution = (grid) => {
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === "1") {
        count++;
        traverse(row, col, grid);
      }
    }
  }

  return count;
};

const traverse = (row, col, grid) => {
  if (
    grid[row] === undefined ||
    grid[row][col] === undefined ||
    grid[row][col] === "0"
  )
    return;

  grid[row][col] = "0";

  traverse(row - 1, col, grid);
  traverse(row + 1, col, grid);
  traverse(row, col - 1, grid);
  traverse(row, col + 1, grid);
};

console.log(
  solution([
    ["1", "1", "0"],
    ["1", "0", "0"],
    ["1", "0", "0"],
  ])
);

console.log(
  solution([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);

console.log(
  solution([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);
