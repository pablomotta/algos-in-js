/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 */
var findNumbers = function(nums) {
    let evenCount = 0
    for (let num of nums) {
        const numLength = num.toString().length
        if (numLength % 2 === 0) evenCount++
    }
    return evenCount
};

// Test 1: 
console.log(findNumbers([1,3,23,3,234,2342]))
// Test 2: 
console.log(findNumbers([1,3,3,3,4,2]))
// Test 3: 
console.log(findNumbers([14,3,23,3,234,2342]))