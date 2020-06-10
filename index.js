class Stack {
  constructor(){
    this.array = []
  }
  peek() {
    if (this.isEmpty()) {
      return Error('Stack is empty, can not peek')
    }

    return this.array[this.array.length - 1]
  }
  push(value){

    this.array.push(value)
   
    return this.array
  }
  pop(){

    this.array.pop()
    return this.array

  }
  isEmpty() {
    if(this.array.length === 0) {
      return true
    } else {
      return false
    }
  }
}

const myStack = new Stack();

myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.pop()
myStack.pop()
myStack.pop()
// myStack.pop()
myStack.peek()










//Discord
//Udemy
//google


