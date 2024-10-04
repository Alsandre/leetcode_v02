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

class NumArray__ {
  constructor(private readonly nums: number[]) {}

  sumRange(left: number, right: number): number {
    let acc = 0;
    for (; left <= right; left++) {
      acc += this.nums[left];
    }
    return acc;
  }
}

// optimized version
// using prefixSum

class NumArray {
  private inclusivePrefixSum: number[] = [];
  constructor(private readonly nums: number[]) {
    let acc = nums[0];
    this.inclusivePrefixSum[0] = acc;
    for (let i = 1; i < nums.length; i++) {
      acc += nums[i];
      this.inclusivePrefixSum.push(acc);
    }
  }

  sumRange(left: number, right: number): number {
    const leftSum = left === 0 ? 0 : this.inclusivePrefixSum[left - 1];
    return this.inclusivePrefixSum[right] - leftSum;
  }
}

const obj = new NumArray([1, 2, 3, 4, 5]);
const sum = obj.sumRange(1, 2);
console.log(sum);
