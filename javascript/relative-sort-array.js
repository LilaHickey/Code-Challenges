const util = require('util');

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 * 
 * biggest takeaway from this one was getting more familiar with javascript's native sort.
 * this was interesting because it forced me to really understand the compareFunction signature,
 * and also confirm that I absolutely do not understand iteration (I don't think it's consistent
 * across multiple implementations, node is diff from Chrome is diff from FF.)
 * 
 * looking at other solutions that people used, I could also have taken advantage of the fact that
 * arr2 was already sorted.
 * 
 */
var relativeSortArray = function(arr1, arr2) {
    arr1.sort((a,b)=> {
      console.log('entering sort loop, and array is: ', util.inspect(arr1));
      console.log(`currently examining ${a} and ${b}`);
      const aInArr2 = arr2.findIndex((a2)=>a2===a) !== -1;
      const bInArr2 = arr2.findIndex((b2)=>b2===b) !== -1;
      if(aInArr2 && bInArr2){   
        const returnVal = arr2.findIndex((a2)=>a2===a) > arr2.findIndex((b2)=>b2===b) ?
              1:
             -1;
        console.log('both values are in arr2...');
        if(returnVal==1){
            console.log(`${a} should have an later index in the array than ${b}`);
        } else if(returnVal==-1) {
            console.log(`${a} should have an earlier index in the array than ${b}`);
        }
        return returnVal;
      } else if (aInArr2 && !bInArr2) {
        console.log(`${a} is in arr2, and ${b} is not, so ${a} should have an earlier index in the array than ${b}`);
        return -1;
      } else if (!aInArr2 && bInArr2){
        console.log(`${a} is not in arr2, and ${b} is, so ${a} should have a earlier index in the array than ${b}`);
        return 1;
      } else if (!aInArr2 && !bInArr2){
          const returnVal = a>b?1:-1;
          if(returnVal==1){
            console.log(`neither ${a} nor ${b} is in arr2, but ${a} comes after ${b} numerically, so ${a} should have an later index in the array than ${b}`);
        } else if(returnVal==-1) {
            console.log(`neither ${a} nor ${b} is in arr2, but ${a} comes before ${b} numerically, so ${a} should have an earlier index in the array than ${b}`);
        }
        return returnVal;
      }
    })  
    return arr1;
  };
  

  const foo = relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6])
  console.log('foo: ', util.inspect(foo));

// if current value and next value are both in arr2, we should
// compare their indices in _that_ array, and sort accordingly.
// e.g. if the 


// if not in other array, push to end of this array
// (but we still want to sort..)
// if in other array, sort by whatever metric
// that array is using (which might not be a ascend
// or descend sort, if I understand it correctly?)