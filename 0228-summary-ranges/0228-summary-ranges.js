/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const numbers = nums.map(el => Number(el))
    const result = []
    
    let first = 0; 
    let last = 0;
    
    while(last < numbers.length) {
        if(numbers[last] + 1 === numbers[last + 1]) {
            last++
        } else {
            
            if(first === last) result.push(`${numbers[first]}`)
            else result.push(numbers[first] + '->' + numbers[last])   
            first = ++last 
        }
    }
    
    return result;
};