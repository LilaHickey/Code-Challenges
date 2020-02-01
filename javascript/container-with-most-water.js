/**
 * Problem: https://leetcode.com/problems/container-with-most-water/
 * 
 * Given n non-negative integers a1, a2, ..., an , where each represents
 * a point at coordinate (i, ai). n vertical lines are drawn such that the
 * two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which
 * together with x-axis forms a container, such that the container contains the most water.
 * 
 * Note: You may not slant the container and n is at least 2.
 *
 * 
// this is fundamentally an area calculation,
// so the solution is to find all possible
// widths (as demonstrated by difference between i-values)
// by height (as demonstrated by lesser of two element values
// at i-index)


// 1) maximize gap between any two points on x-axis (element index)
// 2) maximize lesser of any two values for points on y-axis (element value)

// height calculation is fundamentally, an "n, pick 2" problem, so possible
// # combinations are:

// n!/2!(n-2)! = n!/2(n-2)!

 */

/**
 * @param {number[]} height
 * @return {number}
 */
// this is an O(n^2) solution so 
// ideally we'd want something faster than this.
var maxArea = function(height) {
    const maxIndices = {
        'i':undefined,
        'a': undefined
    }
    let maxArea =0;
    for(let j=0; j<height.length; j++) {
        for(let k=j+1; k<height.length; k++) {
             const minHeight = Math.min(height[j], height[k]);
            const area = minHeight * (k-j);
            if(maxArea < area){
                maxArea = area;
                maxIndices.i=[j,k];
                maxIndices.a=[height[j], height[k]]
            }
        }
    }
    return maxArea;
};

/**
 * Took a look at the canonical solution, and they hit on something I was fuzzying
 * around but didn't actualize:
 * 
 * I was considering re-ordering the array (by value) to increase likelihood of
 * getting a maximum area (while retaining the original array positioning for reference),
 * but shied away from implementing it because it sounded like a mess.  A better option 
 * is to _decrement_ the element indices 
 */
