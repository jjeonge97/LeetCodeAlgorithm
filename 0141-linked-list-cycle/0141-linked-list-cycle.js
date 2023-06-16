/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {    
    let list = head
    
    while(list && list.next) {
        head = head.next
        list = list.next.next
        
        if(head === list) return true;
    }
    
    return false;
    
};