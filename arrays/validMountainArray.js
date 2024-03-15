/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
	if (arr.length < 3) return false;

	let i = 0;

	// Ascend to the peak
	while (i < arr.length - 1 && arr[i] < arr[i + 1]) {
		i++;
	}

	// Peak can't be the first or last
	if (i === 0 || i === arr.length - 1) return false;

	// Descend from the peak
	while (i < arr.length - 1 && arr[i] > arr[i + 1]) {
		i++;
	}

	// If we've successfully walked the whole array, i will be at the last index
	return i === arr.length - 1;
};
