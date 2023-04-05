/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    if(nums.includes(target)) {
        return nums.indexOf(target)
    }
    
    // nums.push(target) 해서 오름차순 정렬 후 target index return
    nums.push(target)
    nums.sort((a,b) => a - b)
    return nums.indexOf(target)
    
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] >= target) {
//             return i;
//         }
//     }

//     return nums.length;
    
};

// [1,3,5,6] 7 - 4
// [1,3,5,6] 0 - 0