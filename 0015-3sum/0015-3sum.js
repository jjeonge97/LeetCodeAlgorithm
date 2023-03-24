/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = []
    
    nums.sort((a,b) => a - b)
    
    for(let i = 0; i < nums.length - 2; i++) {
        
        if(i > 0 && nums[i] === nums[i-1]) continue; 
        
        let second = i + 1
        let third = nums.length - 1 
        
        while(second < third) {
            
            if(nums[i] + nums[second] + nums[third] === 0){
                
                result.push([nums[i], nums[second], nums[third]])
                
                while(nums[second] === nums[second + 1]) second++
                while(nums[third] === nums[third - 1]) third--
                
                second++
                third--
            } else if(nums[i] + nums[second] + nums[third] > 0) {
                // 0 보다 크면 
                third--
            } else {
                // 0 보다 작으면
                second++
            }
        }
        
    }
    return result
};

// index 같으면 안됨
// nums = [-1,0,1,2,-1,-4]
// sort = [-4,-1,-1,0,1,2] 
// i = 1 -> nums[1] -1
// second = nums[2] -1; second++ = 3
// third = nums[5] 2; third-- = 4

//nums[1] -1
// second = nums[3] 0
// third  = nums[4] 1
