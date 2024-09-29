// Pascals again this time we are working with whole triangle up to index instead of just last row.
// I think that for this situation, using first brute approach would be more straightforward

// brute works fine about 70%

// conditions are messed up this time we have 1 indexed row count instead of 0 indexed

function generate(numRows: number): number[][] {
  let res: number[][] = [[1]];
  let curRow: number[] = [1];

  if (numRows === 1) return res;
  for (let i = 1; i < numRows; i++) {
    let tempArr: number[] = [];
    for (let j = 0; j <= curRow.length; j++) {
      if (j === 0 || j === curRow.length) {
        tempArr.push(1);
      } else {
        tempArr.push(curRow[j - 1] + curRow[j]);
      }
    }
    res.push(tempArr);
    curRow = [...tempArr];
  }
  return res;
}

console.log(generate(3));
