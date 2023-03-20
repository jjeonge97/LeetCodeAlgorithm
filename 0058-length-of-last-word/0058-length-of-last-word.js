/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let arr = s.split(' ').filter(el => el !== '')
    return arr[arr.length -1].length
};

// 마지막 인덱스