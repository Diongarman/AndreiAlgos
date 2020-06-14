class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    let newNode = new Node(value)
    let curr = this.root
    if (!this.root) {
      this.root = newNode
      return this
    }

    while (curr.left || curr.right) {
      if (value < curr.left.value) {
        curr = curr.left
      } else if (value > curr.right.value) {
        curr = curr.right
      }
    }

    if (value < curr.value) {
        curr.left = newNode
      } else {
        curr.right = newNode
      }
    
    return this


  }
  lookup(value){
    //Code here
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}





