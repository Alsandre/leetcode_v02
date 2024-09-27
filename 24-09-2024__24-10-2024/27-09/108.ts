// So Recursion... 
// I dont fully understand how does this work
// I'll try to analyze it while writting:

// As I have looked for the answers about what is the height balanced binary tree
// I came to conclusion that tree with same or at least one node difference on each side is heigh balanced tree
// this should be true for each node

// so if we have 5 values root will be middle value and on each side we have to have height of 2

// I am not totally sure what does sorted nature of array have to do here, because without checking value we can distribute 
// So it is sorted because we are talking about BST not general binary tree,
// proprty of Binary Search Tree is that in-order traversal always yield sorted array

// My mind was empty when analyzing this problem, actually I've skipped it yestarday
// hoping to gain insights about BTs as I progress through problems
// But today I told to myself that this could be insight itself

// So I had to lookup some definitions and actully I have peacked on some code using recursion on GeeksForGeeks website
// now that I am looking back at this problem, right away.
// the fear was for nothing,
// I misunderstood, and was confused because of sorted array and was thinking that there was something more to it then I've percieved
// on the other hand I was intimidated by looking at class constructor, I could not understand it was already defined? or I should have defined it myself
// all doubts and intimidations were easily dispelled by interacting with problem and researching.

// here is general algorithm:

// step 1 - if given array is empty, return null
// step 2 -  instantiate new TreeNode with value of array mid element and recursively calculate left and right child
// step 3 -  return BST instance


