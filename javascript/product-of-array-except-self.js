/**
 * 
// create an array where
// each value is the product
// of all values in another array
// except the value at the current index.
// 
/**
 * 
 * here is a solution that requires O(n^2) time.
 * why do we have to loop twice?
 * one loop is to loop over the original values,
 * which we need so we can multiply by them...
 * the second loop is to loop over the array we're populating
 * into
 */

var productExceptSelf = function(nums) {
    let output = new Array(nums.length).fill(1);
    for(let i=0; i<nums.length; i++) {
        for(let j = 0; j<nums.length; j++) {
            if(i!==j){
               output[j] = output[j] * nums[i];    
            }
        }
    }
    return output;
};

// and here is a solution that involves division.
// on the upside, complexity is lower because
// we are not nesting the for loops ( O(2n) = O(n) )
var productExceptSelf = function(nums) {
    var totalProduct = arrayProduct(nums);
    var finalArray = new Array(nums.length).fill(1);
    for(let i=0; i<nums.length; i++) {
        finalArray[i] = totalProduct/nums[i];
    }
}

var arrayProduct = function(array){
    let currentVal = 1;
    for(let i=0; i<array.length; i++) {
        currentVal = currentVal*array[i];
    }
    return currentVal;
}

// so I have two solutions that partially work:
// one that is disallowed because it has nested loops,
// and the problem requires 0(n) time complexity.
// the other is disallowed because it uses
// division.
// can I combine the concepts?
// my time-complexity solution involves pre-calculating
// the desired product

old = [4,  2,  3,  6] = 216
[36, 72, 48, 24]

nu = [2, 3, 6, 4]
rotations = array.length

for(i=0; i<rotations; i++){
  nu[]  
}
