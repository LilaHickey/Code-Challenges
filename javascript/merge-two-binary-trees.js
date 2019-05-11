/**
 * Problem: https://leetcode.com/problems/merge-two-binary-trees/
 * Tags: level-order, tree-traversal, recursion
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    // console.log('t2: ', t1);
    let t1Array, t2Array, t3Array;
    if(t1 && t1.val != undefined && t1.val != null){
        t1Array = treeTraversal(t1, [t1.val]);
    } else {
        t1Array = [];
    }
    if(t2 && t2.val != undefined && t2.val != null){
        t2Array = treeTraversal(t2, [t2.val]);
    } else {
        t2Array = [];
    }
    t3Array = sumArrays(t1Array, t2Array);
    console.log('t1Array: ', t1Array);
    console.log('t2Array: ', t2Array);
    console.log('t3Array: ', t3Array);
    let summedTree = arrayTraversal(undefined, t3Array);
    console.log('summedTree: ', summedTree);
};



var treeTraversal = function(root, treeArray){
    treeArray = treeArray || [];
    if(root && root.val){
        if ( (root.left && root.left.val) || (root.right && root.right.val)){
            treeArray.push(root.left ? root.left.val : null);
            treeArray.push(root.right ? root.right.val : null);
        }
        return treeTraversal(root.left, treeArray) && treeTraversal(root.right, treeArray);
    } else {
        return treeArray;
    }
}

var arrayTraversal = function(currentNode, a) {
    currentNode = currentNode || new TreeNode;
    if (a.length>0) {
        var val = currentNode.val || a.shift();
        var left = a.length > 0 ? a.shift() : null; 
        var right = a.length > 0 ? a.shift() : null;
        currentNode.val = val,
        currentNode.left = new TreeNode;
        currentNode.left.val = left;
        currentNode.right = new TreeNode;
        currentNode.right.val = right;
        return arrayTraversal(currentNode.left, a) && arrayTraversal(currentNode.right, a);
    } else {
        return currentNode;
    }
}

var sumArrays = function(a1, a2) {
    let a3 = [];
    for(var i = 0; i< Math.max(a1.length, a2.length); i++){
        var t1Val = a1[i] ? a1[i] : null;
        var t2Val = a2[i]? a2[i] : null ;
        var sum = t1Val + t2Val
        a3.push(sum || null);        
    }
    return a3;
}

