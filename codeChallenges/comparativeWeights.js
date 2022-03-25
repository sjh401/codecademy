function scaleOfTruthN(n) {
    let counter = 0;
    while(n>1){
    if(n===2){
        n=1
    } else{
        n = Math.ceil(n/3)
    }
    counter+=1
    }
    return counter
}
console.log(scaleOfTruthN(8));
