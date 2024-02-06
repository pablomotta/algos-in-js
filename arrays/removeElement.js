/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    return {nums, val}
};

// Tests
const nums = [0,1,2,2,3,0,4,2], val = 2
console.log(removeElement(nums, val))