module.exports = () => {
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

//     9
//  4     20
//1  6  15  170

/*
DFS

inOrder -> [1,4,6,9,15,20,170]
K
preOrder --> [9,4,1,6,20,15,170]
  -useful for rebuilding tree

postOrder --> [1,6,4,15,170,20,9]
  -children first


*/
    _traverseInorder(node, list) {
      //recursion says - keep drilling down until reach leaf
      if(node.left) this._traverseInorder(node.left, list)
      list.push(node.value)
      if(node.right)this._traverseInorder(node.right, list)
      
      return `DFS inOrder: ${list}`
    }


    _traversePostorder(node, list) {
      if(node.left) this._traversePostorder(node.left, list);
      if(node.right) this._traversePostorder(node.right,list);
      list.push(node.value)

      return `DFS postOrder: ${list}`
    }


    _traversePreOrder(node, list){
      list.push(node.value)
      if(node.left) this._traversePreOrder(node.left,list)
      if(node.right) this._traversePreOrder(node.right,list)
      return `DFS preOrder: ${list}`
    }

    DFSInorder() {
      return this._traverseInorder(this.root,[])
    }
    DFSPostorder() {
      return this._traversePostorder(this.root,[])
    }

    DFSPreorder() { 
      return this._traversePreOrder(this.root,[])
    }

   breadthFirstSearchR(queue, list) {
     
     if(!queue.length) {
       return list
     }

    let currentNode = queue.shift();
    list.push(currentNode.value);
    if(currentNode.left){
        queue.push(currentNode.left);
      }

    if (currentNode.right) {
        queue.push(currentNode.right);
      }

      return this.breadthFirstSearchR(queue, list)
   }

  breadthFirstSearch() {
    let currentNode = this.root;

    let list = [];

    let queue = []

    //init queue
    queue.push(currentNode)

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);

      //BFS Con: if we had a really wide, say non-binary tree, the queue could take up a lot of memory
      if(currentNode.left){
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list
  }

  insert(value){
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          //Left
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          } 
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value){
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!
        
        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            
            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            
            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        
        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {
            
            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            
            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        
        //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
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
//tree.remove(170)
//console.log(JSON.stringify(traverse(tree.root)))

// console.log(tree.breadthFirstSearchR([tree.root], []))

console.log(tree.DFSPreorder())







function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

}










