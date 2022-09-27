const numbers = [1, 3, 5, 4, 5, 7, 8, 9];

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
