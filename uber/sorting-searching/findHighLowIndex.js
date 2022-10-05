/**
 * https://www.educative.io/m/find-low-high-index
 *
 * Given a sorted array of integers, return the low and high index of the given key. You must return -1 if the indexes are not found.
 * 
 * The array length can be in the millions with many duplicates.
 * 
 * In the following example, according to the the key, the low and high indices would be:

key: 1, low = 0 and high = 0

key: 2, low = 1 and high = 1

key: 5, low = 2 and high = 9

key: 20, low = 10 and high = 10


 */

let findLowIndex = function (arr, key) {
	let low = 0;
	let high = arr.length - 1;
	let mid = Math.floor(high / 2);

	while (low <= high) {
		let mid_elem = arr[mid];

		if (mid_elem < key) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}

		mid = low + Math.floor((high - low) / 2);
	}

	if (low < arr.length && arr[high] === key) {
		return low;
	}

	return -1;
};

let findHighIndex = function (arr, key) {
	let low = 0;
	let high = arr.length - 1;
	let mid = Math.floor(high / 2);

	while (low <= high) {
		let mid_elem = arr[mid];

		if (mid_elem <= key) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}

		mid = low + Math.floor((high - low) / 2);
	}

	if (high === -1) {
		return high;
	}

	if (high < arr.length && arr[high] === key) {
		return high;
	}

	return -1;
};

let array = [
	1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6,
];

var key = 5;
console.log('Low Index of ' + key + ': ' + findLowIndex(array, key));
console.log('High Index of ' + key + ': ' + findHighIndex(array, key));

key = -2;
console.log('Low Index of ' + key + ': ' + findLowIndex(array, key));
console.log('High Index of ' + key + ': ' + findHighIndex(array, key));
