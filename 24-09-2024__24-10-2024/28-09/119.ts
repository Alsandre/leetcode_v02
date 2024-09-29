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

const factorial = (n: number): number => {
  let res = 1;
  if (n === 0) return res;
  else {
    for (let i = 1; i <= n; i++) {
      res *= i;
    }
    return res;
  }
};

function getRowV2(rowIndex: number): number[] {
  let res: number[] = [];
  for (let i = 0; i <= rowIndex; i++) {
    console.log(factorial(rowIndex), factorial(i) * factorial(rowIndex - i));
    res.push(factorial(rowIndex) / (factorial(i) * factorial(rowIndex - i)));
  }
  return res;
}
console.log(getRowV2(24));

// factorials get out of hand because of integer limit in JS

// I found anohter approach and I'll try to implement it
// general form for finding row according to newly found approach is:
// we start at 1 following we multiply by number counting down from row number
// and divide by counting up from 1

// this means for 3:
// first value is 1
// second value is 1*3/1 = 3
// third value is 3*2/2 = 3
// fourth value is 3*1/3 = 1
// result 1, 3, 3, 1
// this actually represents third (0 based) row in pascals triangle

// algorithm would look something like this:

// step 1 - create variable pointer and set it to 1
// step 2 - create variable rowList and set it to empty list ([])
// step 3 - create variable pointer2 and set it to row number
// step 4 - setup loop incremental loop from 0 to desired row count with condition including the count
// step 5 - if index is 0 push pointer to rowList
// step 6 - else set pointer to pointer*index/pointer2 and push it to rowList
