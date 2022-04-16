function getX(x, nums) {
    if(!nums.length || x > nums.length) return 0
    nums = nums.sort((a,b)=> a-b)
    console.log(nums)
    return nums[x-1]
}
console.log(getX(2, [5, 10, -3, -3, 7, 9]));