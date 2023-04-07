const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');


// Practice problems on binary trees

function findMinBST (rootNode) { //Just go all the way to the bottom left of the three. Same with max but to the rigth.
  let min = rootNode;

  while(min.left) {               //Complexity is the height of the BST => O(log n).
    min = min.left;
  };

  return min.val;
};

function findMaxBST (rootNode) {
  let max = rootNode;

  while(max.right) {
    max = max.right;
  };

  return max.val;
};

function findMinBT (node, min = node.val) {
  if (!node) return min;

  if (node.val < min) {
    min = node.val;
  };

  min = findMinBT(node.left, min);

  return findMinBT(node.right, min);
};

//Compl for finding max/min in a not sorted BT will be O(n), since we'll need to go through the entire tree.
function findMaxBT (node, max = node.val) {
  if (!node) return max;

  if (node.val > max) {
    max = node.val;
  };

  max = findMaxBT(node.left, max);

  return findMaxBT(node.right, max);
};

function getHeight (node) {
  if (!node) {
    return -1;
  } else {
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  };
};

function balancedTree (node) {
  if (!node) {
    return -1;
  } else {
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right)

    if (leftHeight - rightHeight >= 2) {
      return false;
    } else if (rightHeight - leftHeight >= 2) {
      return false;
    } else {
      return true;
    };
  };
};

function countNodes (node) {
  if (!node) return 0;

  return 1 + countNodes(node.left) + countNodes(node.right);
};

function getParentNode (node, target) {

  if (node.val === target) return null;

  while (node.left || node.right) {
    if (node.left && node.left.val === target || node.right && node.right.val === target) {
      return node;
    };

    if (target < node.val) {
      node = node.left;
    } else {
      node = node.right;
    }
  };

  return undefined;
};

function deleteNodeBST(rootNode, target) {
  let node = rootNode;
  let parent = null;

  // Traverse the tree to find the node and its parent
  while (node !== null) {
    if (target === node.val) {
      break;
    }
    parent = node;
    node = target < node.val ? node.left : node.right;
  }

  // If the target node wasn't found, return the original tree
  if (node === null) {
    return rootNode;
  }

  // Case 1: Node has no children
  if (node.left === null && node.right === null) {
    if (parent === null) {
      return null;
    }
    if (parent.left === node) {
      parent.left = null;
    } else {
      parent.right = null;
    }
    return rootNode;
  }

  // Case 2: Node has two children
  if (node.left !== null && node.right !== null) {
    let successorParent = node;
    let successor = node.right;
    while (successor.left !== null) {
      successorParent = successor;
      successor = successor.left;
    }
    node.val = successor.val;
    if (successorParent.left === successor) {
      successorParent.left = successor.right;
    } else {
      successorParent.right = successor.right;
    }
    return rootNode;
  }

  // Case 3: Node has one child
  let child = node.left !== null ? node.left : node.right;
  if (parent === null) {
    return child;
  }
  if (parent.left === node) {
    parent.left = child;
  } else {
    parent.right = child;
  }
  return rootNode;
};



    bstRoot = new TreeNode(4);
    bstRoot.left = new TreeNode(2);
    bstRoot.left.left = new TreeNode(1);
    bstRoot.left.right = new TreeNode(3);
    bstRoot.right = new TreeNode(6);
    bstRoot.right.left = new TreeNode(5);
    bstRoot.right.right = new TreeNode(7);

    console.log(getParentNode(bstRoot, 7));

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    deleteNodeBST
};
