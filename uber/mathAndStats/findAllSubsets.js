/**
 * We are given a set of integers and we have to find all the possible subsets of this set of integers.
 * The following example elaborates on this further.
 *
 * https://www.educative.io/m/find-all-subsets
 */

let get_bit = function (num, bit) {
	let temp = 1 << bit;
	temp = temp & num;
	if (temp === 0) {
		return 0;
	}

	return 1;
};

let get_all_subsets = function (v, sets) {
	let subsets_count = Math.pow(2, v.length);
	for (let i = 0; i < subsets_count; i++) {
		let st = new Set([]);
		for (let j = 0; j < v.length; j++) {
			if (get_bit(i, j) === 1) {
				st.add(v[j]);
			}
		}

		sets.push(st);
	}
};

console.log('');
console.log('');
console.log('+++++++++++++++++++++++++++++++++++++++');
console.log('Find All Subsets');
console.log('---------------------------------------');
let v = [8, 13, 3, 22, 17, 39, 87, 45, 36];
let subsets = [];
get_all_subsets(v, subsets);
console.log('****Total*****' + subsets.length);
