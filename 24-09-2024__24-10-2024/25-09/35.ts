// Overview:
// one of the constraints says to implement algorithm with complexity of O(log n)
// that means that we have to go over given array at most once
// this would be when there is no target and we have to check every single element
// in most cases we should finish premature whenever we find the answer
// it is possible since array is already sorted, if else it would be impossible since there is no such algo that would sort array in or under given time complexity
// without sorting array the problem would be of way bigger time complexity

// Ago:
// step1: setup loop to start iteration over array
// step2: compare each item to the target
// step3: if matched comparision, return current index
// step3: if item is greater then target return current index
// step4: if non condition satisfied, return length of an array as an result

function searchInsert(nums: number[], target: number): number {
  let res = nums.length;
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    if (item === target || item > target) {
      res = i;
      break;
    }
  }

  return res;
}

// The problem has Binary search tag, which I overlooked
// binarry search is efficient searching algorithm when working with sorted arrays
// since our array is sorted we could implement one
// binary search logic is to divide array to narow down searching areay
// at first we divide array in halp and check whether the middle element is the target, or else should we look into higher or lower values
// if target is greater then mid value then we disregard lower values (first half of the array) since target can be same as any value that is lower than middle
// if target is lower then mid value then vice versa of previous step
// we continue dividing untill we hit the target or there is nothing to divide.
// if we hit the target we return it
// if we does not hit anything, there are two cases
// case 1: target is greater then any value in array, hence we reached end of the array and value to return is pointing at final elements index + 1
// case 2: if target is to be placed somewhere in array