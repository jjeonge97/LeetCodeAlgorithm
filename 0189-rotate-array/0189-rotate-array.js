/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {    
    const len = nums.length;
    k = k % len;
    let arr = nums.splice(len - k)
    
    return nums.unshift(...arr)
//     let result = [];
    
//     for (let i = len - k; i < len; i++) {
//         result.push(nums[i]);
//     }
    
//     for (let i = 0; i < len - k; i++) {
//         result.push(nums[i]);
//     }
    
//     return result
};