class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    };
  };

class BinarySearchTree {

    constructor(root = null) {
      this.root = root;
    };

    insert(val, node = this.root) {
      if (!this.root) {
        this.root = new TreeNode(val);
        return;
      };

      if (!node.left && node.val > val) {
        node.left = new TreeNode(val);
        return;
      };

      if (!node.right && node.val < val) {
        node.right = new TreeNode(val);
        return;
      };

      if (val < node.val) {           //Not considering if val is equal for simplification.
        this.insert(val, node.left);
      } else {
        this.insert(val, node.right);
      };
    };

    search(target, node = this.root) {
      if (!node) return false;

      if (node.val === target) return true;

      if (target < node.val) {
        return this.search(target, node.left);
      } else {
        return this.search(target, node.right);
      };
    };

    preOrderTraversal(node = this.root) {
      if (!node) return;

      console.log(node.val);

      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    };

    inOrderTraversal(node = this.root) {
      if (!node) return;

      this.inOrderTraversal(node.left);
      console.log(node.val);
      this.inOrderTraversal(node.right);
    };

    postOrderTraversal(node = this.root) {
      if (!node) return;

      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);

      console.log(node.val);
    };

    breadthFirstTraversal() {
      let queue = [this.root];

      while(queue.length > 0) {
        const shifted = queue.shift();
        console.log(shifted.val);
        if (shifted.left) queue.push(shifted.left);
        if (shifted.right) queue.push(shifted.right);
      };
    };

    depthFirstTraversal() {
      const stack = [this.root];

      while (stack.length > 0) {

        let node = stack.pop();
        console.log(node.val);

        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
      };
    };
  };

module.exports = { BinarySearchTree, TreeNode };
