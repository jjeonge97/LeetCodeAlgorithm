/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    let sum = nums.reduce((acc,cur) => acc + cur) // 총 합 : 28
    let leftSum = 0;
    let rightSum = 0; 
    
    for(let i = 0; i < nums.length; i++) {
        rightSum = sum - nums[i] - leftSum;
        
        if(rightSum === leftSum) return i 
        
        leftSum += nums[i]
    }

        // if(i === nums.length - 1) {
        //     rightSum = 0;
        //     if(leftSum === rightSum) return i;
        // }
    
    return -1;

};

//[1,7,3,6,5,6]
