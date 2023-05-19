/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0; 
    let right = s.length - 1; 
    let temp;
    
    for(let i = 0; i < (s.length / 2); i++) {
       temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
    
    return s
    
};