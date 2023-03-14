/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let str = strs.map(el => el.split('').sort().join(''))
    
    let obj = {}
    let result = []
    
    for(let i = 0; i < strs.length; i++) {

        if(!obj[str[i]]) {
            obj[str[i]] = [strs[i]]
        } else {
            obj[str[i]].push(strs[i])
        }
    }
    
    for(let key in obj) {
        result.push(obj[key])
    }
    return result
};

        // if(obj[str[i]]) {
        //     obj[str[i]] = obj[str[i]].push(strs[i])
        // } else {
        //     obj[str[i]] = [strs[i]]
        // }