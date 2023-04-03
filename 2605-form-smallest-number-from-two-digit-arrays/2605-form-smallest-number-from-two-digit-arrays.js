/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);
    
    let min = 0;
    let result = '';
    
//     let min = [];
    
//     for(let el of nums1) {
//         if(nums2.includes(el)) min.push(el)
//     }
    
    for(let i = 0; i < nums1.length; i++) {
       for(let j = 0; j < nums2.length; j++) {
            if(nums1[i] === nums2[j]) {
                min = nums1[i]
                return min;
            } 
       }
    }
    
    let num1 = Math.min(...nums1)
    let num2 = Math.min(...nums2)
    
    if(num1 > num2) result = String(num2) + String(num1)
    else result = String(num1) + String(num2)
    
    return Number(result)
    
};
