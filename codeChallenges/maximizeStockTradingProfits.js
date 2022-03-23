function maxProfitDays(stockPrices) {
    let max = [stockPrices[0], stockPrices[1]];
    for(let i=0; i<stockPrices.length-1; i+=1){
        for(let j=i+1; j<stockPrices.length; j+=1){
        if(stockPrices[j] - stockPrices[i] > max[1] -max[0]){
            max[0] = stockPrices[i]
            max[1] = stockPrices[j]
        }
        }
    }
    return [stockPrices.indexOf(max[0]), stockPrices.indexOf(max[1])]
}
maxProfitDays([17, 11, 60, 25, 150, 75, 31, 120])