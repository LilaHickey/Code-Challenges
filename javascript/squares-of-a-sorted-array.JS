/**
 * Task: Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.
 * Link: https://leetcode.com/problems/squares-of-a-sorted-array/
 *
 * 
 * Input: [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 * 
 * Input: [-7,-3,2,3,11]
 * Output: [4,9,9,49,121]
 * 
 * Notes: do not de-duplicate array values (see example 2).
 *
 * The interesting thing about this problem is that we already have a sorted array,
 * but the output of the squaring map will not be sorted.  Ergo the challenge
 * is not just to perform the mapping operation, but do create the array
 * in a way which takes advantage of the old array.

 * @param {number[]} A
 * @return {number[]}
 */

 /**
  * simplest implementation from both time and space perspective
  * Expected time complexity depends on browser's implementation of .sort but is something like O(n log(n))
  */
 var sortedSquares = function(A) {
    const squareArray = [];
    for (let i=0; i<A.length; i++) {
        const square = A[i] * A[i];
        squareArray.push(square);
    }
    squareArray.sort(function(a,b){ return a - b } );
    return squareArray;
};
/** 
 * Runtime: 188 ms, faster than 7.27% of JavaScript online submissions for Squares of a Sorted Array.
 * Memory Usage: 43.3 MB, less than 52.59% of JavaScript online submissions for Squares of a Sorted Array.
 */



/**
 * we could work in  place, so as not to use additional space...
 * Expected time complexity is the same, but space complexity might be a little better.
 */
var sortedSquares = function(A) {
    for (let i=0; i<A.length; i++) {
        const square = A[i] * A[i];
        A[i] = square;
    }
    A.sort(function(a,b) { return a - b } );
    return A;
};

// Runtime: 152 ms, faster than 35.89% of JavaScript online submissions for Squares of a Sorted Array.
// Memory Usage: 42.8 MB, less than 76.32% of JavaScript online submissions for Squares of a Sorted Array.

/**
 * Alternately, we could try to take advantage of the fact that the original array is sorted, and see if there's
 * some way to capitalize on that.  
 */
var sortedSquares = function(A) {
    console.log('Array is: ', A);
    let positiveArray =[];
    let negativeArray =[];
    const negativePositiveBoundary = A.findIndex(function(element, index) { 
           return (element - A[index+1] < element)
    
    })
    // if we are splitting, do it now...
    if(negativePositiveBoundary !== -1) {
        positiveArray = A.slice(negativePositiveBoundary);
        negativeArray = A.slice(0,negativePositiveBoundary);
        // loop of some subset = drop the constant = N
        for (let i=0; i<positiveArray.length; i++) {
            positiveArray[i]= positiveArray[i]*positiveArray[i];
        }
        // loop of some subset = drop the constant = N
        for (let i=0; i<negativeArray.length; i++) {
          negativeArray[i] = negativeArray[i]*negativeArray[i];
        }
        console.log(`positive array is: ${positiveArray} and negative is: ${negativeArray}`);
        // now merge the arrays..
        // nested loop = N*N (this is bad)
        // note: be sure that you're making a deep copy of the final array,
        // otherwise you get into a weird loop edit.
        let finalArray = positiveArray.concat();
        console.log('negative array: ', negativeArray);
        for (let i =0; i<positiveArray.length; i++) {
            console.log('positive value of: ', positiveArray[i])
           for (let j = 0; j<negativeArray.length; j++) {
               console.log('negative value of: ', negativeArray[j]);
               if (negativeArray[j] < positiveArray[i]) {
                   console.log(`${negativeArray[j]} is less than ${positiveArray[i]} so insert it..`)
                   var insertNumber = negativeArray.shift();
                   console.log('negative Array is now: ', negativeArray);
                   finalArray.splice(i, 0, insertNumber);
                   console.log(`final array is now: `, finalArray);
                   continue;
               }
           }
       }
       return finalArray;
       
    } else {
        for (let i=0; i<A.length; i++) {
            const square = A[i] * A[i];
            A[i] = square;
        }
        A.sort(function(a,b) { return a - b } );
        return A;
    }

}


[-7,-3,2,3,11].find()

-7 - (-3) = -4 is greater than -7
-3 - (2) = -5 is less than -3


if (element - A[index+1] < element) {
    console.log('boundary found! it is: ', element)
}