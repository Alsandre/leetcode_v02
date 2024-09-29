// It could be that for each there there is formula calculating each member based on position
// I dont know about any formula, but there always is a brute solution
// for solving this problem we need to use some space remembering previous row
// to determine next row we need to make pairs from current row and them together
// each value goes in two pair, pairing with one next to it and one previous to it
// resulting in bigger array by one
// feels like adding 0 on both side of current row could help
// at least not to add but imagine that there it is

// Its hard for me to imagine the algorithm so I'll try to start implementing
// maybe it will come by

function getRow(rowIndex: number): number[] {
  let res = [1];

  if (rowIndex === 0) return res;
  for (let i = 0; i < rowIndex; i++) {
    let tempArr: number[] = [];
    for (let j = 0; j < res.length + 1; j++) {
      if (j === 0 || j === res.length) {
        tempArr.push(0 + res[i]);
      } else {
        tempArr.push(res[j - 1] + res[j]);
      }
    }
    res = tempArr;
  }
  return res;
}

// I found the formula for calculating Pascals Triangle which is:
// C(n, k)= n!/k!(n-k)!
// where C(n, k) is k-th element in n-th row
// utilizing this formula we should get a way better performence

const factorial = (n: number): BigInt => {
  let res = BigInt(1);
  if (n === 0) return res;
  else {
    for (let i = 1; i <= n; i++) {
      res *= BigInt(i);
    }
    return res;
  }
};

function getRowV2(rowIndex: number): number[] {
  let res: number[] = [];
  for (let i = 0; i <= rowIndex; i++) {
    console.log(factorial(rowIndex), (factorial(i) * factorial(rowIndex - i)))
    res.push(factorial(rowIndex) / (factorial(i) * factorial(rowIndex - i)));
  }
  return res;
}

console.log(getRowV2(24))
