/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let start = 0; 
    let end = start + 1;
    let temp;

    
    while(end < nums.length) {
        if(nums[start] !== 0) {
            start++
            end++
        } else {
            if(nums[end] !== 0) {
                temp = nums[start]
                nums[start] = nums[end]
                nums[end] = temp
                start++
            }
            end++
        }
    }
    return nums
};
