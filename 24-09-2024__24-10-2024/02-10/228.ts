// this looks like an single pass algorithm
// whilst iterating over array we should keep track of ranges

// we should return array of ranges

// algo: 
// step 1 - create empty array "ranges"
// step 2 - iterate over given array
// step 3 - create temporary variable rangeStart
// step 4 - if next element in array is greater by 1, continue
// step 5 - if difference with next element is greater than 1, close range, push range to ranges, clear rangeStart
// step 6 - return ranges