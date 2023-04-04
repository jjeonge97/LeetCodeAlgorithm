/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    let prevSum = 0; 
    let curSum = 0; 
    
    for(let i = 0; i < nums.length; i++) {
        if(i % 2 === 0) {
            // 짝수
            prevSum = Math.max(prevSum + nums[i], curSum)
        } else {
            // 홀수
            curSum = Math.max(prevSum, nums[i] + curSum)
        }
    }
    
    return Math.max(prevSum, curSum)
};
// [2,1,1,2] => 4
