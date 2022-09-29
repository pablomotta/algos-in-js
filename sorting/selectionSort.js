const numbers = [0, 5, 2, 3, 5, 6, 8, 9, 1, 3, 2];

const selectionSort = (array) => {
	for (let i = 0; i < array.length; i++) {
		let min = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}
		[array[i], array[min]] = [array[min], array[i]];
	}
	return array;
};

console.log(selectionSort(numbers));

// WIP
// const selectionSortRecursive = (array) => {
// 	let swap = false;
// 	let min = 0;
// 	let target = 0;
// 	for (let i = 0; i < array.length; i++) {
// 		if (array[i] > array[i + 1]) {
// 			target = i;
// 			min = [i + 1];
// 			swap = true;
// 		} else {
// 			swap = false;
// 		}
// 	}
// 	[array[target], array[min]] = [array[min], array[target]];
// 	return swap ? array : selectionSortRecursive(array);
// };

// console.log(selectionSortRecursive(numbers));
