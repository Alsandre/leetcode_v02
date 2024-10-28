function binarySearchRecursive(
  nums: number[],
  target: number,
  left: number = 0,
  right: number = nums.length - 1
): number {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);

  if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] > target) {
    return binarySearchRecursive(nums, target, left, mid - 1);
  } else {
    return binarySearchRecursive(nums, target, mid + 1, right);
  }
}
