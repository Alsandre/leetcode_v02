// looks trivial at first glance, to just solve
// triviality comes from built in index of method
// but knowing the fact that under the hood index of is quite inefficient
// this either wont work, or would be inefficient
// managable and more optimal solution seems to be hashmapping the array

// trivial algo:
// step 1 - setup loop from 0 to given length
// step 2 - return iteration number for which indexOf returns -1
