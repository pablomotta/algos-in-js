const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sortedSquaredArray = (array) => {
	let squaredArray = [];
	for (let i = 0; i < array.length; i++) {
		squaredArray.push(Math.pow(array[i], 2));
	}
	return squaredArray.sort((a, b) => a - b);
};

console.log(sortedSquaredArray(numbers));
