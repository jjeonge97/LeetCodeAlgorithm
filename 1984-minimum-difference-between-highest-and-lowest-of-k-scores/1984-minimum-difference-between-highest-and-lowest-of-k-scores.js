/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    
    let min = Infinity

    if(k === 1) return 0;
    
    nums.sort((a,b) => a - b)
    for(let i = 0; i <= nums.length - k; i++) {
        // let slice = nums.slice(i, i + k)
        // min.push(Math.min(...slice))
        min = Math.min(min, nums[i + k -1] - nums[i])
    }
    return min
};
// [ 1, 4, 7, 9 ] k = 2
// i = 0 ; slice = nums.slice(0,2)