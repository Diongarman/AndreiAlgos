class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    let {length} = this.last;

    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop())
    }

    this.first.push(value)
    return this
  }

  dequeue() {
    let {length} = this.first;

    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop())
    }
    this.last.pop();
    return this
  }
  peek() {
    if (this.first.length > 0) {
      return this.first[0]
    }

    return this.last[this.last.length - 1]
  }
}

const myQueue = new CrazyQueue();
myQueue.peek();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.peek();
myQueue.dequeue();
myQueue.peek();
myQueue.dequeue();
myQueue.peek();
myQueue.dequeue();
