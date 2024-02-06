/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let writer = 0
    for (let reader = 0; reader < nums.length; reader++) {
        if (nums[reader] !== val) {
            nums[writer] = nums[reader]
            writer++ 
        }
    }
    return writer
};

// Tests
const nums = [0,1,2,2,3,0,4,2]
const val = 2
console.log(removeElement(nums, val))