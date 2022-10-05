/**
 * You are given a linked list where the node has two pointers. The first is the regular next pointer. T
 * he second pointer is called arbitrary_pointer and it can point to any node in the linked list.
 * Your job is to write code to make a deep copy of the given linked list.
 * Here, deep copy means that any operations on the original list
 * (inserting, modifying and removing) should not affect the copied list.
 *
 * Here’s an example of a linked list with arbitrary pointers connected.
 *
 * https://www.educative.io/m/copy-linked-list-with-arbitrary-pointer
 */

let deep_copy_arbitrary_pointer = function (head) {
	if (!head) {
		return null;
	}

	let current = head;
	let new_head = null;
	let new_prev = null;
	let ht = new Map();

	// create copy of the linked list, recording the corresponding
	// nodes in hashmap without updating arbitrary pointer
	while (current) {
		let new_node = new LinkedListNode(current.data);

		// copy the old arbitrary pointer in the new node
		new_node.arbitrary = current.arbitrary;

		if (new_prev) {
			new_prev.next = new_node;
		} else {
			new_head = new_node;
		}

		ht.set(current, new_node);
		new_prev = new_node;
		current = current.next;
	}

	let new_current = new_head;
	// updating arbitrary pointer
	while (new_current) {
		if (new_current.arbitrary) {
			let node = ht.get(new_current.arbitrary);
			new_current.arbitrary = node;
		}

		new_current = new_current.next;
	}

	return new_head;
};

let create_linked_list_with_arb_pointers = function (length) {
	let head = create_random_linked_list(length);
	let v = [];
	let temp = head;
	while (temp) {
		v.push(temp);
		temp = temp.next;
	}

	for (let i = 0; i < v.length; i++) {
		let j = Math.floor(Math.random() * (v.length - 1));
		let p = Math.floor(Math.random() * 100);
		if (p < 75) {
			v[i].arbitrary = v[j];
		}
	}
	return head;
};

let print_with_arb_pointers = function (head) {
	let printed_result = '';
	while (head) {
		let temp = '';
		if (head.arbitrary) {
			temp += head.arbitrary.data;
		}
		printed_result += ' (' + temp + '), ';
		head = head.next;
	}
	console.log(printed_result);
};

console.log('');
console.log('');
console.log('+++++++++++++++++++++++++++++++++++++++');
console.log('Deep Copy Arbitrary Pointers');
console.log('---------------------------------------');

let head = create_linked_list_with_arb_pointers(12);
print_with_arb_pointers(head);

let head2 = deep_copy_arbitrary_pointer(head);
print_with_arb_pointers(head2);
