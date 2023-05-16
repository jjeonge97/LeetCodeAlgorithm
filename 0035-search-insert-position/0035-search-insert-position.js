/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0; 
    let right = nums.length - 1;
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] > target) {
            right = mid - 1;
        } else if(nums[mid] < target) {
            left = mid + 1
        }
    }
    
    return left
    
};
// target 을 찾으면 index 리턴 
// 못찾으면 target 이 들어갈 index 리턴 