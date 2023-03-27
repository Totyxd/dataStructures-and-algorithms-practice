const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

const ll = new LinkedList();
const dll = new DoublyLinkedList();

//------Timing for addToHead in both lists -----------------//
const startTimeLL = Date.now();
ll.addToHead(15);
const endTimeLL = Date.now();
console.log(`Add to head in simply LL takes ${endTimeLL - startTimeLL}ms`);

const startTimeDLL = Date.now();
dll.addToHead(15);
const endTimeDLL = Date.now();
console.log(`Add to head in doubly LL takes ${endTimeDLL - startTimeDLL}ms`);

//------Timing for addToTail in both lists -----------------//
const startTimeLL2 = Date.now();
ll.addToTail(15);
const endTimeLL2 = Date.now();
console.log(`Add to head in simply LL takes ${endTimeLL2 - startTimeLL2}ms`);

const startTimeDLL2 = Date.now();
dll.addToTail(15);
const endTimeDLL2 = Date.now();
console.log(`Add to head in doubly LL takes ${endTimeDLL2 - startTimeDLL2}ms`);

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
