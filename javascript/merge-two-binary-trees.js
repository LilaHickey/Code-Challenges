/**
 * Problem: https://leetcode.com/problems/merge-two-binary-trees/
 * Tags: level-order, tree-traversal, recursion
 *
 * 
 * This is kind of an interesting problem, which I screwed up originally in a couple ways:
 * 
 * 1) Just by not properly reading the instructions; I was operating under the assumption that I needed
 * to deserialize the resulting merged tree, but looking at the expected output, an array is fine.
 * 
 * 2) Bad tree traversal technique (or rather not the one they're requesting).  I was using a pre-order technique 
 * (most easily identified by the fact that first array element will be root node), but again, reviewing the expected
 * output would have made me realize they are expecting a level order traversal.  I'm sure there are techniques for 
 * translating pre-order to level order traversal but it seems like a good time to just learn to do this.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 
 * calculate maximum height of a tree.
 * 
 * 
 */

var calculateMaximumTreeHeight = function(tree, currentHeight, currentMaxHeight) {
    const currentVal = (tree && tree.val) ? tree.val : null;
    if (currentVal) {
        currentHeight++;
    }
    if(currentVal === null || (tree.left === null && tree.right === null)) {
        return currentMaxHeight > currentHeight ? currentMaxHeight : currentHeight;
    } else {
        return calculateMaximumTreeHeight(tree.left, currentHeight, currentMaxHeight) && serializeBinaryTree(tree.right, currentHeight,currentMaxHeight);
    }  
}

var serializeBinaryTreeLevelOrder = function (tree, maxHeight) {
    const currentVal = (tree && tree.val) ? tree.val : null;
    if (currentVal === null){
        return serializedTree;
    } else {
        serializedTree.push(currentVal);
        if (tree.left || tree.right) {
            serializedTree.push((tree.left && tree.left.val) ? tree.left.val : null);
            serializedTree.push((tree.right && tree.right.val) ? tree.right.val : null);
            return serializeBinaryTreeLevelOrder(tree.left, serializedTree) && serializeBinaryTreeLevelOrder(tree.right, serializedTree);
        } else {
            return serializedTree;
        }
    }
}

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
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



var mergeTrees = function(t1, t2) {
    var serialized1 = serializeBinaryTree(t1, []);
    var serialized2 = serializeBinaryTree(t2, []);
    const serializedMerged = mergeSerializedTrees(serialized1, serialized2);
    return serializedMerged;
    
};

var serializeBinaryTreeLevelOrder = function (tree, serializedTree) {
    const currentVal = (tree && tree.val) ? tree.val : null;
    if (currentVal && serializedTree.length === 0){
        serializedTree.push(currentVal);
    }
    const leftVal = tree.left || null;
    const rightVal = tree.right || null;
    serializedTree.push(tree.left, tree.right);
}

// this is a pre-order binary traversal technique
var serializeBinaryTree = function(tree, serializedTree){
    const currentVal = (tree && tree.val) ? tree.val : null;
    serializedTree.push(currentVal);
    if(currentVal === null || (tree.left === null && tree.right === null)) {
        return serializedTree
    } else {
        return serializeBinaryTree(tree.left, serializedTree) && serializeBinaryTree(tree.right, serializedTree);
    }
}

/* This does not work yet 
 *
 */
var deserializeBinaryTree = function (serializedTree, tree){
    console.log('entering function with serializedTree: ', serializedTree, 'and tree: ', tree);
     if (serializedTree.length === 0) {
         console.log('hitting this return. tree is:', tree)
        return tree;
    } else {
        const currentValue = serializedTree.shift();
        const newTree = new TreeNode(currentValue);
        if(serializedTree.length>0) {I
            // console.log('or this return?');
            newTree
            return deserializeBinaryTree(serializedTree, newTree.left) && deserializeBinaryTree(serializedTree, newTree.right);
        } else {
            console.log('lenght of serializedTree is: ', serializedTree.length, ' and so we return newTree: ', newTree);
            return newTree;
        }
        
    }
}

var mergeSerializedTrees = function (serializedTree1, serializedTree2) {
    var localTree1 = serializedTree1.length > serializedTree2.length ? serializedTree1 : serializedTree2;
    var localTree2 = serializedTree1.length > serializedTree2.length ? serializedTree2 : serializedTree1;
    var localTreeSum = [];
    for(let i=0; i <localTree1.length; i++) {
        let localSum;
        if ( localTree1[i] && localTree2[i]) {
            localSum = localTree1[i] + localTree2[i];
        } else if (localTree1[i]) {
            localSum = localTree1[i];
        } else if (localTree2[i]){
            localSum = localTree2[i];
        } else {
            localSum = null;
        }
        localTreeSum[i]= localSum;
    }
    return localTreeSum;
    
}