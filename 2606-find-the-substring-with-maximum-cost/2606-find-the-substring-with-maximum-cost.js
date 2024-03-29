/**
 * @param {string} s
 * @param {string} chars
 * @param {number[]} vals
 * @return {number}
 */
var maximumCostSubstring = function(s, chars, vals) {
    let alp = 'abcdefghijklmnopqrstuvwxyz'
    let store = [];
    
    for(let i = 0; i < s.length; i ++) {
        if(chars.includes(s[i])) {
            // chars 에서 몇번째 요소와 같은지 확인
            let a = chars.indexOf(s[i])
            // store 에 vals 배열 값 추가
            store.push(vals[a])  
        } else {
            // 알파벳 인덱스값 추가 
            store.push(alp.indexOf(s[i]) + 1)
        }
    }
    
//     let result = -Infinity;
//     let max = 0;

//     for(let i = 0; i < store.length; i++){
//     	max = Math.max(store[i], max + store[i]);
//         result = Math.max(max, result);
//     }
    
//      return result > 0 ? result : 0
    
    for(let i = 1; i < store.length; i++) {
        store[i] = Math.max(store[i], store[i] + store[i - 1])
    }
    
    return Math.max(...store) > 0 ? Math.max(...store) : 0



};