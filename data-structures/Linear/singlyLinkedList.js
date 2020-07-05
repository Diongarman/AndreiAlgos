// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };


class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    let curr = this.head

    let array = []
    while(curr) {
      array.push(curr.value)

      curr = curr.next
    }

    return array;
  }

  prepend(value) {

    let newNode = new Node(value)
    newNode.next = this.head

    //update object state
    this.head = newNode
    this.length++
     
     return this


  }
  append(value) {
    //Code here
    const newNode = new Node(value)

    this.tail.next = newNode; 

    //update object state
    this.tail = newNode
    this.length++;

    return this
  }

  traverseToIndex(index) {

    let counter = 0
    let current = this.head

    while(counter !== index){
      current = current.next
      counter++
    }

    return current;

}

  remove(index) {

    if (index >= this.length) {
      throw Error('Index provided is out of bounds')
    }

    let leader = this.traverseToIndex(index - 1);
    let trailer = leader.next.next

    leader.next = trailer
    this.length--

    return this.printList()
    
    
  }
  insert(i, value) {
    const newNode = new Node(value)

    if (i === 0) {
      this.prepend(value)
      return this.printList()
    }

    let leader = this.traverseToIndex(i - 1)
    let trailer = leader.next

    leader.next = newNode
    newNode.next = trailer
    this.length++

    return this.printList()
  }
}


// 1-->2-->3
// 7-->8-->69-->null
//insert(2,17)
// 7-->8-->17



//8-10-5-16-19
let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(19);
myLinkedList.prepend(8)
myLinkedList.insert(1,17)
//8-17-10-5-16-19
myLinkedList.remove(3)
//8-17-10-16-19