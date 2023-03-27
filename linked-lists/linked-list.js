class LinkedListNode {
  constructor(val, next) {
    this.value = val;
    this.next = next;
  };
};

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  };

  addToHead(val) {
    this.head = new LinkedListNode(val, this.head);
    this.length++;
  };

  addToTail(val) {
    const newNode = new LinkedListNode(val, null);
    if (!this.head) {
      this.head = newNode;
      this.length++;
      return;
    };

    let current = this.head;
    while(current) {
      if (!current.next) {
        current.next = newNode;
        break;
      };
      current = current.next;
    };

    this.length++;
  };

  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    };

    console.log("NULL");
  };
};

module.exports = LinkedList;
