/**
 * Problem: https://leetcode.com/problems/self-dividing-numbers/
 * 
 *

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var selfDividingArray = [];
    for(let x = left; x<=right; x++) {
        let xArray = x.toString().split(""); // ["1","2","8"]
        let isSelfDividing = true;
        for (let z=0; z<xArray.length; z++) {
            const digit = parseInt(xArray[z]); // "1"
            if(digit === 0) {
                // we don't want this entire number,
                // which is represented by xArray,
                // so break out of for loop entirely;
                // (rather than continue, which would)
                // move to the next digit in x
                isSelfDividing = false;
                break;
            } else if (x % digit !==0) {
                isSelfDividing = false;
                break;   
            }
        }
        if(isSelfDividing) {
            selfDividingArray.push(x);
        }
    }
    return selfDividingArray;
    
};

// time complexity on this is going to be: O(n*n.length) so this is weird,
// because it's not n^2, but n _does_ have an impact on the multiplier so it's
// not totally unimportant.

// we