/**
 * Problem: https://leetcode.com/problems/search-in-rotated-sorted-array/
 * 
 * 
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).
 *
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    for(let i = 0; i<nums.length; i++) {
        if (nums[i] === target){
            return i;
        }
    }
    return -1;
};

// // complexity of this solution is O(n)

// now we need O(log n) which would be a binary traversal


// [4,5,6, 7,0,1,2]

// [1,2,4,5,6] and [7,0]

// 

[]

// [4,5,6,7] and [0,1,2]

// if the array was not sorted, it would be as simple as:

// if num[i] = val, return i
// if nums[i]<val && nums[i+1] > val return -1


// so what assumption is no longer true?
// we might be checking at the inflection point?
    

// target = 7
// [0,1,2,4,5,6,7] => nums[6] = 7 return 6

// [4,5,6,7,0,1,2] 
// nums[2] <7 && nums[3] > 7 no, continue
// nums[3] = 7