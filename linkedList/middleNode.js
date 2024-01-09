/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let first = head;
  let sec = head;

  while (first != null && sec != null && sec.next != null) {
    first = first.next;
    sec = sec.next.next;
  }

  return first;
};

var middleNode2 = function (head) {
  let A = [head];
  while (A[A.length - 1].next != null) A.push(A[A.length - 1].next);
  return A[Math.trunc(A.length / 2)];
};
