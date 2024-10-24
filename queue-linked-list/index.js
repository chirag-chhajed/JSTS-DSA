class LinkedListNode {
  constructor(element, next = null) {
    this.element = element;
    this.next = next;
  }
}

class QueueLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  enqueue(element) {
    const newNode = new LinkedListNode(element);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  dequeue() {
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
  front() {
    if (!this.head) return null;
    return this.head.element;
  }
  rear() {
    if (!this.head) return null;
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current.element;
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

/**
 * Tail pointer implementation
 * 
class Node {
    constructor(element, next = null) {
        this.element = element;
        this.next = next;
    }
}

class QueueLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;    // Add tail pointer
    }

    enqueue(element) {
        const newNode = new Node(element);
        
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;  // Add to tail
            this.tail = newNode;
        }
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        const removedElement = this.head.element;
        this.head = this.head.next;
        this.length--;

        // If queue becomes empty
        if (this.isEmpty()) {
            this.tail = null;
        }

        return removedElement;
    }

    front() {
        return this.head ? this.head.element : null;
    }

    rear() {
        return this.tail ? this.tail.element : null;
    }

    // Rest of your methods remain the same
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
        this.tail = null;
        this.length = 0;
    }
}
 */
