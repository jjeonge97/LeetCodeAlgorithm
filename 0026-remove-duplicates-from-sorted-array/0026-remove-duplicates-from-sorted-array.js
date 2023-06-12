/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let idx = 0; 
    
    for(let i = 1; i < nums.length; i++) {
        if(nums[idx] !== nums[i]) {
            idx++
            nums[idx] = nums[i]
        }
    }
    
    return idx + 1
};

// 중복 제거 순서는 동일
// 고유한 숫자의 수를 반환