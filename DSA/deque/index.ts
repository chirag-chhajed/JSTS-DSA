interface Foo {
  [key: number]: unknown;
}
class Deque<K> {
  count: number;
  lowestCount: number;
  items: Foo;

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  insertFront(element) {
    if (this.isEmpty()) {
      this.insertBack(element);
    } else if (this.lowestCount > 0) {
      this.items[--this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.items[0] = element;
    }
  }

  insertBack(element) {
    this.items[this.count++] = element;
  }

  removeFront() {
    if (this.isEmpty()) {
      return null;
    }

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return null;
    }

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  getFront() {
    //If empty then return null
    if (this.isEmpty()) {
      return null;
    }

    //Return first element
    return this.items[this.lowestCount];
  }

  //Peek the last element
  getBack() {
    //If empty then return null
    if (this.isEmpty()) {
      return null;
    }

    //Return first element
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

/** 
// Initial state
count = 0
lowestCount = 0
items = {}

// After insertBack(1)
count = 1          
lowestCount = 0    
items = {          
    0: 1
}

// After insertBack(2)
count = 2
lowestCount = 0
items = {
    0: 1,
    1: 2
}

// After insertFront(0)
count = 2
lowestCount = -1
items = {
    -1: 0,
    0: 1,
    1: 2
}

// After removeFront() - removes 0
count = 2
lowestCount = 0    // lowestCount increased
items = {
    0: 1,
    1: 2
}

// After removeBack() - removes 2
count = 1          // count decreased
lowestCount = 0
items = {
    0: 1
}
*/
