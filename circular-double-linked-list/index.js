class CLLNode {
  constructor(element, next = null, prev = null) {
    this.element = element;
    this.next = next;
    this.prev = prev;
  }
}

class CircularLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
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

  append(element) {
    const newNode = new CLLNode(element);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.head.prev = this.tail;
    this.tail.next = this.head;
    this.length++;
  }

  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      const newNode = new CLLNode(element);
      let current = this.head;
      let previous;
      let index = 0;

      if (position === 0) {
        if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          newNode.next = current;
          current.prev = newNode;
          this.head = newNode;
        }
      } else if (position === this.length) {
        current = this.tail;
        current.next = newNode;
        this.head = newNode;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        newNode.next = current;
        previous.next = newNode;

        current.prev = newNode;
        newNode.prev = previous;
      }

      this.head.prev = this.tail;
      this.tail.next = this.head;

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

      if (this.head) {
        this.head.prev = this.tail;

        this.tail.next = this.head;
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

  getHead(element) {
    return this.head;
  }

  getTail(element) {
    return this.tail;
  }

  deleteHead() {
    this.removeAt(0);
  }

  deleteTail() {
    this.removeAt(this.length - 1);
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
}
