class List<K> {
  listSize: number;
  pos: number;
  items: K[];

  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.items = [];
  }

  append(element: K) {
    this.items[this.listSize++] = element;
  }
  find(element: K) {
    if (typeof element === "object" && element !== null) {
      for (let i = 0; i < this.listSize; i++) {
        if (
          Object.entries(this.items[i]).toString() ===
          Object.entries(element).toString()
        ) {
          return i;
        }
      }
    } else {
      for (let i = 0; i < this.listSize; i++) {
        if (this.items[i] === element) {
          return i;
        }
      }
    }
    return -1;
  }
  remove(element: K) {
    const index = this.find(element);

    if (index > -1) {
      this.items.splice(index, 1);
      --this.listSize;
      return true;
    }
    return false;
  }
  insert(element: K, after: K) {
    const insertPos = this.find(after);

    if (insertPos > -1) {
      this.items.splice(insertPos + 1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  }
  contains(element: K) {
    const index = this.find(element);
    return index > -1;
  }
  front() {
    this.pos = 0;
  }
  rear() {
    this.pos = this.listSize - 1;
  }
  prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  }
  next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  }
  currPost() {
    return this.pos;
  }
  getElement() {
    return this.items[this.pos];
  }
  size() {
    return this.listSize;
  }
  print() {
    return this.items.join(",");
  }
  clear() {
    this.listSize = 0;
    this.pos = 0;
    this.items = [];
  }
}
