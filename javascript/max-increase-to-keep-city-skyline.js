/**
 * Problem: https://leetcode.com/problems/array-partition-i/
 * 
 *

/**
 * for each cell:
 * 1) find highest value of row
 * 2) find highest value of column
 * 3) increase cell value by lesser of values from 1&2
 * 4) then sum each increase
 * 
 * [3,0,8,4]8
 * [2,4,5,7]7
 * [9,2,6,3]9
 * [0,3,1,0]3
 *  9 4 8 7
 *
 * grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]] 
 * 
 * I originally thought the time complexity of solution #1
 * was 0(n^2), because of the nested for loop required to
 * traverse the 2d array.  However, I was neglecting to consider
 * the for loops used in my helper functions (rowMax, colMax).
 * For the rowMax calculation, the impact is additive, i.e.
 * my outer for loop now has two nested for loops inside it,
 * but for colMax calculation, the impact ends up being exponential
 * as it adds a third nesting to the loop.  So I think the 
 * impact of that is actually to make time complexity 0(n^3), though
 * that is working under the assumption the grid is a square.
 * 
 * 
 */



/**
 * @param {number[][]} grid
 * @return {number}
 * Solution #1
 */var maxIncreaseKeepingSkyline = function(grid) {
    const gridNumRows = grid.length;
    const gridNumColumns = grid[0].length;
    let totalIncrease = 0;
    for(let i = 0; i<gridNumRows; i++) {
        const currentRowMax = rowMax(grid[i]);
        for ( let j = 0; j<gridNumColumns; j++) {
            const currentColMax = colMax(grid, j)
            const currentVal = grid[i][j];
            
            const lesserMax = Math.min(currentRowMax, currentColMax);
            if (currentVal < lesserMax) {
                grid[i][j] = lesserMax;
                totalIncrease += (lesserMax - currentVal);
            }
        }
    }
    return totalIncrease;
};

var rowMax = function(row) {
    let max = 0;
    for(let i = 0; i < row.length; i++) {
        max = row[i] > max ? row[i] : max;
    }
    return max;
}

var colMax = function(grid, j) {
    let max = 0;
    for(let i=0; i<grid.length; i++) {
        max = max > grid[i][j] ? max : grid[i][j]
    }
    return max;
}


/**
 * @param {number[][]} grid
 * @return {number}
 * Solution #2 - actually gets us to O(n^2)
 */var maxIncreaseKeepingSkyline = function(grid) {
    const gridNumRows = grid.length;
    const gridNumColumns = grid[0].length;
    let rowMaxes = [];
    let colMaxes = [];
    for(let i = 0; i<gridNumRows; i++) {
        rowMaxes.push(rowMax(grid[i]));
    }
    console.log('row maxes: ', rowMaxes);
    for ( let j = 0; j<gridNumColumns; j++) {
        colMaxes.push(colMax(grid, j));
    }
    console.log('column maxes: ', colMaxes);
    for(let i = 0; i<gridNumRows; i++) {
        const currentRowMax = rowMaxes(i);
        for ( let j = 0; j<gridNumColumns; j++) {
            const currentColMax = colMaxes(j)
            const currentVal = grid[i][j];
            
            const lesserMax = Math.min(currentRowMax, currentColMax);
            if (currentVal < lesserMax) {
                grid[i][j] = lesserMax;
                totalIncrease += (lesserMax - currentVal);
            }
        }
    }
    return totalIncrease;
};