class Stack {
  constructor() {
    this.items = [];
  }
  push(element: T) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  clear() {
    this.items.length = 0;
  }
  size() {
    return this.items.length;
  }
}

const items = new WeakMap();

class WeakMapStack {
  constructor() {
    items.set(this, []);
  }

  push(element) {
    const temp = items.get(this);
    temp.push(element);
  }
  pop() {
    const temp = items.get(this);
    return temp.pop();
  }
  peek() {
    const temp = items.get(this);
    return temp[temp.length - 1];
  }
  isEmpty() {
    const temp = items.get(this);

    return temp.length === 0;
  }
  clear() {
    const temp = items.get(this);
    temp.length = 0;
  }
  size() {
    const temp = items.get(this);

    return temp.length;
  }
}

const Unique = (() => {
  const items = new WeakMap();

  return class Stack {
    constructor() {
      items.set(this, []);
    }
    push(element) {
      items.get(this)?.push(element);
    }

    pop() {
      return items.get(this)?.pop();
    }

    peek() {
      const stack = items.get(this);
      return stack ? stack[stack.length - 1] : undefined;
    }

    isEmpty() {
      return items.get(this)?.length === 0;
    }

    clear() {
      items.get(this)?.splice(0);
    }

    size() {
      return items.get(this)?.length ?? 0;
    }
  };
})();
