class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function isPalindrome(head: ListNode | null): boolean{
    let fast = head;
    let slow = head;
    let firstPointer = head;
    while(fast && fast.next){
        slow = slow && slow.next;
        fast = fast.next.next;
    }

    const newBeginning = reverseLinkedList(slow);
    
    while(firstPointer)
    


}

function reverseLinkedList(head: ListNode | null): ListNode | null{
    let prev: ListNode | null = null
    while(head){
        let temp = head.next;
        head.next = prev
        prev = head;
        head = temp;
    }
    return prev;
}