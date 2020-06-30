var countNegatives = function(grid) {
    let counter = 0;
    for(let i of grid) {
        for (let x of i) {
            if (x < 0) counter += 1
        }
    }
    return counter
};