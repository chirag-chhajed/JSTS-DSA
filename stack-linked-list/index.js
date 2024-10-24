class Node {
  constructor(element, next = null) {
    this.element = element;
    this.next = next;
  }
}

class StackLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  push(element) {
    const node = new Node(element);
    node.next = this.head;
    this.head = node;
    this.length++;
  }
  pop() {
    if (!this.head) return null;
    const popped = this.head.element;
    this.head = this.head.next;
    this.length--;
    return popped;
  }
  peek() {
    if (!this.head) return null;
    return this.head.element;
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
  size() {
    return this.length;
  }
  isEmpty() {
    return this.length === 0;
  }
  clear() {
    this.head = null;
    this.length = 0;
  }
}
