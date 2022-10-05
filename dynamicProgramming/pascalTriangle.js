const numRows = 5;

/** Time = O(n^2) where the first n is the number of rows we need to generate
 * and the second n is the number of indexes we will have to visit in each row
 *  Space = O(n^2) where the we have to generate a list of lists (array of arrays)
 */
const generateTriangle = (numRows) => {
	console.log(numRows);
	const result = [];
	for (let i = 0; i < numRows; i++) {
		// looping through rows
		if (i === 0) {
			result.push([1]);
		}
		if (i === 1) {
			result.push([1, 1]);
		}
		if (i > 1) {
			const currentRow = [];
			for (let j = 0; j < i; j++) {
				// looping through indexes in arrays in the rows
				const firstIndex = j === 0; // if j is the first index of the row
				const lastIndex = j === i - 1; // if j is the last index of the row
				if (firstIndex || lastIndex) {
					currentRow.push(1);
				} else {
					const previousRow = result[i - 1]; // previous row is row i - 1
					const currentIndexValue =
						previousRow[j - 1] + previousRow[j];
					currentRow.push(currentIndexValue);
				}
			}
			result.push(currentRow);
		}
	}
	return result;
};

console.log(generateTriangle(numRows));

/**
 * input 5
 *
 * expects output:
 *
 *       [1],
 *      [1,1],
 *     [1,2,1],
 *    [1,3,3,1],
 *   [1,4,6,4,1]
 *
 * Base cases:
 * - if first row, it should return an array of [1],
 * - if second row, it should return an array of [1,1]
 * - if third row or larger, do the operation to find the additional numbers that row should contain.
 * - - the first and last index of third or more rows are to have the value of 1.
 *
 *
 * Number finding operations:
 * - Based on the amount of rows, every row increases the amount of indexes by one
 * - We know that besides the first and the last index of the row, the value of all other indexes will be the sum of the currentRow will be
 * the addition of the previousRow's [index - 1] + the previousRow's [index].
 *
 *
 *
 *
 */
