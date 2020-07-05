class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {

    if(this.isEmpty()) {
      return null
    }
    return this.first
  }
  enqueue(value){
    let newNode = new Node(value)
    if (this.isEmpty()) {
      this.first = this.last = newNode;
      
     } else {
       this.last.next = newNode;
       this.last = this.last.next
     }


    this.length++
    return this



  }
  dequeue(){
    if(this.first === this.last) {
      this.first = null;
      this.last = null
     
    } else {
      const temp = this.first;
      this.first = this.first.next;
    }
    
    this.length--;
    return this

  }
  isEmpty() {
    if(this.length === 0) {
      return true
    } else {
      return false
    }
  }
}

const myQueue = new Queue();

myQueue.enqueue('Joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')
myQueue.enqueue('Samir')
// myQueue.dequeue()
// myQueue.dequeue()
// myQueue.dequeue()
// myQueue.dequeue()

// myQueue.peek()


//Joy
//Matt
//Pavel
//Samir

