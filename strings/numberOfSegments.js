const string = "Hello, it's very nice to meet you!";

const numberOfSegments = (string) => {
	let segments = 0;
	let pointer = 0;
	while (pointer < string.length) {
		let currentChar = string[pointer];
		if (currentChar === ' ') {
			segments++;
			for (let i = pointer + 1; i < string.length; i++) {
				let currentInnerChar = string[i];
				if (currentInnerChar === ' ') {
					pointer = i;
					break;
				}
				if (i === string.length - 1) {
					pointer = string.length;
				}
			}
		} else {
			pointer++;
		}
	}
	return segments;
};

console.log(numberOfSegments(string));
