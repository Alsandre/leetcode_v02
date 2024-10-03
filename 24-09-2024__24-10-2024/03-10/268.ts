// looks trivial at first glance, to just solve
// triviality comes from built in index of method
// but knowing the fact that under the hood index of is quite inefficient
// this either wont work, or would be inefficient
// managable and more optimal solution seems to be hashmapping the array

// trivial algo:
// step 1 - setup loop from 0 to given length
// step 2 - return iteration number for which indexOf returns -1

function _missingNumber(nums: number[]): number {
  for (let i = 0; i <= nums.length; i++) {
    if (nums.indexOf(i) === -1) return i;
  }
  return -1;
}

// now for more optimised solution lets go with hashmapping
// current solution has O(n^2) time complexity
// iterating over array
// and per iteration scanning (iterating) array
// scanning in hash map is done in O(1)
// so during first iteration over array we will create hashmap
// this is O(n)
// then we loop again to find missing value O(n)
// overall this is 2xO(n) which is O(n)

// algo:

// step 1 - create hashmap
// step 2 - iterate over array
// step 3 - whilte iterating hash each value
// step 4 - setup loop from 0 to array length
// step 5 - for iteration index that is not present in hashmap return index

function missingNumber(nums: number[]): number {
  let hashmap: { [key: number]: boolean } = {};
  nums.forEach((value) => {
    hashmap[value] = true;
  });
  for (let i = 0; i <= nums.length; i++) {
    if (!hashmap[i]) return i;
  }
  return -1;
}

// works but kinda not so efficiently