/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // return haystack.indexOf(needle)
    
    const h = haystack.length;
    const n = needle.length;
    
    for(let i = 0; i <= h - n; i++) {
        let find = true;
        for(let j = 0; j < n; j++) {
            if(haystack[i + j] !== needle[j]) {
                find = false;
                break;
            }
        }
        if(find) return i
    }
    return -1
};