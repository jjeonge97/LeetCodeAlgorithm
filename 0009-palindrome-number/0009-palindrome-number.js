/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
//     let str = String(x)
//     let result = ''
    
//     for(let i = str.length - 1; i >= 0; i--) {
//         result += str[i]
//     }
    
//     return str === result ? true : false
    
    let str = String(x)
    let strRev = String(x).split('').reverse().join('')
    
    return str === strRev

};