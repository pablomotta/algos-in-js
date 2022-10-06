// https://www.educative.io/m/sum-of-two-values

/**
 * Given an array of integers and a value, determine if there are any two integers in the array
 * whose sum is equal to the given value. Return true if the sum exists and return false if it does not.
 *
 * The runtime complexity of this solution is linear, O(n).
 *
 * The memory complexity of this solution is linear, O(n).
 */

let findSumOfTwo = function (array, val) {
	let foundValues = new Set();
	for (let item in array) {
		if (foundValues.has(val - array[item])) {
			return true;
		}

		foundValues.add(array[item]);
	}

	return false;
};

let v = [5, 7, 1, 2, 8, 4, 3];
let test = [3, 20, 1, 2, 7];

for (i = 0; i < test.length; i++) {
	let output = findSumOfTwo(v, test[i]);
	console.log('findSumOfTwo(v, ' + test[i] + ') = ' + output);
}
