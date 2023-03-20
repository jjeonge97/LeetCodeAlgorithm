/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = [];
    for(let i = 0; i < nums.length; i++) {
        ans.push(nums[i])
    }
    return nums.concat(...ans)
};

// 길이 n의 배열 nums 
// 2n 길이의 배열 ans 
// ans 는 두 개의 nums를 합친 것 