/**
 * Problem: https://leetcode.com/problems/3sum/
 * 
 * Given an array nums of n integers, are there elements a, b, c 
 * in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 *
 * Note:
 * The solution set must not contain duplicate triplets.
 * 
 * 
 *
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * The time complexity of this brute force solution is:
 * O(n^3) which is pretty terrible.
 * 
 * other things worth noting: used a dict to avoid having to
 * manually de-duplicate the triplets (which would have required
 * another nested for loop).  dict premise does rely on order of
 * array elements being standardized, though.
 */
var threeSum = function(nums) {
    var sumDict = {};
    var sumArray =[];
    for(let i=0; i<nums.length; i++){
        const currentVal = nums[i];
        for(let j=0; j<nums.length; j++) {
            const otherVal = nums[j];
            if(i==j){
                continue; // stay inside the j-loop, but skip this iteration.
            } else {
                const sum = currentVal + otherVal;
                for(let k=0; k<nums.length;k++){
                    const possibleSum = nums[k];
                    if(k==i || k==j){
                        continue;
                    } else if (sum + nums[k] === 0){
                        var triplet = [currentVal, otherVal, possibleSum];
                        triplet.sort((a,b)=>a>b?1:-1);
                        tripletAsString = triplet.join(',')
                        sumDict[tripletAsString]=true;
                    }
                    
                }
            }
        }
    }
    sumArray = Object.keys(sumDict);
    for(let m=0; m<sumArray.length; m++){
        sumArray[m] = sumArray[m].split(",");
    }
    return sumArray;
};

// I suspect there's something we can do by sorting the values in advance...

// [-1, 0, 1, 2, -1, -4]

// [-4, -1, -1, 0, 1, 2]

// -4 + (b) + (c) = 0

// once we determine b, we can potentially bail out of 3rd nested loop early, as
//soon as we know c is not feasible, e.g.:

// -4 + -1 = -5 so c = 5

// better:

// -> get every possible sum of two values
// -> search for acceptable thirds?
var numArrayToString = function(arrayNums)
{
    arrayNums.sort((a,b)=>a>b?1:-1);
    return arrayNums.join(",");
}

var stringToNumArray = function(stringNums){
    const arrayNums =  stringNums.split(",");
    for(let i=0; i<arrayNums.length; i++){
        arrayNums[i] = parseInt(arrayNums[i]);
    }
    return arrayNums;
}


/**
 * Takes as arguments: 
 * an array to search, 
 * the target value for which we are searching
 * the current index (so we can return it),
 * and blacklisted indices (so we do not return a target value 
 * which duplicates another value of the memoized sum it's being added to)
 */

var recursiveBinarySearch = function(searchArray, targetValue, currentIndex, blackListedIndices) {
    if(searchArray.length===1 &&
       searchArray[0]===targetValue &&
       blackListedIndices.indexOf(currentIndex)===-1){
        return currentIndex;
    } else if(searchArray.length===1){
        return -1;
    }
    const splitIndex = Math.floor(searchArray.length/2);
    let array1 = searchArray.slice(0, splitIndex);
    let array2 = searchArray.slice(splitIndex, );

    if( array1[0]<=targetValue &&
       array1[array1.length-1]>=targetValue ){
       return recursiveBinarySearch(array1, targetValue, currentIndex, blackListedIndices);
    } else if( array2[0]<=targetValue &&
       array2[array2.length-1]>=targetValue ) {
        return recursiveBinarySearch(array2, targetValue, currentIndex+splitIndex, blackListedIndices);
    } else {
        return -1;
    }
}

var threeSum = function(nums) {
    const hashMapImplementation = {};
    const finalSums = {};
   
    nums.sort((a,b)=>a>b?1:-1);
    for (let i=0; i<nums.length; i++) {
        if(hashMapImplementation[nums[i]]===undefined){
            hashMapImplementation[nums[i]] =  [i];
        } else {
            hashMapImplementation[nums[i]].push(i);    
        }
    }
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            const indices = [i, j];
            const sum = nums[i]+nums[j];
            const targetNum = 0 -sum;
            if (targetNum in hashMapImplementation &&
                !hashMapImplementation[targetNum].every(val => indices.includes(val))
               ) {
                const triplet = [nums[i], nums[j], targetNum];
                finalSums[triplet] = true;
            }
        }
    }
    const keyDict = {};
    for(let k in finalSums){
        const keyAsNum = k.split(',');
        let keys = keyAsNum.map(k=>parseInt(k));
        keys.sort((a,b)=>a>b?1:-1);
        keyDict[keys] = true;
    }
    
    let finalArray = [];
    for(let[k,v] of Object.entries(keyDict)){
        let newK = k.split(",");
        newK = newK.map((v)=>parseInt(v));
        finalArray.push(newK);
    }
    return finalArray;
};

const bar = threeSum([-1,0,1,2,-1,-4]);
console.log('RESULT: ', bar);
