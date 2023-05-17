/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let idx = end;
    let result = []
    
    while(start <= end) {
        if(Math.abs(nums[start]) < Math.abs(nums[end])) {
            result[idx--] = nums[end] * nums[end]
            end--
        } else {
            result[idx--] = nums[start] * nums[start]
            start++
        }
    } 
    return result
};
