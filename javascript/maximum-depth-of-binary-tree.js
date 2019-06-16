

/**
* Task: Find Maximum Depth of a Binary tree
* Link: https://leetcode.com/problems/maximum-depth-of-binary-tree/submissions/
*
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root, currentDepth) {
    let depth = currentDepth || 0;
    if (root !== null ) {
        depth++;
        if (! (root.left || root.right)) {
            return depth;
        } else {
            return depthSorter(maxDepth(root.left, depth), maxDepth(root.right, depth));
        }
    } else {
        if (depth === 0) {
            return depth;
        } else {
            return -1
        }    }
};

var depthSorter = function(a,b){
    if ( (a===b) || (a > b)){
        return a;
    } else {
        return b;
    }
}