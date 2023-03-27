class DoublyLinkedListNode {
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

  addToHead(val) {
    const newNode = new DoublyLinkedListNode(val, this.head, null);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return;
    };

    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  };

  addToTail(val) {
    const newNode = new DoublyLinkedListNode(val, null, this.tail);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return;
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  };

  removeTail() {
    if (this.length === 0) return;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    };

    this.tail.prev.next = null;
    this.tail = this.tail.prev;
    this.length--;
  };

  removeHead() {
    if (this.length === 0) return;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    };

    this.head.next.prev = null;
    this.head = this.head.next;
    this.length--;
  };

  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    };

    console.log("NULL");
  };
};

let ll = new DoublyLinkedList();

module.exports = DoublyLinkedList;
