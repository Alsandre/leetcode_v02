// It could be that for each there there is formula calculating each member based on position
// I dont know about any formula, but there always is a brute solution
// for solving this problem we need to use some space remembering previous row
// to determine next row we need to make pairs from current row and them together
// each value goes in two pair, pairing with one next to it and one previous to it
// resulting in bigger array by one
// feels like adding 0 on both side of current row could help
// at least not to add but imagine that there it is

// Its hard for me to imagine the algorithm so I'll try to start implementing
// maybe it will come by