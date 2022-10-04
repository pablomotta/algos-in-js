class Node {
	constructor(name) {
		this.name = name;
		this.children = [];
	}

	addChild(name) {
		this.children.push(new Node(name));
		return this;
	}

	/**
	 * Time = O(v+e) where 'v' are the number of vertices in the graph and 'e' are the number of edges between the vertices.
	 * Space = O(v) where because we are storing an array of v number of nodes.
	 */
	breadthFirstSearch(array) {
		let queue = [this];
		while (queue.length > 0) {
			let current = queue.shift();
			array.push(current.name);
			for (const child of current.children) {
				queue.push(child);
			}
		}
		return array;
	}
}
