function capturingRainwater(heights) {
    // Write your code here
    let left = heights.shift();
    let heightsLgth = heights.length-1
    let filtered = new Array(...heights.slice(0,heightsLgth)).filter(num => num > heights[heightsLgth])
    let right = !filtered.length ? heights[heightsLgth] : Math.max(...filtered);
    let water = 0;
    let i = 0;
    while(i<heights.length){
    if(heights[i]===right){
        filtered = filtered.slice(filtered.indexOf(Math.max(...filtered))+1)
        right = !filtered.length ? heights[heightsLgth]:Math.max(...filtered);
    }
    if(heights[i]>left){
        left = heights[i]
    }
    if(heights[i] < (left && right)){
        water += Math.min(left,right) - heights[i]
    }
    i+=1
    } 
    return water
}

const testArray = [0,1,0,2,4,0,1,4,2,1,2,0]
console.log(capturingRainwater(testArray));