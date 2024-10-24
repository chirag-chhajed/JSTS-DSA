class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  insert(key) {
    const newNode = new BSTNode(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  search(key, node = this.root) {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return this.search(key, node.left);
    }
    if (key > node.key) {
      return this.search(key, node.right);
    }
    return true;
  }

  minNode(node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }

  min(node = this.root) {
    const minNode = this.minNode(node);
    return minNode ? minNode.key : null;
  }

  max(node = this.root) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // Case 1: Leaf node
      if (node.left === null && node.right === null) {
        return null;
      }

      // Case 2: Node with one child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      // Case 3: Node with two children
      const successor = this.minNode(node.right);
      node.key = successor.key;
      node.right = this.removeNode(node.right, successor.key);
      return node;
    }
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }
}

/**
Ah, I understand your confusion now! No, a BST doesn't need to fill the child nodes of the root first - it's not like a complete binary tree or a heap where we fill levels from left to right.

In a BST, the position of nodes is determined solely by their values, not by any requirement to fill levels. Let me show you the difference:

**What you were thinking (level-wise filling):**
```javascript
// If we had to fill root's children first
insert(8)
       8

insert(3)
       8
      /
     3

insert(10)
       8
      / \
     3   10

insert(1)  // would have to wait for level 2
       8
      / \
     3   10
    /
   1
```

**How BST actually works (value-based placement):**
```javascript
insert(8)
       8

insert(3)
       8
      /      // Goes left because 3 < 8
     3

insert(15)
       8
      / \    // Goes right because 15 > 8
     3   15

insert(1)
       8
      / \
     3   15  // Goes left of 3 because 1 < 3
    /
   1
```

Even if there's space at a higher level, new nodes will be placed based on their values:
```javascript
       8
      / \
     3   15
    /
   1

// If we insert(12), it goes to level 3 under 15
// even though level 2 has space
       8
      / \
     3   15
    /   /
   1   12
```

This value-based placement is what makes BSTs efficient for searching - you can eliminate half the remaining nodes at each step when looking for a value.
 */
