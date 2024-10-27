class Node {
  constructor(element, next = null) {
    this.element = element;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(element) {
    const node = new Node(element);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  removeAt(pos) {
    if (pos < 0 || pos >= this.length) {
      return null;
    }

    let current = this.head;
    let previous = null;
    let index = 0;

    if (pos === 0) {
      this.head = current.next;
    } else {
      while (index < pos) {
        previous = current;
        current = current.next;
        index++;
      }
      previous.next = current.next;
    }
    this.length--;
    return current.element;
  }

  insertAt(pos, element) {
    if (pos < 0 || pos > this.length) {
      return false;
    }

    const node = new Node(element);
    let current = this.head;
    let previous = null;
    let index = 0;

    if (pos === 0) {
      node.next = current;
      this.head = node;
    } else {
      while (index < pos) {
        previous = current;
        current = current.next;
        index++;
      }
      node.next = current;
      previous.next = node;
    }
    this.length++;
    return true;
  }

  toString() {
    let string = "";
    let current = this.head;

    while (current) {
      string += current.element + (current.next ? "\n" : "");
      current = current.next;
    }

    return string;
  }
  toArray() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.element);
      current = current.next;
    }
    return arr;
  }
  indexOf(element) {
    let index = -1;
    let current = this.head;

    while (current) {
      if (element === current.element) {
        return ++index;
      }
      index++;
      current = current.next;
    }
    return index;
  }
  delete(element) {
    return this.removeAt(this.indexOf(element));
  }
  deleteHead() {
    if (!this.head) {
      return null;
    }
    const deleteHead = this.head;
    this.head = this.head.next;
    this.length--;
    return deleteHead.element;
  }
  deleteTail() {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      const deleteTail = this.head;
      this.head = null;
      this.length--;
      return deleteTail.element;
    }
    let current = this.head;
    let previous = null;

    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    this.length--;
    return current.element;
  }
  isPresent(element) {
    return this.indexOf(element) !== -1;
  }
  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }
  getHead() {
    return this.head;
  }
}
