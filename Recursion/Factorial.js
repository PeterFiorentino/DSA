function factorial(n) {
    let product = n
    const multiply = (n) => {
        if(n === 1) return
        product = product * (n - 1)
        multiply(n-1)
    }
    multiply(n)
    return product
}

console.log(factorial(3))