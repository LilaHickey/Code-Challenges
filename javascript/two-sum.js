/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        // if(nums[i]>target){
        //     continue; // don't want to quit entirely, just skip this iterator..
        // }
        for(let j=0; j<nums.length; j++){
            if(j===i){
                continue; // skip the same element being used in outer loop
            }
            // console.log('what is sum: ', nums[i]+nums[j]);
            if( (nums[i]+nums[j])===target){
                return [i, j];
            }
        }
    }
};

// I feel very foolish about this one.  the commented out code represents
// a conceptual error; problem did not state that all values would be
// positive. 