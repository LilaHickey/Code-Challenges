
// I fucked this one up pretty badly on the first out by using
// an implicit eval of an array value as a boolean, which can involve
// checking the truthiness of zero. Zero is not truthy. 

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    for(let i = 0; i<nums.length; i++){
        // console.log('i is now: ', i);
        // console.log('length: ', )
        let previousVal = nums[i];
        let val = nums[(i+1)%nums.length];
        let nextVal = nums[(i+2)%nums.length]
        if((previousVal <= val) && (val >= nextVal)) {
          return nextVal;   
        }
        
    }
};

// time complexity is O(n)

// findMin([4,5,6,7,0,1,2]);