/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = []
    
    let right = 1
    let left = 1
    
    for(let i = nums.length -1; i >=0; i--) {
        answer[i] = right;
        right *= nums[i]
    }
    
    for(let i = 0; i < nums.length; i ++) {
        answer[i] *= left
        left *= nums[i]
    }  

    return answer
};

