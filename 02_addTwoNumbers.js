/**
 * 2. Add Two Numbers (Medium)
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    let l1Pointer = l1;
    let l2Pointer = l2;
    let sumLHead;
    let sumLPointer;
    let carry = 0;

    while (l1Pointer || l2Pointer) {
        const sum = (l1Pointer?.val || 0) + (l2Pointer?.val || 0) + carry;
        const sumNodeVal = sum % 10;
        if (sum > 9) carry = 1;
        else carry = 0;

        if (!sumLPointer) {
            sumLHead = new ListNode(sumNodeVal);
            sumLPointer = sumLHead;
        } else {
            sumLPointer.next = new ListNode(sumNodeVal);
            sumLPointer = sumLPointer.next;
        }

        l1Pointer = l1Pointer?.next;
        l2Pointer = l2Pointer?.next;
    }

    if (carry) sumLPointer.next = new ListNode(carry);

    return sumLHead;
};

// Tests

function createLinkedList(arr) {
    let linkedListHead, tailNode;

    arr.forEach((val) => {
        if (!linkedListHead) {
            linkedListHead = new ListNode(val);
            tailNode = linkedListHead;
        } else {
            tailNode.next = new ListNode(val);
            tailNode = tailNode.next;
        }
    });

    return linkedListHead;
}

console.log(
    JSON.stringify(
        addTwoNumbers(createLinkedList([2, 4, 3]), createLinkedList([5, 6, 4])),
        null,
        4
    )
); // [7,0,8]
console.log(
    JSON.stringify(
        addTwoNumbers(createLinkedList([0]), createLinkedList([0])),
        null,
        4
    )
); // [0]
console.log(
    JSON.stringify(
        addTwoNumbers(
            createLinkedList([9, 9, 9, 9, 9, 9, 9]),
            createLinkedList([9, 9, 9, 9])
        ),
        null,
        4
    )
); // [8,9,9,9,0,0,0,1]
