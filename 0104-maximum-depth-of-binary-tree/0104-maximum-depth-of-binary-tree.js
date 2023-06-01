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
 * @return {number}
 */
var maxDepth = function(root) {
    
    let depth = 0;
    
    nodeDepth(root);
    
    function nodeDepth(root, nodeDep = 1) {
        if(!root) return 0;
        
        if(depth < nodeDep) depth = nodeDep;
        
        nodeDepth(root.left, nodeDep + 1)
        nodeDepth(root.right, nodeDep + 1)
        
    }
    return depth
};
