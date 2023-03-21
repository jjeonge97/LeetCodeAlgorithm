/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    // 양의 정수만 나오도록 
   let arr = nums.filter(el => el > 0).sort((a,b) => a - b)
   
   let num = 1
   
   for(let i = 0; i < arr.length; i ++) {
       if(arr[i] === num) num ++
   }
    return num;
}
// 배열 중 가장 작은 양의 정수 리턴 
// [0,2,2,1,1] 
// [1,1,2,2] 
// 