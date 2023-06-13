/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr = [[1]];
    
    for(let i = 1; i < numRows; i++) {
        const newArr = [1];
        
        for(let j = 1; j < i; j++) {
            newArr.push(arr[i-1][j] + arr[i -1][j - 1] );
        }
        
        newArr.push(1);
        arr.push(newArr);
        
    }
    return arr;
};