function sumOfPrimeFactors(n) {
    let primeArr = [];
    let primeFactors = [];
    let prime = true;
    for(let i=2; i<(Math.ceil(n/2)); i+=1){
    if(i===2){
        primeArr.push(i);
    } else {
        for(let j=0; j<primeArr.length;j+=1){
        if(i%primeArr[j] ===0){
            prime = false;
            break;
        } else {
            continue;
        }
        }
        if(prime === true){
        primeArr.push(i);
        if(n%i===0){
            primeFactors.push(i)
        }
        } 
    }
    prime = true;
    }
    console.log(primeFactors.reduce((p,c)=> p+c))
    return primeFactors.reduce((p,c)=> p+c)
}

sumOfPrimeFactors(91)