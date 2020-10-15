function plusMinus(arr) {
    let above = 0;
    let zero = 0;
    let below = 0;

    for(let i of arr) {
        if(i === 0) {
            zero += 1;
        } else if (i < 0) {
            below += 1;
        } else {
            above += 1;
        }
    }

    let aboveRat = (above/(arr.length)).toFixed(6)
    let belowRat = (below/(arr.length)).toFixed(6)
    let zeroRat = (zero/(arr.length)).toFixed(6)

    console.log(aboveRat)
    console.log(belowRat)
    console.log(zeroRat)
}