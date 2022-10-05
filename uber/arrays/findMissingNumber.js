/**
 * You are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’.
 * Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.
 *
 * https://www.educative.io/m/find-the-missing-number
 *
 * Time = Linear, O(n)
 *
 * Space = Constant, O(1)
 */

const array = [3, 0, 1];

// G sum formula
// O(n) time
// O(1) space
function findMissingNumberGSum(array) {
	const sumOfArrayItems = array.reduce(
		(partialSum, itemValue) => partialSum + itemValue,
		0
	);
	const gSum = (array.length * (array.length + 1)) / 2;
	return gSum - sumOfArrayItems;
}

console.log(findMissingNumberGSum(array));
