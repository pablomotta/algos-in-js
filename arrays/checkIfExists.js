/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function(arr) {
    const checkSet = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (checkSet.has(arr[i] * 2 )) {
            return true 
        }
        if (arr[i] % 2 === 0 && checkSet.has(arr[i] / 2)) {
            return true
        }
        checkSet.add(arr[i])
    }
    return false   
};

const arr = [10, 2, 5, 3];
console.log(checkIfExist(arr)); 