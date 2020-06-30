var search = function(nums, target) {
    for(let i = 0; i < nums.length-1; i++) {
        if(nums[i] === target) {
            return i
        }
    }
    return false
};