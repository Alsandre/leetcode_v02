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
