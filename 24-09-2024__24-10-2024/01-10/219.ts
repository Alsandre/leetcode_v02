// So we are bound to size of k
// that means for each element we can compare it to k-th element from both sides
// starting from current element
// outside this range there is no point looking for duplicates
// since index difference being lower or equal to k would not be met.

// we dont generally need to compare each element, but since we dont have other means to find values
// the are not sorted and they dont have other traits
// we will be comparing each element to other elements in k radius

// lets consider, is it necessary to compare elements in both direction?
// I think not, since we are comparing k with absolute of difference
// since our indicies cant be negative
// finding absolute of a-b is same as b-a

// algo:

// step 1 - setup loop over given array
// step 2 - setup nested loop with k radius
// step 3 - for each element in array, compare to elements in radius
// step 4 - if no match move to next
// step 5 - if match return true
// step 6 - return false

function _containsNearbyDuplicate(nums: number[], k: number): boolean {
  for (let j = 0; j < nums.length; j++) {
    for (let i = j + 1; i <= j + k; i++) {
      if (nums[j] === nums[i]) return true;
    }
  }
  return false;
}

// works in general but inefficient

// when we find valid duplicate we do return, thus terminating loop
// but solution is not optimal

// idea 1 - if I go through array once and for each unique element create hash map
// with values representing occurence indicies
// then iterate over hash map and find differences between indicies
// that would be O(n)
// that should be optimal

// algo:
// step 1 - create hashmap
// step 2 - iterate over array and populate hashmap
// step 3 - iterate over hash map
// step 4 - check values  that have more than two entries
// step 5 - compare difference of each pair
// step 6 - if valid pair found, return

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let hashMap: { [key: number]: number[] } = {};
  for (let j = 0; j < nums.length; j++) {
    if (hashMap[nums[j]]) hashMap[nums[j]].push(j);
    else hashMap[nums[j]] = [j];
  }
  for (let key in hashMap) {
    if (hashMap[key].length > 1) {
      for (let i = 0; i < hashMap[key].length; i++) {
        if (hashMap[key][i + 1] - hashMap[key][i] <= k) return true;
      }
    }
  }
  return false;
}
