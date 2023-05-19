/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ')
    
    for(let i = 0; i < arr.length; i++) {
        let word = arr[i].split('')
        let left = 0; 
        let right = word.length-1;
        let temp;
        while (left < right) {
            temp = word[left]
            word[left] = word[right]
            word[right] = temp
            left++
            right--
        }
        arr[i] = word.join('')
    }
    
    return arr.join(' ')
};