var tribonacci = function(n) {
    if (n < 3) return 1    
    return tribonacci(n-1) + tribonacci(n-2)
};