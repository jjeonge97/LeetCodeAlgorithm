/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    
    // if (n === 0) return 0;
    // if (n === 1) return 1;
    // if (n === 2) return 1;
    
    if (mem[n] !== undefined) return mem[n];
    
    return mem[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

const mem = {
    0: 0,
    1: 1,
    2: 1
};

