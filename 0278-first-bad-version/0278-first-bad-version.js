/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) { // bad 이면 true, 아니면 false
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n; 
        while(left <= right) {
            let mid = Math.floor((left + right) / 2)
            if(!isBadVersion(mid)) { // 정상이면
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return left
    };
};

