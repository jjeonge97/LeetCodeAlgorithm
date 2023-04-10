/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {

//     let result = new Array(n + 1).fill(0) // 0으로 채워진 n + 1 길이의 배열 
    
//     for(let i = 0; i <= result.length; i++) {
//         let bin = i.toString(2)
//         result[i] = bin.replaceAll('0','').length
//     }
    
//     return result;
    
    let result = [];
    
    for(let i = 0; i <= n; i++) {
        let bin = i.toString(2)
        result.push(bin.replaceAll('0','').length)
    }
    
    return result;
};
