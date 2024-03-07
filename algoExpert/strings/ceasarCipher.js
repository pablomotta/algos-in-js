function cesarCipherEncryptor(string, key) {
	const cipher = [];
	const lettersMap = new Map();
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	alphabet.forEach((letter, index) => {
		lettersMap.set(index, letter);
	});

	const stringArray = string.split('');

	for (let i = 0; i < stringArray.length; i++) {
		const element = stringArray[i];
	}

	return lettersMap;
}

console.log(caesarCipherEncryptor());

/**
 * key = 4
 *
 * 01234 -  length is 4 (5 - 1)
 * 0123 -  length is 3
 * 01234567 - length is 6
 *
 *
 *
 *  */
