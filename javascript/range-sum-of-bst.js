/**
* Example Input: [10,5,15,3,7,null,18], L = 7, R = 15
* Output: 32
* 
*    10
*  5   15
* 3 7 NA 18
*/

/**
* Task: traverse a binary tree and sum  numbers based on some criteria 
* Link: https://leetcode.com/problems/range-sum-of-bst/
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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

var rangeSumBST = function(root, L, R) {
  if(root && (root.left || root.right)) {
      const currentVal = (checkRange(root, L,R)) ? root.val :0;
		return (currentVal + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R))
   } else {
		return (checkRange(root, L, R)) ? root.val : 0;
   }
};

var checkRange = function(node, lower, upper) {
    return node && node.val && node.val>=lower && node.val<=upper;
}

// Notes: don't love this solution for range checking. 