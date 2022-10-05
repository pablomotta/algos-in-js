class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};
		this.tail = this.head;
		this.length = 1;
	}
	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}
	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}
	insert(index, value) {
		if (index >= this.length) {
			return this.append(value);
		}
		if (index === 0) {
			return this.prepend(value);
		}
		const newNode = new Node(value);
		const leadingNode = this.traverseToIndex(index - 1);
		const followingNode = leadingNode.next;
		leadingNode.next = newNode;
		newNode.next = followingNode;
		this.length++;
		return this.printList();
	}
	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = this.next;
			counter++;
		}
		return currentNode;
	}
}

const myLinkedList = new LinkedList(10);

console.log(JSON.stringify(myLinkedList, null, 2));

myLinkedList.append(5);
myLinkedList.append(3);
myLinkedList.prepend(1);
myLinkedList.insert(1, 5);

console.log(JSON.stringify(myLinkedList, null, 2));
console.log(myLinkedList.printList());
