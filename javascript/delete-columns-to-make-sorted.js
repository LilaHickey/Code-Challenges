/**
 * Problem: https://leetcode.com/problems/delete-columns-to-make-sorted/
 * 
 * Given an array A of n strings, determine which columns -e.g.:
 * A[0][0]
 * A[1][0]
 * 
 * would need to be deleted in order for all columns to be "increasing" (A->Z)
 * alphabetic order.
 */

var alphaToNumeral = function(letter){
    const alphaMap = {
        'a':0,
        'b':1,
        'c':2,
        'd':3,
        'e':4,
        'f':5,
        'g':6,
        'h':7,
        'i':8,
        'j':9,
        'k':10,
        'l':11,
        'm':12,
        'n':13,
        'o':14,
        'p':15,
        'q':16,
        'r':17,
        's':18,
        't':19,
        'u':20,
        'v':21,
        'w':22,
        'x':23,
        'y':24,
        'z':25
    }

    
    return alphaMap[letter];
}
/**
 * @param {string[]} A
 * @return {number}
 * 
 * For me at least, a big part of the challenge with something like this is keeping track of the correct index.
 * [
 * "cba",
 * "daf",
 * "ghi"
 * ]
 * 
 * Improvements:
 * 1) switch out for/of loops for traditional for loops; ES6 functionality is very inefficient
 * 2) pull anything possible out of the nested for loop, e.g. instead of incrementing the deletion index
 * inside that loop, calculate it at the very end based on teh columnIndex's changed length.
 * 3) this will probably be big: hash only needs to track most recent value, so no array handling/splicing.
 * 
 * I missed something really fundamental, which is: you don't need to iterate over all rows.  (At least not
 * the way that I am doing this). My inner loop is traversing down the columns for each letter in the first row,
 * so there's no need to then continue to traverse rows.
 * 
 * I can also avoid using an explicit map of alpha to number bc I can use charCodeAt
 * 
 */

var minDeletionSize = function(A) {
    const columnsAsHashMap = {};
    const columnIndex = [...A[0].split("").keys()];
    console.log('column index is: ', columnIndex);
    const totalColumns = columnIndex.length;
    for(let index=0; index<A.length; index++) {
        for(let innerIndex=0; innerIndex<columnIndex.length; innerIndex++){
            let currentIndexValue = columnIndex[innerIndex];
            let currentChar = A[index].charAt(currentIndexValue);
            let currentCharAsNumeral = alphaToNumeral(currentChar);
            if (columnsAsHashMap[currentIndexValue] !== undefined) {
                let lastCharAsNumeral = columnsAsHashMap[currentIndexValue];
                if (lastCharAsNumeral > currentCharAsNumeral) {
                    columnIndex.splice(innerIndex, 1);
                    continue; // exit this iteration (current column) of inner for loop, but continue examining other columns
                } else {
                    columnsAsHashMap[currentIndexValue] = currentCharAsNumeral;
                }
            } else {
           columnsAsHashMap[innerIndex] = currentCharAsNumeral;
        }
      }
   }
   return totalColumns - columnIndex.length; 
};


var minDeletionSize = function(A) {
    let deletionCount = 0;
    for(let i=0; i<A[0].length; i++) {
        for(let j=0; j<A.length-1; j++) {
            const currentChar = A[j].charCodeAt(i); // iterating through first string, char by char
            const nextChar = A[j+1].charCodeAt(i);
            if(nextChar < currentChar) {
                console.log('we should delete this column!')
                console.log('i: ', i, 'j: ', j);
                deletionCount++
                break;
            }
        }
    }
    return deletionCount;
};

const returnVal = minDeletionSize(["zyx","wvu","tsr"]);
// const returnVal = minDeletionSize(["rrjk","furt","guzm"]);

console.log('return value: ', returnVal);

