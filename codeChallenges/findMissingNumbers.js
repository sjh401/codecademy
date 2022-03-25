function missingNos(array, k) {
    let missing = [];
    let i = 0;
    let found = 0;
    while(k>0){
      if(array[i] - 1 - found === i){
        i +=1
      } else{
        k-=1
        missing.push(i+1+found)
        found +=1
      }
    }
      return missing
  }
    
  
  const testArray = [1, 2, 4, 5, 6, 7, 8, 10];
  console.log(missingNos(testArray, 2));