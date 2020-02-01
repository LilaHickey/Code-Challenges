/**
 * Problem: https://leetcode.com/problems/peak-index-in-a-mountain-array/
 * 
 *

/**
 * @param {number[]} A
 * @return {number}
 */
// this is an O(n) time complexity solution.
var peakIndexInMountainArray = function(A) {

    let currentMaxima = -1;
    for(let i=1; i<A.length; i++) {
        if(A[i] > A[i-1]) {
            currentMaxima = i;
        } else if (A[i] < A[i-1]) {
            break;
        }
    }
    return currentMaxima;
};

/**
 * binary search solution:
 * binary search takes advantage of our ability to halve
 * a list and search that half.
 * 
 * a typical implementation would be searching each subarray
 * for a given _value_ but I think we can search for a peak
 * just a readily, 
 * 
 * UPDATE: this is not true because context is what allows us
 * to identify the peak.  perfect example:
 * 
 * [0,2,3,5,7,6,3,2,1,0]
 * 
 * first round of splitting produces:
 * 
 * [0,2,3,5,7] [6,3,2,1,0]
 * 
 * which takes away the context of knowing 7 is greater than 6
 * 
 * I have totally been mis-thinking the acceptance criteria here:
 * we just need to find the maximum, since the description of a mountain
 * guarantees uniqueness-of value. (guaranteed bc all comparisons are gt
 * or lt and there are no gte or lte)
 * 
 * Finally: things that were challenging about a recursive solution to this problem include:
 * 
 * 1) persisting _original_ index value despite the effective
 * reindexing that occurs when splitting an array.  The correct formula is:
 * 
 * first array in any split: do not alter index, current index will match
 * original index.
 * 
 * second array in any split: array element's _original_ indice can be derived
 * by adding the current split index to its previous index. e.g. if you split a 6
 * element array at [0,3] and[3,] then the second array's first element will be
 * index 0 (current index) and index 3 (original index)
 * 
 * 
 * 2) returning element index, while calculating the appropriate return element
 * based on element value.  this required some thought in ternary operator that 
 * I used for the recursive call. 
 * 
 * time complexity: O(log n)
 * 
 * */ 


 // 
 var peakIndexInMountainArrayBinary = function(A) {
    const mountainPeak = recursiveBinaryArraySearch(A, 0);
    return mountainPeak.indexCount;
};

var recursiveBinaryArraySearch = function(A, currentIndex) {
     if (A.length === 1) {
        const returnObject = {
            'value': A[0],
            'indexCount': currentIndex
        };
        return returnObject;
    } else {
        const splitIndex = Math.floor(A.length/2);
        let array1 = A.slice(0, splitIndex);
        let array2 = A.slice(splitIndex, );
        return recursiveBinaryArraySearch(array1, currentIndex)['value'] > 
            recursiveBinaryArraySearch(array2, currentIndex+splitIndex )['value'] ?
            recursiveBinaryArraySearch(array1, currentIndex):
            recursiveBinaryArraySearch(array2, currentIndex+splitIndex);
    }
}
var inArray =[0,2,3,5,7,6,3,2,1,0];
var finalReturn = peakIndexInMountainArrayBinary(inArray);
console.log('FINAL RETURN IS: ', finalReturn);
// [0,2,3,5,7,6,3,2,1,0]
// [0,2,3,5,7] [6,3,2,1,0]

// [0,1,2,3,5,7,4,2,1]
// [0,1,2,3,5] [7,4,2,1]


// [0,1,15,6,5,4,3,2,1]
// [0,1,15,6,5] [4,3,2,1]