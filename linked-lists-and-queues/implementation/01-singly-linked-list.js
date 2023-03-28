// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val, next) {
        this.value = val;
        this.next = next;
    };
};

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    };

    addToHead(val) {
        this.head = new SinglyLinkedNode(val, this.head);
        this.length++;
        return this;

        // O(1) complexity, no iteration need.
    };

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val, null);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        };

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        };
        curr.next = newNode;

        this.length++;
        return this;

        //Time compl is O(n) because there's need to iterate all the way to the last element of the ll. Reason why arrays are mor efficient for this.
    };

    removeFromHead() {
        if (this.length === 0) return undefined;
        const removed = this.head;
        this.head = this.head.next;
        this.length--;
        return removed;

        //Constant time compl. Output time doesn´t vary since its indiferent to the length of ll.
    };

    removeFromTail() {
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            const rem = this.head;
            this.head = null;
            this.length--;
            return rem;
        };

        let curr = this.head;
        while (curr.next.next) {
            curr = curr.next;
        };

        const removed = curr.next;
        curr.next = null;
        this.length--;
        return removed;

        //Code compl is O(n) because time needed by algorithm will depend on the length of the ll. Can be improved with doubly ll and is done better by arrays.
    };

    peekAtHead() {
        if (this.head){
            return this.head.value;
        };
    };

    print() {
        if (!this.length) return;
        let current = this.head;

        while(current) {
            console.log(`${current.value}`);
            current = current.next;
        };

        console.log("NULL");
    };
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
