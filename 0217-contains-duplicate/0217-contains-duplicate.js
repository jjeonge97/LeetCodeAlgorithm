/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {}
    nums.map(el => obj[el] ? ++obj[el] : obj[el] = 1)
    
    for(let key in obj) {
        if(obj[key] > 1) return true
    }
    return false
};
    