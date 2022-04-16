function uniqueCharacters(stringIn) {
    if(!stringIn.length) return Error()
    let arr = [];
    let unique = true;
    for(let i=0; i < stringIn.length; i+=1){
    if(arr.indexOf(stringIn.charAt(i)) < 0){
        arr.push(stringIn.charAt(i))
    } else {
        unique = false
        break;
    }
    }

    return unique
}


console.log(uniqueCharacters("apple"))