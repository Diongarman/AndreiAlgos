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


  insert(i, value) {
    const newNode = new Node(value)


    if (i <= 1) {
      this.prepend(value)
      return this
    }


    let prev;
    let curr = this.head
   
    while(i-1>=1) {
      prev = curr
      curr = curr.next
      i--
    }
    prev.next = newNode
    prev.next.next = curr

    this.length++
    // console.log(prev)
    // console.log(curr)

    return this
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
myLinkedList.insert(2,17)
//8-17-10-5-16-19