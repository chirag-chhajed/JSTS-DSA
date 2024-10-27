class BinaryHeap {
  constructor() {
    this.list = [];
  }

  maxHeapify(arr, n, i) {
    let largest = i;
    const l = 2 * i + 1; //left child index;
    const r = 2 * i + 2; // right child index

    // if left child is smaller than root
    if (l < n && arr[l] > arr[largest]) {
      largest = l;
    }

    // if right child is smaller than smallest so far
    if (r < n && arr[r] > arr[largest]) {
      largest = r;
    }

    // If smallest is not root
    if (largest !== i) {
      const temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;

      //   Recursively heapfiy the affected sub-tree
      this.maxHeapify(arr, n, largest);
    }
  }

  insert(num) {
    const size = this.list.length;
    if (size === 0) {
      this.list.push(num);
    } else {
      this.list.push(num);
    }

    for (let i = Number.parseInt(this.list.length / 2 - 1); i >= 0; i--) {
      this.maxHeapify(this.list, this.list.length, i);
    }
  }

  delete(num) {
    const size = this.list.length;

    let i;

    for (i = 0; i < size; i++) {
      if (num === this.list[i]) {
        break;
      }
    }

    [this.list[i], this.list[size - 1]] = [this.list[size - 1], this.list[i]];

    this.list.splice(size - 1);

    for (let i = Number.parseInt(this.list.length / 2 - 1); i >= 0; i--) {
      this.maxHeapify(this.list, this.list.length, i);
    }
  }

  findMax() {
    return list[0];
  }

  deleteMax() {
    this.delete(list[0]);
  }

  extractMax() {
    const max = this.list[0];
    this.delete(max);
    return max;
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  getList() {
    return this.list;
  }
}
