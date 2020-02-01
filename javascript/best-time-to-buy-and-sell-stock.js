/**
 * Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * 
 *

/**
 * 
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 * Note that you cannot sell a stock before you buy one.
 * 
 * task is basically: loop over the array, and for
 * each given price point, find the largest
 * difference from a value in the array _after_itself
 * 
 * Time complexity is going to be close to O(n^2) because
 * I am utilizing nested for loops, but it won't actually be
 * exponential because the inner loop range gets smaller as 
 * the outer loop progresses through its range (because the
 * trader cannot sell before buying).
 * 
 * 
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let currentMaxProfit = 0;
    for(let i=0; i<prices.length; i++) {
        for(let j=i+1; j<prices.length; j++){
            currentMaxProfit = (currentMaxProfit > (prices[j] - prices[i])) ? currentMaxProfit : prices[j] - prices[i];
        }
    }
    return currentMaxProfit;
};

