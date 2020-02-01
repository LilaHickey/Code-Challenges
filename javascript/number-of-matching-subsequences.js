/**
 * Problem:https://leetcode.com/problems/number-of-matching-subsequences/
 * 
 * Given string S and a dictionary of words words, find the number of words[i] that is a subsequence of S.
 */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * This is very similar to the related problem, https://leetcode.com/problems/is-subsequence
 * 
 * For each word in words:
 * 1) length check - can words[i] fit in S (this is really simple and probably doesn't buy us much improvement, but it's so easy to check - why not.)
 * 2) now, search S for the first letter of words[i]
 * 3) if not found, return false
 * 4) if found, search substring of S (from index of where words[i][0] was found to S.length) for words[i][1]...words[i][n]
 * 
 * Notes: didn't make the same slicing mistake on this one that I did on the related problem (since I just did that one).  Only other
 * noteworthy things about this are:
 * 
 * 1) not sub-slicing the original string S, but rather deep-copying/slicing it correctly for each word.
 * 2) correctly setting/recording the bool that's being used to increment the return value counter.
 * 
 */

/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(S, words) {
   let numberOfMatches = 0;
   for(let i=0; i<words.length; i++) {
       const currentWord = words[i];
       let isSubsequence = true;
       if (currentWord.length > S.length) {
           isSubsequence = false;
           continue; // exit iteration of loop, keep going
       }
       let workingCopyS = S;
       for(let j=0; j<currentWord.length; j++) {
           // console.log(`word is: ${currentWord}`)
           const startIndex = workingCopyS.indexOf(currentWord[j]);
           // console.log(`start index is ${startIndex} when searching for letter ${currentWord[j]}`)
           if(startIndex !== -1) {
               workingCopyS = workingCopyS.slice(startIndex+1,);
               // console.log('now workingCopy is: ')
           } else {
              isSubsequence = false;
              continue;           }
       }
       if(isSubsequence) {
           numberOfMatches +=1;
       }
   }
   return numberOfMatches;
};