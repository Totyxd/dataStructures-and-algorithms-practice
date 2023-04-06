class TreeNode {
    constructor(val) {
      this.value = val;
      this.left = null;
      this.right = null;
    };
};

const node4 = new TreeNode(4);
const node2 = new TreeNode(2);
const node6 = new TreeNode(6);
const node1 = new TreeNode(1);
const node3 = new TreeNode(3);
const node5 = new TreeNode(5);
const node7 = new TreeNode(7);

node4.left = node2;
node4.right = node6;
node2.left = node1;
node2.right = node3;
node6.left = node5;
node6.right = node7;


function findTreeVal(node, target) {
    if (!node) return false;

    if (node.value === target) return true;

    if(findTreeVal(node.left, target)) return true;

    return findTreeVal(node.right, target);
};

console.log(findTreeVal(node4, 8));


function preOrderTraversal(node) {      //Depth first traversal with recursion in pre-order.

    if (!node) return;

    console.log(node.value);

    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
};

preOrderTraversal(node4);

console.log("------------------------");
function inOrderTraversal(node) {      //Depth first traversal with recursion in-order.

    if (!node) return;

    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
};

inOrderTraversal(node4);
console.log("------------------");
function postOrderTraversal(node) {      //Depth first traversal with recursion in post-order.

    if (!node) return;

    postOrderTraversal(node.left);
    postOrderTraversal(node.right);

    console.log(node.value);
};

postOrderTraversal(node4);

console.log("---------------------------------------------------------");

function queueTraversal(node) {         //Breadth first traversal with iteration and a queue. Could be much more efficiente with a linked list.
    let queue = [node];

    while(queue.length > 0) {

        const shifted = queue.shift();
        console.log(shifted.value);
        if(shifted.left) queue.push(shifted.left);
        if (shifted.right) queue.push(shifted.right);
    };
};

queueTraversal(node4);

console.log("---------------------------------------------------------");

function treeBinarySearch(node, target) {

    if (!node) return -1;

    if (node.value === target) return node;

    if (target < node.value) {
        return treeBinarySearch(node.left, target);             //Recursive binary search in a BST.
    } else {
        return treeBinarySearch(node.right, target);
    };
};

console.log(treeBinarySearch(node4, 5));
//All the functions above this one, have O(n) time complexity. Only this last one has O(log n) complexity, fully leveraging
//the built BST.
