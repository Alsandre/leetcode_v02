// this looks like an single pass algorithm
// whilst iterating over array we should keep track of ranges

// we should return array of ranges

// algo:
// step 1 - create empty array "ranges"
// step 2 - create temporary variable rangeStart, set it to first element
// step 3 - iterate over given array
// step 4 - if next element in array is greater by 1, continue
// step 5 - if difference with next element is greater than 1, close range, push range to ranges, clear rangeStart
// step 6 - return ranges

function summaryRanges(nums: number[]): string[] {
  let ranges: string[] = [];
  let rangeStart = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - rangeStart;
    if (diff === 1) continue;
    if (diff > 1) {
      const range =
        nums[i - 1] === rangeStart
          ? `${rangeStart}`
          : `${rangeStart}->${nums[i - 1]}`;
      ranges.push(range);
      rangeStart = nums[i];
    }
  }
  return ranges;
}

console.log(summaryRanges([0,2,3,4,6,8,9]));
