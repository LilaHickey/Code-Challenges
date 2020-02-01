/**
 * Problem:https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/submissions/
 * 
 * You are given an array of strings words and a string chars.

 * A string is good if it can be formed by characters from chars (each character can only be used once).

 * Return the sum of lengths of all good strings in words.

 * Pitfalls on this problem: returning the wrong thing (# of good strings, rather than total length).
 * Not flipping increment flag at the correct time in exit process
 * Deep-copying the string against which we are matching/searching.
 *
 

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let stringLength = 0;
    chars = chars.split("").sort().join("");
    for(let i=0; i<words.length; i++) {
        const currentWordAlpha = words[i].split("").sort().join("");
        let copyChars = chars;
        let isGood = true;
        for(let j=0; j<currentWordAlpha.length; j++) {
            const currentLetterIndex = copyChars.indexOf(currentWordAlpha[j]);
            if(currentLetterIndex === -1) {
                isGood = false;
                break; // exit loop early, this word fails
            } else {
                copyChars = copyChars.slice(currentLetterIndex+1,);
                continue;
            }
        }
        if(isGood) {
            stringLength+=words[i].length;
        }
    }
    return stringLength;
};
