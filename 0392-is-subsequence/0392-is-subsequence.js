/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let count = 0;
    for(let i = 0; i < t.length; i++) {
        if(t[i] === s[count]) count++
    }
    
    return count === s.length ? true : false
};