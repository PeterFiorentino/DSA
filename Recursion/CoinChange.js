function coinChange(coins, amount) {
    if(amount === 0) {
        return 0
    }
    if(!coins.length) {
        return -1
    }
    if(amount < coins.length) {
        coinsChange(coins.slice(0, -1), amount)
    }

    const coin = coins[coins.length - 1]
    let coinsUsed = Math.floor(amount/coin)
    let remainder = amount % coin
    const oneSmallerCoin = coins.slice(0, -1)
    let result = coinChange(coins.slice(0,-1), remainder)
    
    while(coinsUsed > 0) {
        coinsUsed--
        remainder += coin
        if(remainder > amount) {
            return -1
        }
        result = coinChange(oneSmallerCoin, remainder)
    } 
    
    if(result === -1) {
        return -1
    }

    return coinsUsed + result
}