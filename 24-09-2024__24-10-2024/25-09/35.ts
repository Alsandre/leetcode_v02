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
