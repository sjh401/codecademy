function fizzbuzz(n) {
    // Write your code here
    let fizzBuzzArr = [];
    let i = 1;
    while(i<n+1){
    if((i%3===0) && (i%5===0)){
        fizzBuzzArr.push('FizzBuzz')
    } else if(i%3===0){
        fizzBuzzArr.push('Fizz')
    } else if(i%5===0){
        fizzBuzzArr.push('Buzz')
    } else {
        fizzBuzzArr.push(i)
    }
    i+=1
    }
    return fizzBuzzArr
}

console.log(fizzbuzz(16));