const { SinglyLinkedNode, SinglyLinkedList } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    enqueue(val) {
        let newNode = new SinglyLinkedNode(val, null);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            this.length++;
            return this.length;
        };

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        };
        curr.next = newNode;
        this.tail = newNode;

        this.length++;
        return this.length;
    };

    dequeue() {
        if (this.length === 0) return null;
        const removed = this.head;
        if (this.length === 1) this.tail = null;
        this.head = this.head.next;
        this.length--;
        return removed.value;
    };

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
