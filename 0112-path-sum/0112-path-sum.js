/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    
//     if(!root.right && !root.left) return root.val === targetSum
    let output = false
//     return hasPathSum(root.right, targetSum - root.val) || hasPathSum(root.left, targetSum - root.val)
    const getSum = (root, sum = 0) => {
        if(!root.right && !root.left) {
            if(targetSum === sum + root.val) return output = true
        }
        
        if(root.left) getSum(root.left, sum + root.val)
        if(root.right) getSum(root.right, sum + root.val)
    }
    
    getSum(root)
    return output
};