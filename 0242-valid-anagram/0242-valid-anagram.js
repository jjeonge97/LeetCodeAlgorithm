/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
//     let objS = {}
//     let objT = {}
    
//     for(let el of s) {
//         objS[el] = (objS[el] || 0) + 1
//     }
    
//     for(let el of t) {
//         objT[el] = (objT[el] || 0) + 1
//     }
    
//     for(let key in objS) {
//         if(objS[key] !== objT[key]) return false
//     }
    
//     return true
    return s.split('').sort().join('') === t.split('').sort().join('')
};
