import { DoubleLinkedList } from "../doubly-linked-list/index";

export class DequeWithDLL {
  constructor() {
    this.dll = new DoubleLinkedList();
  }

  insertFront(element) {
    this.dll.append(element);
    return true;
  }

  insertBack(element) {
    const length = this.dll.size();
    this.dll.insert(length, element);
    return true;
  }

  removeBack() {
    return this.dll.deleteTail();
  }

  removeFront() {
    return this.dll.deleteHead();
  }

  getFront() {
    const head = this.dll.getHead();
    return head?.element;
  }

  getBack() {
    const tail = this.dll.getTail();
    return tail?.element;
  }

  isEmpty() {
    return this.dll.isEmpty();
  }

  size() {
    return this.dll.size();
  }

  clear() {
    this.dll = new DoubleLinkedList();
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    let current = this.dll.getHead();
    let objString = "";

    while (current) {
      objString = `${current.element} ${objString}`;
      current = current.next;
    }
    return objString.trim();
  }
}
