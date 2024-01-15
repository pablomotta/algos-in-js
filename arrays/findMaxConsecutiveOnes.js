/**
 * @param {number[]} nums
 * @return {number}
https://leetcode.com/problems/max-consecutive-ones/description/
 */
function findMaxConsecutiveOnes(nums) {
    let count = 0;
    let maxCount = 0;

    for (let num of nums) {
        if (num === 1) {
            count += 1;
        } else {
            maxCount = Math.max(maxCount, count);
            count = 0;
        }
    }

    return Math.max(maxCount, count);
}

// const numsArr = [1,0,1,1,0,1]
// console.log('TEST 1:')
// console.log(findMaxConsecutiveOnes(numsArr))
// console.log('TEST 2:')
// const numsArr2 = [1,1,1,0,0,1,1,0,0,0,0,1]
// console.log(findMaxConsecutiveOnes(numsArr2))
console.log('TEST 3:')
const numsArr3 = [1,1,0,1]
console.log(findMaxConsecutiveOnes(numsArr3))