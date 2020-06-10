class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    if (this.isEmpty()) {
      return Error('Stack is empty')
    }

    return this.top.value
  }
  push(value){
    let node = new Node(value);
    if (this.length === 0) {
      this.top = node;
      this.bottom = node
    } else {
      let temp = this.top;
      this.top = node
      this.top.next = temp
    }

    this.length++
    return this
  }
  pop(){
    
    if (this.length === 1) {
      this.top = null;
      this.bottom = null
   
    } else {
      this.top = this.top.next
    }
    
    this.length--

  }
  isEmpty() {
    if(this.length === 0) {
      return true
    } else {
      return false
    }
  }
}

const myStack = new Stack();

myStack.push('google');
myStack.push('udemy');
myStack.push('pornhub');
// myStack.pop()
// myStack.pop()
// myStack.pop()
// myStack.peek()










//Discord
//Udemy
//google


