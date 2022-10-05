/**
 * You are given a dictionary of words and a large input string.
 * You have to find out whether the input string can be completely segmented into the words of a given dictionary.
 * The following two examples elaborate on the problem further.
 *
 * https://www.educative.io/m/string-segmentation
 *
 *
 * Time = O(n^2)
 *
 * Memory = O(n^2)
 */

let canSegmentString = function (s, dictionary) {
	for (let i = 1; i < s.length + 1; i++) {
		let first = s.substr(0, i);
		if (dictionary.has(first)) {
			let second = s.substr(i);
			if (second.length === 0) {
				return true;
			}
			if (dictionary.has(second)) {
				return true;
			}
			if (canSegmentString(second, dictionary)) {
				return true;
			}
		}
	}
	return false;
};

let s = 'hellonow';
let dictionary = new Set(['hello', 'hello', 'on', 'now']);
if (canSegmentString(s, dictionary)) {
	console.log('String Can be Segmented');
} else {
	console.log('String Can NOT be Segmented');
}
