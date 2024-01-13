/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1] && i !== 0) {
            console.log({
                curr: nums[i],
                prev: nums[i - 1]
            })
            if (count > maxCount) maxCount = count 
            count = 0
        }
        count++
    }
    return maxCount   
};

// const numsArr = [1,0,1,1,0,1]
// console.log('TEST 1:')
// console.log(findMaxConsecutiveOnes(numsArr))
// console.log('TEST 2:')
// const numsArr2 = [1,1,1,0,0,1,1,0,0,0,0,1]
// console.log(findMaxConsecutiveOnes(numsArr2))
console.log('TEST 3:')
const numsArr3 = [1,1,0,1]
console.log(findMaxConsecutiveOnes(numsArr3))