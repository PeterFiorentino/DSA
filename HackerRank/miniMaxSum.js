function miniMaxSum(arr) {
    let highSum = 0;
    let lowSum = Infinity;

    if(arr[0] + arr[1] + arr[2] + arr[3] > highSum) {
        highSum = arr[0] + arr[1] + arr[2] + arr[3]
    }   
    if(arr[1] + arr[2] + arr[3] + arr[4] > highSum) {
        highSum = arr[1] + arr[2] + arr[3] + arr[4]
    }
    if(arr[0] + arr[2] + arr[3] + arr[4] > highSum) {
        highSum = arr[0] + arr[2] + arr[3] + arr[4]
    }
    if(arr[0] + arr[1] + arr[3] + arr[4] > highSum) {
        highSum = arr[0] + arr[1] + arr[3] + arr[4]
    }
    if(arr[0] + arr[1] + arr[2] + arr[4] > highSum) {
        highSum = arr[0] + arr[1] + arr[2] + arr[4]
    }
    if(arr[0] + arr[1] + arr[2] + arr[4] > highSum) {
        highSum = arr[0] + arr[1] + arr[2] + arr[4]
    }

    if(arr[0] + arr[1] + arr[2] + arr[3] < lowSum) {
        lowSum = arr[0] + arr[1] + arr[2] + arr[3]
    }   
    if(arr[1] + arr[2] + arr[3] + arr[4] < lowSum) {
        lowSum = arr[1] + arr[2] + arr[3] + arr[4]
    }
    if(arr[0] + arr[2] + arr[3] + arr[4] < lowSum) {
        lowSum = arr[0] + arr[2] + arr[3] + arr[4]
    }
    if(arr[0] + arr[1] + arr[3] + arr[4] < lowSum) {
        lowSum = arr[0] + arr[1] + arr[3] + arr[4]
    }
    if(arr[0] + arr[1] + arr[2] + arr[4] < lowSum) {
        lowSum = arr[0] + arr[1] + arr[2] + arr[4]
    }
    if(arr[0] + arr[1] + arr[2] + arr[4] < lowSum) {
        lowSum = arr[0] + arr[1] + arr[2] + arr[4]
    }

    console.log(lowSum, highSum)


}