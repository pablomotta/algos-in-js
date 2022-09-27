const numbers = [0, 1, 3, 5, 4, 0, 7, 8, 9];
// Time O(n) - Space O(n)
function firstRecurringChar(array) {
	const hashMap = new Map();
	for (let i = 0; i < array.length; i++) {
		if (hashMap.has(array[i])) {
			return array[i];
		}
		hashMap.set(array[i], i);
	}
	return undefined;
}

// returns 5
console.log(firstRecurringChar(numbers));

// Time O(n) - Space O(n)
function firstRecurringChar2(array) {
	const hashMap = {};
	for (let i = 0; i < array.length; i++) {
		if (hashMap[array[i]]) {
			return array[i];
		}
		hashMap[array[i]] = true;
	}
	return undefined;
}

console.log(firstRecurringChar2(numbers));
