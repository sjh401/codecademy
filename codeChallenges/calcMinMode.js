function statsFinder(array) {
    // Write your code here
    let sum = 0;
    let mode;
    let obj = {};
    for(let i=0;i<array.length; i+=1){
      sum += array[i]
      if(!obj[array[i]]){
        obj[array[i]] = 1
      } else {
        obj[array[i]] +=1
      }
    }
    let max = Math.max(...Object.values(obj))
    let maxArr = [];
    let modeArr = [];
    Object.values(obj).forEach((element, index) => {
    if(element === max) {
        maxArr.push(index)
    }})
    maxArr.map(element => {
      modeArr.push(array.indexOf(parseInt(Object.keys(obj)[element])))
    })
    modeArr.sort((a,b)=>a-b)
    return [sum/array.length, array[modeArr[0]]]
  }
  
  console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]))