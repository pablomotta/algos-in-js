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
		const newNode = {
			value: value,
			next: null,
		};
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value) {
		const newNode = {
			value: value,
			next: null,
		};
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}
}

const myLinkedList = new LinkedList(10);

console.log(JSON.stringify(myLinkedList, null, 2));

myLinkedList.append(5);
myLinkedList.append(3);
myLinkedList.prepend(1);

console.log(JSON.stringify(myLinkedList, null, 2));
