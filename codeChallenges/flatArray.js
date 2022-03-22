function flattenArray(array) {
    // Write your code here
    //handles nested nested but doesn't handle [[3],[4,[5]]]
    let depth = 0;
    let depthArr = [];
    const recus = (arr) => {
        let temp = [];
        for(let i=0; i<arr.length; i+=1){
            if(Array.isArray(arr[i]) === true){
                temp = arr[i];
                break;
            } else {
                continue;
            }
        }
        if(temp.length < 1){
            depthArr.push(depth)
            depth = 0;
            return arr
        } else {
            depth+=1
            return recus(temp)
        }
    }
    recus(array)
    console.log(Math.max(...depthArr))
    let newArr = array.flat(Math.max(...depthArr))
    return newArr
}

console.log(flattenArray([1, 2, [3, [4, 5]], 6, [7, 8], 9]))

// better but doesn't account for nested nested
// let newArr = [].concat(...array);
// let newArr = [].concat.apply([],array)
// first
// let newArr = [];
// for(let i=0; i<array.length; i+=1){
//     if(Array.isArray(array[i]) === true){
//     for(let j=0;j<array[i].length; j+=1){
//         newArr.push(array[i][j])
//     }
//     } else{
//     newArr.push(array[i])
//     }
// }