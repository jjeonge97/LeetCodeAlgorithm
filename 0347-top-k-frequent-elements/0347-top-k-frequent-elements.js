/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj = {}
    
    for(let i = 0; i < nums.length; i++) {
       obj[nums[i]] = obj[nums[i]] + 1 || 1
    }

    let objKeys = Object.keys(obj).sort((a,b)=>obj[b]-obj[a]);
    
    let results =[]
     for(let i = 0; i < k; i++){
         results.push(objKeys[i])
     }
    return results
    
}
