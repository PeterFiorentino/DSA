function breakingRecords(scores) {
    let high = scores[0]
    let highBeaten = 0
    let low = scores[0]
    let lowBeaten = 0

    for(let i = 1; i < scores.length; i++) {
        if(scores[i] > high) {
            high = scores[i];
            highBeaten++;
        }

        if(scores[i] < low) {
            low = scores[i];
            lowBeaten++;
        }
    }
    return [highBeaten, lowBeaten]
}