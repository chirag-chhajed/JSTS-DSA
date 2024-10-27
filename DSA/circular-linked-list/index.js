class CLLNode {
  constructor(element, next = null) {
    this.element = element;
    this.next = next;
  }
}

class CircularLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(element) {
    const newNode = new CLLNode(element);
    let current;

    if (this.head === null) {
      this.head = newNode;
    } else {
      current = this.getElementAt(this.length - 1);
      current.next = newNode;
    }
    newNode.next = this.head;
    this.length++;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.length) {
      const newNode = new CLLNode(element);
      let current = this.head;

      if (index === 0) {
        if (this.head === null) {
          this.head = newNode;
          newNode.next = this.head;
        } else {
          newNode.next = current;
          current = this.getElementAt(this.length);
          this.head = newNode;
          current.next = this.head;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        newNode.next = previous.next;
        previous.next = newNode;
      }

      this.length++;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.length) {
      let current = this.head;

      if (index === 0) {
        if (this.length === 1) {
          this.head = undefined;
        } else {
          const removed = this.head;
          current = this.getElementAt(this.length - 1);
          this.head = this.head.next;
          current.next = this.head;
          current = removed;
        }
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    }
    return undefined;
  }

  indexOf(element) {
    let current = this.head;
    let index = -1;
    while (current) {
      if (element === current.element) {
        return ++index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  isPresent(element) {
    return this.indexOf(element) !== -1;
  }

  getHead() {
    return this.head;
  }

  deleteHead() {
    this.removeAt(0);
  }

  toString() {
    let current = this.head;
    let string = "";
    const temp = this.head.element;

    while (current) {
      if (temp === current.next.element) {
        string += current.element + (current.next ? "\n" : "");
        break;
      }
      string += current.element + (current.next ? "\n" : "");
      current = current.next;
    }
    return string;
  }

  toArray() {
    const arr = [];
    let current = this.head;
    const temp = this.head.element;

    while (current) {
      if (temp === current.next.element) {
        arr.push(current.element);
        break;
      }
      arr.push(current.element);
      current = current.next;
    }
    return arr;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.length) {
      let node = this.head;
      for (let i = 0; i < index && node !== null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }
}

/**
// Initial empty list
head = null
length = 0

// After append(1)
head → [1] → head
length = 1

// After append(2)
head → [1] → [2] → head
length = 2

// After append(3)
head → [1] → [2] → [3] → head
length = 3

// Insert(5, 1) - inserting 5 at index 1:
Before: head → [1] → [2] → [3] → head
After:  head → [1] → [5] → [2] → [3] → head

// Insert(0, 0) - inserting at beginning:
Before: head → [1] → [5] → [2] → [3] → head
After:  head → [0] → [1] → [5] → [2] → [3] → head

// removeAt(1) - removing element at index 1:
Before: head → [0] → [1] → [5] → [2] → [3] → head
After:  head → [0] → [5] → [2] → [3] → head

// removeAt(0) - removing first element:
Before: head → [0] → [5] → [2] → [3] → head
After:  head → [5] → [2] → [3] → head
 */
