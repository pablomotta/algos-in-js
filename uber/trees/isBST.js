/**
 * Given a Binary Tree, figure out whether it’s a Binary Search Tree.
 * In a binary search tree, each node’s key value is smaller than the key value of all nodes in the right subtree,
 *  and are greater than the key values of all nodes in the left subtree i.e. L < N < RL<N<R.
 *
 * The runtime complexity of this solution is linear, O(n).
 *
 * The memory complexity of this solution is linear, O(n).
 *
 * educative.io/m/is-binary-tree-a-binary-search-tree
 *
 */

let is_bst_rec = function (root, min_value, max_value) {
	if (!root) {
		return true;
	}

	if (root.data < min_value || root.data > max_value) {
		return false;
	}

	return (
		is_bst_rec(root.left, min_value, root.data) &&
		is_bst_rec(root.right, root.data, max_value)
	);
};

let is_bst = function (root) {
	return is_bst_rec(root, -Number.MAX_VALUE - 1, Number.MAX_VALUE);
};

console.log('');
console.log('+++++++++++++++++++++++++++++++++++++++');
console.log('Is Binary Search Tree');
console.log('---------------------------------------');
let root = create_random_BST(15);
let root2 = create_random_BST(15);
root2.data = 100;

console.log('InOrder Traversal');
display_inorder(root);
let output = is_bst(root);
console.log('Is BST? ' + output);
console.log('');

console.log('InOrder Traversal');
display_inorder(root2);
let output1 = is_bst(root2);
console.log('Is BST? ' + output1);

console.log('++++++ Test Done Successfully ++++++');
