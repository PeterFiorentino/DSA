var countNegatives = function(grid) {
    return grid.reduce((sum, current) => sum + theSearch(current, 0, current.length - 1), 0)
};

function theSearch(arr, left, right) {
    let mid = Math.floor((left+right)/2);
    if(left > right) return 0;
    if(arr[left] < 0 && arr[right] < 0) return right - left + 1;

    return theSearch(
        arr,
        arr[mid - 1] < 0 ? left - 1 : arr[mid] < 0 ? mid : mid + 1,
        right
    ) 
}
