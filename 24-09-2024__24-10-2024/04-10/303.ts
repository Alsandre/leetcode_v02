// so design problem, sounds interesting
// seems trivial, why would we mutate array for calculating inclusive sum in range?

// sum algo:
// step 1 - create variable acc
// step 2 - create loop from left to right inclusive
// step 2 - for each iteration access element at given position in nums and add to acc
// step 3 - return acc

class NumArray_ {
  private nums;
  constructor(nums: number[]) {
    this.nums = nums;
  }

  sumRange(left: number, right: number): number {
    let acc = 0;
    for (; left <= right; left++) {
      acc += this.nums[left];
    }
    return acc;
  }
}

// fine tune

class NumArray {
  constructor(private readonly nums: number[]) {}

  sumRange(left: number, right: number): number {
    let acc = 0;
    for (; left <= right; left++) {
      acc += this.nums[left];
    }
    return acc;
  }
}
