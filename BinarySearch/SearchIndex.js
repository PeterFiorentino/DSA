var searchInsert = function(nums, target) {
    
    let high = nums.length -1
    let low = 0
    
    while(low <= high) {
        let middle = Math.floor((high+low)/2)
        
        if(nums[middle] === target) {
            return middle
        } else if (target > nums[middle]) {
            low = middle + 1
        } else if (target < nums[middle]) {
            high = middle - 1
        }
    }
    
    return -1
};

let sampleArr = [-1,0,3,5,9,12]

console.log(searchInsert(sampleArr, 9))