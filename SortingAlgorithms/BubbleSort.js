function countSwaps(a) {
    let swapCount = 0;

    for(let i = 0; i < a.length - 1; i++) {
        for(let x = 0; x < a.length - 1; x ++) {
            if(a[x] > a[x + 1]) {
                const temp = a[x]
                a[x] = a[x + 1]
                a[x+1] = temp
                swapCount += 1
            }
        }
    }

    console.log(`Array is sorted in ${swapCount} swaps.`)
    console.log(`First Element: ${a[0]}`) 
    console.log(`Last Element: ${a[a.length - 1]}`)
}