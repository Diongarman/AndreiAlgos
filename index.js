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

    while (true) {
      if (value < curr.value){
        if (!curr.left) {
          curr.left = newNode
          return this
        }
        curr = curr.left
      } else if (value > curr.value) {

        if (!curr.right) {
          curr.right = newNode
          return this
        }
        curr = curr.right
      } 
    }    
 
  }
  lookup(value){

    let curr = this.root

    if (!curr) {
      return null
    }

    while (curr) {
      if (value < curr.value){
        curr = curr.left
      } else if (value > curr.value) {
        curr = curr.right
      } else if (value === curr.value) {
        return curr
      }
    } 

    return false
  }
  remove(value) {

    let current = this.lookup(value)

    let rightSubTree = current.right;

    let leaf = rightSubTree;

    let prev;
    while (leaf.left) {
      prev = leaf
      leaf = leaf.left
    }


   
    prev.left = null

    leaf.left = current.left
    leaf.right = current.right
    
    

    return leaf

  }
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
tree.remove(9)

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}









