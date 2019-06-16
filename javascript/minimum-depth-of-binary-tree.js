/**
* Example Input:  [3,9,20,null,null,15,7],
* Output: 2
* 
*     3
*   9  20
*     15 7
*
* Example Input: [1,null,2]
* Output: 2
*
*     1
*       2
*
* Example Input: [0]
* Output: 1
*
*     0
*
* Example Input: []
* Output: 0
*
*     
*/

/**
* Task: Find Minimum Depth of a Binary tree
* Link: https://leetcode.com/problems/minimum-depth-of-binary-tree/
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

/** 
 * Note: the tricky part of this problem is distinguishing a path that doesn't qualify as a full-depth traversal,
 * due to the fact that these trees can be unbalanced. For example, in the following scenario, the appropriate 
 * min depth to report is '2,' rather than '1', because the left-following path is not a complete path (because)
 * the '1' node is not a leaf (it has children)
 * 
 * [1,2]
 * 
 *  1
 * 2
 * 
 *
 * 
 * Paths that terminate but do not qualify as a full traversal need to be somehow discarded from consideration for
 * minimum depth; however we *also* need to properly detect and report the zero-depth of an empty tree:
 * 
 *  []
 * 
 * The distinguishing factor between these two scenarios is what the 'localDepth' variable will reflect, ergo I am using
 * it to determine whether to report a zero-depth or an invalid depth.
 * 
 * 
*/
var minDepth = function(root, currentDepth) {
    let localDepth = currentDepth || 0;
    if ( root !== null) {
        localDepth++;
        if (! (root.left || root.right)) {
            return localDepth;
        } else {
            return depthSorter(minDepth(root.left, localDepth), minDepth(root.right, localDepth));
        }
    } else {
        if (localDepth = 0) {
            return localDepth;
        } else {
            // this is a hacky way to make sure this depth is never returned
            // (which we're doing because it's an invalid path, i.e. not a leaf) 
            // it's dangerous because we don't actually know the depth of the tree
            // so it's possible that this could be a legitimate depth range.
            // a more robust depthSorter function would allow us to return a safer
            // value here, like null.
            return 100000000; 
        }
    }
};

var depthSorter = function(a,b) {
    if  ( a===b || a > b) {
        return b;
    } else {
        return a;
    }
}