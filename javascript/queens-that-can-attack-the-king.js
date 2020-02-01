/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */


/**
 * 
 * from an algorithm design perspective, the things that are of note are:
 * 1) a queen can attack the king if she is in the same column or row as the king,
 * and there is nothing between her and him
 * 
 * 2) a queen can attack the king if she is on the same diagonal as the king and there are
 * no other pieces between that queen and the king.  this is interesting because diagonals
 * go in four directions.
 * 
 * some additional questions: does it make more sense to iterate over queens, or squares on the board?
 * technically the upper limit of queens is total squares -1 (for the king's spot), so there's not
 * an obvious preference here.  but probably iterating over queens is worth doing.
 * 
 * from a clean code perspective, I think it's worth realizing that row vs. column really isn't
 * a great way to conceptualize this; it doesn't matter how we label which as long as we are consistent.
 * 
 * 
 * LESSONS learned: I didn't correctly iterate secondary counters when doing diagonals.
 * I also did not correctly handle the situation of retrieving the "closest" queen for the column/row scenario.
 * when we were looking for a value _less than_ the king's position. (needed to reverse the sorted array for that).
 * 
 * implementation notes: reverse mutates the current array (exactly like sort).  deep copying an array
 * requires explicit behavior since arrays (non-primitive) are pass by copy of reference. 
 * 
 */

var queensAttacktheKing = function(queens, king) {
    queens = queens.sort((a,b)=> {
        if(a[0]==b[0]) {
            return (a[1]>b[1]) ? 1: -1;
        } else if(a[0]>b[0]) {
            return 1;
        } else {
            return -1;
        }
    });
    console.log('queens: ', queens);
    let reversedQueens = [...queens];
    reversedQueens.reverse();
    // now that we have sorted the array of queens, we can
    // use javascript's native 'find' method to select only the queens
    // closest to the king.
    let attackQueens = [];
    const a = reversedQueens.find((a)=> {
        return (a[0] === king[0]) && (a[1]<king[1]);
    })
    if(a){attackQueens.push(a)}

    const b = queens.find((a)=> {
        return (a[0] === king[0]) && (a[1]>king[1]);
    })
    if(b){attackQueens.push(b)};

    const c = reversedQueens.find((a)=> {
        return (a[1] === king[1]) && (a[0]<king[0]);
    })
    if(c){attackQueens.push(c)};

    const d = queens.find((a)=> {
        return (a[1] === king[1]) && (a[0]>king[0]);
    })
    if(d){attackQueens.push(d)};
    
    console.log('attack queens: ', attackQueens);

    // now we must get the diagonal queens! this is trickier.
    let checkPlus = true;
    let yPlus = king[1];
    let checkMinus = true;
    let yMinus = king[1];
    for(let x=(king[0])-1; x>=0; x--){
        if(checkPlus) {
            yPlus++;
            const a1 = [x, yPlus];
            if (queens.find((a)=> a[0]==a1[0] && a[1]==a1[1])) {
                attackQueens.push(a1);
                checkPlus = false;
            }    
        }
        if(checkMinus){
            yMinus--;
            const b1 = [x, yMinus];
            if (queens.find((a)=> a[0]==b1[0] && a[1]==b1[1])) {
                attackQueens.push(b1);
                checkMinus = false
            }
        }
        
    }
    checkPlus = true;
    yPlus = king[1];
    checkMinus = true;
    yMinus = king[1];
    for(let x=(king[0])+1; x<8; x++){
        if(checkPlus) {
            yPlus++;
            const a1 = [x, yPlus];
            if (queens.find((a)=> a[0]==a1[0] && a[1]==a1[1])) {
                attackQueens.push(a1);
                checkPlus = false;
            }    
        }
        if(checkMinus){
            yMinus--;
            const b1 = [x, yMinus];
            if (queens.find((a)=> a[0]==b1[0] && a[1]==b1[1])) {
                attackQueens.push(b1);
                checkMinus = false
            }
        }
        
    }
    console.log('attack queens: ', attackQueens);

    
};

const foo = queensAttacktheKing([[4,7],[1,3],[6,6],[3,0],[0,2],[0,7],[6,2],[3,7],[5,1],[2,5],[0,3],[7,2],[4,0],[1,2],[3,3],[5,5],[4,4],[6,3],[1,5],[5,0],[0,4],[6,4],[5,4],[3,2],[0,0],[4,5],[0,5],[2,3],[1,0],[6,5],[5,3],[0,1],[7,0],[4,6],[5,7],[7,4],[2,0],[4,3],[3,4]],[2,4]);
console.log('queens that can attack the king: ', foo);