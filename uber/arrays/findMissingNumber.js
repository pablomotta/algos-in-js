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

let findMissing = function (input) {
	//  calculate sum of all integers
	//  in input list
	let actualSum = 0;
	for (let i in input) {
		actualSum += input[i];
	}
	let n = input.length;

	//find the sum of first n numbers using the arithmetic series sum formula,
	// i.e.,​ ​(n∗(n+1))/2
	let sumOfN = (n * (n + 1)) / 2;

	// The difference between sumOfN - actualSum, is the missing number in the array
	return sumOfN - actualSum;
};

let v = [0];
console.log('1. Original: ' + printArray(v));
let missingNumber = findMissing(v);
console.log('   The missing number is: ' + missingNumber);
console.log(
	'\n-----------------------------------------------------------------------------------------------------\n'
);
let v1 = [3, 7, 1, 2, 0, 4, 5];
console.log('2. Original: ' + printArray(v1));
let missingNumber1 = findMissing(v1);
console.log('   The missing number is: ' + missingNumber1);
console.log(
	'\n-----------------------------------------------------------------------------------------------------\n'
);
let v2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log('3. Original: ' + printArray(v2));
let missingNumber2 = findMissing(v2);
console.log('   The missing number is: ' + missingNumber2);
console.log(
	'\n-----------------------------------------------------------------------------------------------------\n'
);
