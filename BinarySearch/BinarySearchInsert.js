var searchInsert = function(nums, target) {

    let low = 0
    let high = nums.length - 1
    
    while(low <= high) {
        let middle = Math.floor((low + high)/2)
        if(target === nums[middle]) {
            return middle
        } else if (nums[middle] < target) {
            low += 1
        } else {
            j -= 1
        }
    }
    
    return low
};