// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val, next) {
        this.value = val;
        this.next = next;
    };
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    };

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val, null);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length++;
        return this.head;
    };

    addToHead(val) {
        this.head = new SinglyLinkedList(val, this.head);
        this.length++;
    };

    listLength() {
        return this.length;

        //O(1) with some memory sacrifice. Other option would be O(n) going through each el of the ll, saving some memory.
    };

    sumOfNodes() {
        let node = this.head;
        let sum = 0;

        while(node) {
            sum += node.value;
            node = node.next;
        };

        return sum;
        //O(n) complexity. Only possible way to go through ever syngle el of the ll.
    };

    averageValue() {
        if (!this.length) return 0;
        return this.sumOfNodes() / this.length;
        //O(n).
    };

    findNthNode(n) {
        if (n === 0) return this.head;
        let node = this.head;
        let count = 0;

        while(node) {
            count++;
            node = node.next;
            if (count === n) return node;
        };
        //O(n) in worst case scenario, O(1) in best case.
    };

    findMid() {
        let half = this.length / 2;
        if (half % 1 !== 0) {
            half = Math.floor(half);
        } else {
            half -= 1;
        };
        let count = 0;
        let node = this.head;

        while(node) {
            count++;
            node = node.next;
            if (count === half) return node;
        };
    };

    reverse() {
        let prev = null;
        let current = this.head;

        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        };
        const newHead = prev;
        return new SinglyLinkedList(newHead);
    };

    reverseInPlace() {
        let prev = null;
        let current = this.head;

        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        };
        const newHead = prev;
        this.head = newHead;
    };
}

class DoublyLinkedNode {
    constructor(val, next, prev) {
        this.value = val;
        this.next = next;
        this.prev = prev;
    };
};

class DoublyLinkedList {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
        this.length = 0;
    };

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val, null, this.tail);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;

        return this.head;
    };

    findMid() {
        let half = this.length / 2;
        if (half % 1 !== 0) {
            half = Math.floor(half);
        } else {
            half -= 1;
        };
        let count = 0;
        let node = this.head;

        while(node) {
            count++;
            node = node.next;
            if (count === half) return node;
        };
    };

    reverse() {
        let current = this.head;
        let prev = null;

        while (current) {
            let next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        };

        return new DoublyLinkedList(prev, this.head);
    };

    reverseInPlace() {
        let current = this.head;
        let prev = null;

        while (current) {
            let next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        };
        this.tail = this.head;
        this.head = prev;
    };
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
