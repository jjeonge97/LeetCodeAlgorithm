/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
//     let min = Math.min(...prices);
//     let minidx = prices.indexOf(min);
    
//     if(minidx === prices.length - 1) {
//         return 0;
//     } else {
//         let arr = prices.slice(minidx + 1)
//         let max = Math.max(...arr)
//        return max - min
//     }
    
    // 양쪽으로 비교 ?
    let min = prices[0];
    let max = 0;
    
    for(let i = 1; i < prices.length; i++) {
        
    }
    
    for(let i = 1; i < prices.length; i++){
        if(prices[i] - min > max){
            max = prices[i] - min;
        }
        
        if(prices[i] < min) min = prices[i]
    }
    
    return max;

};

// [2,4,1]
// output 0;
// expected 2