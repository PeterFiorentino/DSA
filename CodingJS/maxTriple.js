// Given an array of ints of odd length, look at the first, last, and middle values in the array and return the largest. 
// The array length will be a least 1.

// Examples

// maxTriple([1, 2, 3]) → 3
// maxTriple([1, 5, 3]) → 5
// maxTriple([5, 2, 3]) → 5

function maxTriple(nums){
    let first = nums[0]
    let mid = nums[(nums.length-1)/2]
    let last = nums[nums.length-1]
    
    if(first > mid && first > last) {
      return first
    } else if (mid > first && mid > last){
      return mid
    } else {
      return last
    }
  }