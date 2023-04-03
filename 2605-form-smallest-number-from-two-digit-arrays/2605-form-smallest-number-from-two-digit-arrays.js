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
// 각 배열에서 적어도 하나의 숫자를 포함하는 가장 작은 숫자를 반환합니다.
//  nums1 = [3,5,2,6], nums2 = [3,1,7]
//  nums1 = [2,3,5,6], nums2 = [1,3,7]