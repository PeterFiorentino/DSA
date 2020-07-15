var peakIndexInMountainArray = function(A) {
    let low = 0 
    let high = A.length - 1;
    while (low < high) {
        let mid = low + (high - low) / 2;
        if (A[mid] < A[mid + 1])
            low = mid + 1;
        else
            high = mid;
    }
    return low;
};