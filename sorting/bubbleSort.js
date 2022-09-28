const numbers = [2, 3, 5, 5, 6, 8, 9, 1];

// O(n^2) time, O(1) space
const bubbleSort = (array) => {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
			}
		}
	}
	return array;
};
console.log(bubbleSort(numbers));

// O(n^2) time, O(1) space
const recursiveBubbleSort = (array) => {
	let swaps = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] > array[i + 1]) {
			[array[i], array[i + 1]] = [array[i + 1], array[i]];
			swaps++;
		}
	}
	return swaps === 0 ? array : bubbleSort(array);
};

console.log(recursiveBubbleSort(numbers));
