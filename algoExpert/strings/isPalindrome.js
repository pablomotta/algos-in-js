const string = 'ababa';
const string2 = 'ababab';
function isPalindrome(string) {
	if (!string) {
		return false;
	}
	return string === string.split('').reverse().join('');
}

console.log('************************');
console.log(isPalindrome(string));
console.log(isPalindrome(string2));
console.log(isPalindrome());

function isPalindrome2(string) {
	if (!string) return false;
	let left = 0;
	let right = string.length - 1;
	while (left < right) {
		if (string[left] !== string[right]) {
			return false;
		}
		left++;
		right--;
	}
	return true;
}
console.log('************************');
console.log(isPalindrome2(string));
console.log(isPalindrome2(string2));
console.log(isPalindrome2());
console.log('************************');
