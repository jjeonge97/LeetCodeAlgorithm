/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let maxSum = nums[0]
    let sum = nums[0]
    
    for(let i = 1; i < nums.length; i++) {
        sum = Math.max(nums[i], nums[i] + sum) // -1 , -3 = -1
        maxSum = Math.max(sum, maxSum)
    }
    
    return maxSum
    
};
// [-2,-1,-4,4,-1,2,1,-5,4]
