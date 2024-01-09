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
// Approach 1
var middleNode = function (head) {
  let first = head;
  let sec = head;

  while (first != null && sec != null && sec.next != null) {
    first = first.next;
    sec = sec.next.next;
  }

  return first;
};
