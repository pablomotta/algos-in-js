/**
 *
 * Suppose we have coin denominations of [1, 2, 5] and the total amount is 7. We can make changes in the following 6 ways:
 *
 * Time = O(m×n)
 * Space = O(n)
 *
 * https://www.educative.io/m/coin-changing-problem
 */

let solveCoinChange = function (denominations, amount) {
	let solution = [];
	for (let i = 0; i < amount + 1; i++) {
		solution[i] = 0;
	}
	solution[0] = 1;
	for (let j = 0; j < denominations.length; j++) {
		for (let i = denominations[j]; i < amount + 1; i++) {
			solution[i] += solution[i - denominations[j]];
		}
	}
	return solution[solution.length - 1];
};

let denominations = [1, 2, 5];
let amount = 7;
let result = solveCoinChange(denominations, amount);
console.log(
	'solveCoinChange([' +
		String(denominations) +
		'], ' +
		String(amount) +
		') = ' +
		result
);
