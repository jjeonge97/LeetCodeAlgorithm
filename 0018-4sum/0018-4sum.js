/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b) => a - b);
    
    const result = [];
    
    for(let i = 0; i < nums.length - 3; i++) {
        
        for(let j = i + 1; j < nums.length - 2; j++) {
            
            let left = j + 1; 
            let right = nums.length - 1;
            
            while(left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                
                if(sum === target) {
                    result.push([nums[i],nums[j],nums[left],nums[right]]);
                    
                    while(nums[left] === nums[left + 1]) left++;
                    while(nums[right] === nums[right - 1]) right--;
                    
                    left++;
                    right--;
                    
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
            
            while(nums[j] === nums[j + 1]) j++;
        }
        while(nums[i] === nums[i + 1]) i++;
    }
    return result;
};


// [2,2,2,2,2] length 5 (i < 2) (j < 3) 
//i = 0 j = 1
//nums[i=0] = 2; nums[j=1] = 2; nums[left=2] = 2; nums[right=3] = 2 => [2,2,2,2]
// left = 3; right = 4;
// i = 0 j = 2
//nums[i=0] = 2; nums[j=2] = 2; nums[left=3] = 2; nums[right=4] = 2