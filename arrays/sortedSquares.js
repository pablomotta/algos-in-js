/**
 * @param {number[]} nums
 * @return {number[]}
 * https://leetcode.com/problems/squares-of-a-sorted-array/description/
 */
var sortedSquares = function(nums) {
    let squaredArr = []
    for (let num of nums) {
        const squaredNum = Math.pow(num, 2)
        squaredArr.push(squaredNum)
    }
    return squaredArr.sort((a, b) => a - b)
};

console.log(sortedSquares([-7,-3,2,3,11]))