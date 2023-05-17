/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map(el => Math.pow(el,2)).sort((a,b) => a - b)
    
};
// 각 숫자의 제곱으로 오름차순 정렬된 배열 리턴