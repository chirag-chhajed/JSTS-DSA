const getRandom = (max, min = 1) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

class TreapNode {
  constructor(data) {
    this.data = data;
    this.priority = getRandom(100);
    this.left = null;
    this.right = null;
  }
}

class Treap {
  constructor() {
    this.root = null;
  }

  rotateLeft(root) {
    const R = root.right;
    const X = root.right.left;

    R.left = root;
    root.right = X;

    return R;
  }

  rotateRight(root) {
    const L = root.left;
    const Y = root.left.right;

    L.right = root;
    root.left = Y;

    return L;
  }

  insertNode(data) {
    const insertNodeHelper = (root, data) => {
      if (root === null) {
        return new TreapNode(data);
      }

      if (data < root.data) {
        root.left = insertNodeHelper(root.left, data);
        if (root.left !== null && root.left.priority > root.priority) {
          root = this.rotateRight(root);
        }
      } else {
        root.right = insertNodeHelper(root.right, data);
        if (root.right !== null && root.right.priority > root.priority) {
          root = this.rotateLeft(root);
        }
      }
      return root;
    };
    this.root = insertNodeHelper(this.root, data);
  }

  searchNode(key) {
    const searchNodeHelper = (root, key) => {
      if (root === null) {
        return false;
      }

      if (root.data === key) {
        return true;
      }

      if (key < root.data) {
        return searchNodeHelper(root.left, key);
      }

      return searchNodeHelper(root.right, key);
    };
    return searchNodeHelper(this.root, key);
  }

  deleteNode(key) {
    const deleteNodeHelper = (root, key) => {
      if (root === null) {
        return null;
      }

      if (key < root.data) {
        root.left = deleteNodeHelper(root.left, key);
      } else if (key > root.data) {
        root.right = deleteNodeHelper(root.right, key);
      } else {
        // If it's a leaf node
        if (root.left === null && root.right === null) {
          return null;
        }

        // If only one child exists
        if (root.left === null) {
          return root.right;
        }
        if (root.right === null) {
          return root.left;
        }

        // If both children exist, rotate based on priority
        if (root.left.priority < root.right.priority) {
          root = this.rotateLeft(root);
          root.left = deleteNodeHelper(root.left, key);
        } else {
          root = this.rotateRight(root);
          root.right = deleteNodeHelper(root.right, key);
        }
      }
      return root;
    };

    this.root = deleteNodeHelper(this.root, key);
  }

  printTreap() {
    const printTreapHelper = (root) => {
      if (root === null) {
        return;
      }
      printTreapHelper(root.right);
      console.log(`${root.data}(${root.priority})`);
      printTreapHelper(root.left);
    };
    printTreapHelper(this.root);
  }
}

const arr = [5, 2, 1, 4, 9, 8, 10];
const tre = new Treap();
let root;
for (const val of arr) {
  root = tre.insertNode(val);
}

tre.printTreap();
root = tre.deleteNode(1);
console.log(" ");
console.log(tre.searchNode(8));
console.log(" ");
tre.printTreap();
