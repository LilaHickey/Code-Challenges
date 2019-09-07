/**
 * Problem: https://leetcode.com/problems/array-partition-i/
 * 
 *

/**
 * 1) make a bunch of tuples
 * 2) sum the smaller values from each tuple
 * 3) get the largest possible sum

 * so the goal is to have tuples that are as close together
 * as possible, numerically, to minimize loss on each min()
 * function.
 * 
 * as I walk through this, it's really more efficient than those steps:
 * 
 * 1) order the array
 * 2) sum every other value.
 * 
 * the most interesting part of this problem (from a js perspective)
 * is how sort works by default (lexigraphic comparison). I swear,
 * is why people think javascript is that kid in the corner eating
 * paste and they're not wrong. 
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b)=>a-b); // sort in place
    let sum=0;
    for(let i=0; i<nums.length; i+=2){
        sum+=nums[i];
    }
    return sum;
};
