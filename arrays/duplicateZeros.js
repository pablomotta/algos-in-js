/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 * https://leetcode.com/problems/duplicate-zeros/description/
 */
const duplicateZeros = function(arr) {
    const length = new Array(arr.length)
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            // Insert a new 0 right after the current 0
            arr.splice(i, 0, 0);
            arr.pop()
        }
    }
    return arr
};

console.log(duplicateZeros([1,0,2,3,0,4,5,0]))