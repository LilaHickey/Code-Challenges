/**
 * Problem: https://leetcode.com/problems/contains-duplicate/
 *

/**
 * 
 * A pretty easy way to do this is by storing values you've already
 * seen in a lookup table, as keys.  
 * 
 * Time complexity is O(n) since we have to iterate through
 * the entire loop once to be 100% sure that there are no duplicates.
 * 
 * It is possible that we might exit early by finding a duplicate early, 
 * but there's no guarantee of that.
 * 
 * Another way to do this in javascript would be to use the set() 
 * functionality and compare the lengths of the two entities. (see second solution).
 * 
 * The time complexity of the Set function is likely O(n) - I don't think it can be lower,
 * since there's no getting around looking at the whole array, and I can't imagine
 * any good browser would do worse than that.  So this is probably the correct way to solve a problem 
 * like this, where all we need is a boolean return.
 * 
*/



/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let lookup = {}
    for(let i=0; i<nums.length; i++){
        const currentVal = nums[i];
        if(lookup[currentVal]) {
            return true;
        } else {
            lookup[currentVal] = true;
        }
    }
    return false;
};


var containsDuplicate = function(nums) {
    var uniqueNums = new Set(nums);
    return !(uniqueNums.size === nums.length);
}
