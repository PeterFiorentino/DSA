var isPerfectSquare = function(num) {
    let root = Math.floor(Math.sqrt(num))
    
    if(root * root === num) return true
    
    return false
};