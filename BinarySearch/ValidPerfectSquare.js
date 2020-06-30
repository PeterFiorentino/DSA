var isPerfectSquare = function(num) {
    for(let i = 2; i < num; i++) {
        if(num/i === i) return true
    } 
    return false
};