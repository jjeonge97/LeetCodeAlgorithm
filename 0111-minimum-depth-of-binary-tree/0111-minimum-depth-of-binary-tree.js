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
var minDepth = function(root) {
    if(!root) return 0;
    let depth = Infinity; // 왜 0으로 하면 안되지?
    
    const nodeDepth = (root, nodeDep = 1) => {
        
        if(!root.right && !root.left) {
            depth = Math.min(depth, nodeDep);
            return;
        }
        
        if(root.left) nodeDepth(root.left, nodeDep + 1)
        
        if(root.right) nodeDepth(root.right, nodeDep + 1)
        
    }
    
     nodeDepth(root)
    
    return depth
};