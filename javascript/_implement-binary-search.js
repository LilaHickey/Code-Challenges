
// A = [1,3,5,6,8,9,10,12]
// target = 8
// targetNotFound = true;

var recursiveBinarySearch = function(A, target){
    console.log('entering loop with A: ', A);
    console.log('A.length===1: ', A.length===1);
    console.log('A[0]===target: ', A[0]===target);

    if(A.length===1 && A[0]===target){
        console.log('this? ', A);
        return A;
    }
    array1 = A.slice(0,A.length/2);
    array2 = A.slice(A.length/2,);
    if(array1[0]<=target && array1[array1.length-1]>=target){
       return recursiveBinarySearch(array1, target);
    } else if(array2[0]<=target && array2[array2.length-1]>=target) {
        return recursiveBinarySearch(array2, target);
    } else {
        return -1;
    }

}

var returnVal = recursiveBinarySearch([1,3,5,6,8,9,10,12], 8)
console.log('returnVal: ', returnVal);