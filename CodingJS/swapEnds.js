// Given an array of ints, swap the first and last elements in the array. 
// Return the modified array. The array length will be at least 1.

// Examples

// swapEnds([1, 2, 3, 4]) → 4,2,3,1
// swapEnds([1, 2, 3]) → 3,2,1
// swapEnds([8, 6, 7, 9, 5]) → 5,6,7,9,8

function swapEnds(nums){
    let newArr = [];
    for(let i = 0; i <= nums.length-1; i++){
      if(i === 0){
        newArr.push(nums[nums.length-1])
      } else if(i === nums.length-1){
        newArr.push(nums[0])
      } else {
        newArr.push(nums[i])
      }
    }
    return newArr
  }