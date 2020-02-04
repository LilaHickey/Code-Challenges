/**
 * I screwed up a few things on this:
 * 
 * 1) didn't read the function signature and so I was
 * performing the tree serialization myself, which as 
 * leetcode interprets it produces a particularly 
 * weird/hard to debug error, very similar to having missed
 * a necessary return in a recursive function.  So I drove
 * myself mad on that for a bit.  Always read the manual.
 * 
 * Once I had that piece, the rest was pretty straightforward,
 * as this is mostly just about ability to implement recursion.
 * 
 * Because we (I think?) are guaranteed only one match, there's not 
 * a lot of fanciness required.
 */

/*
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    // in case of unbalanced tree,
    // we could have a null root.
    if(!root || !root.val) {
       return null;
    }
    // base case.
    if(root.val && root.val === val) {
        return root;
    }
    // leaf node, make sure to explicitly
    // return
    if(!root.left && !root.right){
        return null
    } else {
        return searchBST(root.left, val) || searchBST(root.right, val);
    }
}