var peakIndexInMountainArray = function(A) {
    let counter = 0;
    for(let i = 0; i < A.length - 1; i++) {
        if(A[i + 1] > A[i]) {
            counter += 1
        }
    }
    return counter
};