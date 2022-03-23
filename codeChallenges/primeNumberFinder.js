function primeFinder(n) {
// Write your code here
    let primeArr = []
    for(let i=2; i<n+1; i+=1){
        if(i===2){
        primeArr.push(i)
        } else {
        for(let j=0; j<primeArr.length; j+=1){
            if(i % primeArr[j] === 0){
            break;
            } else if(j===primeArr.length -1){
            primeArr.push(i)
            break;
            }
        }
        }
    }
    return primeArr
}

console.log(primeFinder(11))