/**
 * Problem: https://leetcode.com/problems/sort-array-by-parity-ii/
 *
 * Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.
 * Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
 * You may return any answer array that satisfies this condition. 
 *
/**
 * @param {number[]} A
 * @return {number[]}
 */

/**
 * Here's a pretty straightforward O(n^2) solution:
 * iterate over the array, and as soon as we find a mis-matched
 * value (e.g. even value at an odd indices), we start looping over
 * the _rest_ of the array, looking for another mis-matched value
 * (but one that is complimentary to the mis-match in the outer loop).
 * 
 * 
 * The only obvious "gotcha" is remembering that, when
 * swapping values who are currently not mached to their indices,
 * the values must not be matched to each other, i.e.
 * we gain nothing by swapping two odd values that are placed
 * at an even index - the second value is still a mismatch.
 *  */
var sortArrayByParityII = function(A) {
    for(i=0; i<A.length; i++){
        if(i%2 !== A[i]%2) {
            for(j=i+1; j<A.length; j++){
                if(j%2 !==A[j]%2 && j%2 !== i%2){
                    const first = A[i];
                    const second = A[j];
                    A[i] = second
                    A[j] = first
                }
            }
        }
        
    }
    return A;
};

/**
 * This actual solution falls somewhere between O(n)
 * and O(1.5n) - the former if no swaps are required, the
 * latter if all values must be swapped.  After dropping
 * the constants, this is an O(n) solution which is a
 * solid improvement over O(n2).
 * 
 * The idea here is to loop over the array once, and extract
 * mismatched values out to a hash (using the value's modulo
 * as a hash key). NOTE: this implementation aspect probably
 * is not worth doing because we still have to iterate over
 * the values in any particular hash, and we gain no lookup benefit
 * of odd vs even arrays when compared to making two separate arrays. 
 * In retrospect I think it's needlessly complicated.
 * 
 * Once we have two matched-length arrays of values to be swapped,
 * the only other stumbling block is knowing that javascript 
 * arrays are passed by reference, so unless we force a "deep copy"
 * of the original array, the second round of swaps will be
 * erroneous because we will be referencing array values that have just
 * been swapped.
 * 
 * Javascript arrays can be deep-copied with solutions like:
 * lodash's cloneDeep
 * vanilla javascript methods which explicitly return a new array (e.g. slice)
 * any kind of operation which casts to another type and then back to array (e.g. split/join)
 */

var sortArrayByParityII = function(A) {
    let trackingHash = {
        0:[],
        1:[]
    };
    for (i=0; i<A.length; i++){
        if(i%2 != A[i]%2){
            trackingHash[i%2].push(i);
        }
    }
    const copy = A.slice(0,A.length)
    for(a=0; a<trackingHash[0].length; a++){
        const oddIndex = trackingHash[1][a];
        const evenIndex = trackingHash[0][a];
        A[oddIndex] = A[evenIndex];
        A[evenIndex] = copy[oddIndex]
        
        
    }
    return A;
}