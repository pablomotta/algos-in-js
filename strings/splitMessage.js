const splitMessage = (message, size) => {
	const result = [];
	let startPointer = 0;
	let lastSpaceIndex = 0;
	if (message.length <= size) {
		result.push(message);
		return result;
	}
	while (lastSpaceIndex !== message.length) {
		for (let i = startPointer; i < size + startPointer; i++) {
			if (i < message.length && message[i] === ' ') {
				lastSpaceIndex = i;
			}
			if (i === message.length - 1) {
				lastSpaceIndex = message.length;
			}
		}
		let segment = message.slice(startPointer, lastSpaceIndex);
		result.push(segment);
		startPointer = lastSpaceIndex + 1;
	}

	return result;
};

console.log(
	splitMessage('Hi, welcome to MadHive! it is great to work with you!', 15)
);
