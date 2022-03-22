function flattenArray(array) {
    // Write your code here
    let newArr = [];
    for(let i=0; i<array.length; i+=1){
        if(Array.isArray(array[i]) === true){
        for(let j=0;j<array[i].length; j+=1){
            newArr.push(array[i][j])
        }
        } else{
        newArr.push(array[i])
        }
    }
    return newArr
}

console.log(flattenArray([1, 2, [3, 4, 5], 6, [7, 8], 9]))