// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val, next, prev) {
        this.value = val;
        this.next = next;
        this.prev = prev;
    };
};

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    //All new methods for doubly ll's will hace O(1) time compl, but only sacrificing space efficiency, since we are creating a prev pointer for each new node ( O(n) ).
    addToHead(val) {
        const newNode = new DoublyLinkedNode(val, this.head, null);

        if (!this.head) {
          this.head = newNode;
          this.tail = this.head;
          this.length++;
          return this;
        };

        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    };

      addToTail(val) {
        const newNode = new DoublyLinkedNode(val, null, this.tail);

        if (!this.head) {
          this.head = newNode;
          this.tail = this.head;
          this.length++;
          return this;
        };

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
      };

      removeFromTail() {
        if (this.length === 0) return;
        if (this.length === 1) {
          const rem = this.tail;
          this.head = null;
          this.tail = null;
          this.length--;
          return rem.value;
        };

        const removed = this.tail;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
        this.length--;
        return removed.value;
      };

      removeFromHead() {
        if (this.length === 0) return;
        if (this.length === 1) {
          const rem = this.head;
          this.head = null;
          this.tail = null;
          this.length--;
          return rem.value;
        };

        const removed = this.head;
        this.head.next.prev = null;
        this.head = this.head.next;
        this.length--;
        return removed.value;
      };

      print() {
        let current = this.head;

        while (current) {
          process.stdout.write(`${current.value} <-> `);
          current = current.next;
        };

        console.log("NULL");
      };

      peekAtHead() {
        if (this.head) return this.head.value;
      };

      peekAtTail() {
        if (this.tail) return this.tail.value;
      };
};

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
};
