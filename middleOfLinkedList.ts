 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
}

function middleNode(head: ListNode | null): ListNode | null {
    let fast = head;
    let slow = head;
    while(fast && fast.next){
        if(slow) {
            slow = slow.next;
        }
        fast = fast.next.next;
    }
    return slow;
};