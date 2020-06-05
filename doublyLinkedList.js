class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
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

    //update LL object state

    this.head.prev = newNode
    this.head = newNode
    this.length++
     
     return this


  }
  append(value) {
    //Code here
    const newNode = new Node(value)

    //update Node object state
    newNode.prev = this.tail
    this.tail.next = newNode; 
    //update LL object state
    this.tail = newNode
    this.length++;

    return this
  }

  traverseToIndexFromTail(index) {
    let counter = this.length;
    let current = this.tail

    while (counter !== index){
      current = current.prev
      counter--
    }
    return current
  }

  traverseToIndex(index) {

    let counter = 0
    let current  = this.head

    // if (index <=0) {
    //   return current;
    // }

    while(counter !== index){
        current = current.next
        counter++
        }
    
    return current;

}

  remove(index) {

    if (index >= this.length || index < 0) {
      throw Error('Index provided is out of bounds')
    }


    if (index < 1) {
      this.head = this.head.next
      return this.printList()
    }
    
    let leader = this.traverseToIndex(index - 1);
    
    if(index === this.length - 1) {
      leader.next = null;
      this.tail = leader;
      
      return this.printList()
    }

    

    // if (index === 0) {
    //   this.head = this.head.next;
    //    return this.printList()
    // }

    
    let trailer = leader.next.next

    leader.next = trailer
    trailer.prev = leader
    this.length--

    return this.printList()
    
    
  }
  insert(i, value) {
    const newNode = new Node(value)

    if (i === 0) {
      this.prepend(value)
      return this.printList()
    }

    if (i >= this.length) {
      this.append(value)
      return this.printList()
    }

    let leader = this.traverseToIndex(i - 1)
    let trailer = leader.next
    leader.next = newNode
    newNode.next = trailer
    newNode.prev = leader
    trailer.prev = newNode
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
// myLinkedList.append(19);
myLinkedList.prepend(8)
myLinkedList.insert(2,17)
//8-17-10-5-16-19
myLinkedList.remove(0)

//8-17-10-16-19


