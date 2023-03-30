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
var middleNode = function(head) {
    
     // return head.slice(Math.floor(head.length /2))
    
    // head = [1,2,3,4,5,6]
  const arr = [];
  let length = 0;
 // list = [1,2,3,4,5,6]
  while(head) {
    length++;
    arr.push(head)
    head = head.next;
  }
  // arr = [ [1,2,3,4,5,6], [2,3,4,5,6], [3,4,5,6], [4,5,6], [5,6], [6] ]
  return arr[Math.floor(length/2)] // [4,5,6]
};

// .next : 연결된 목록 노드 개체의 속성 
// val: 노드 값 보유 / next: 시퀀스의 다음 노드에 대한 참조 보유