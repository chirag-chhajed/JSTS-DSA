class LinkedListNode {
  constructor(element, next = null, prev = null) {
    this.element = element;
    this.next = next;
    this.prev = prev;
  }
}

export class DoubleLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  append(element) {
    const newNode = new LinkedListNode(element);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      // head -> A <- tail
      // newNode becomes both head and tail
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      // Before: head -> A <- tail
      // After:  head -> A <-> B <- tail
      // Links are properly set in both directions
    }
    this.length++;
  }

  insert(position, element) {
    if (position < 0 || pos > this.length) {
      return false;
    }

    const newNode = new LinkedListNode(element);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else if (position === 0) {
      newNode.next = this.head;
      this.head.next = newNode;
      this.head = newNode;
    } else if (position === this.length) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      /**
         Initial: A <-> B
              ^
           current (after loop)

        Step 1: Set newNode.next = current
        A <-> B 
        C -> B

        Step 2: Set newNode.prev = current.prev
        A <-> B
        A <- C -> B

        Step 3: Set current.prev.next = newNode
        A -> C -> B
        A <- C -> B

        Step 4: Set current.prev = newNode
        A -> C -> B
        A <- C <- B

        Final: A <-> C <-> B
         */
      let current = this.head;
      for (let i = 0; i < position; i++) {
        current = current.next;
      }
      newNode.next = current;
      newNode.prev = current.prev;

      current.prev.next = newNode;
      current.prev = newNode;
    }

    this.length++;
    return true;
  }

  remove(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }
    let removedNode;

    if (position === 0) {
      removedNode = this.head;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      /**
       Initial: A <-> B <-> C
        After:   B <-> C
       */
    } else if (position === this.length - 1) {
      /**
        Initial: A <-> B <-> C
        After:   A <-> B
         */
      removedNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      /**
        Initial: A <-> B <-> C
        Step 1: current.prev.next = current.next
        A -> C
        A <- B <-> C

        Step 2: current.next.prev = current.prev
        A -> C
        A <- C

        Final: A <-> C
         */
      let current = this.head;
      for (let i = 0; i < position; i++) {
        current = current.next;
      }
      removedNode = current;
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    this.length--;
    return removedNode.element;
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

  delete(element) {
    return this.remove(this.indexOf(element));
  }

  deleteHead() {
    this.remove(0);
  }

  deleteTail() {
    this.remove(this.length - 1);
  }

  toString() {
    let current = this.head;
    let string = "";

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

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }
}
