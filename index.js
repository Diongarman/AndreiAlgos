// const mergeSort = require('./sorting/mergeSort');
// mergeSort();

// const quickSort = require('./sorting/quickSort');
// quickSort();



// const {greatestNProducts, greatest4Products} = require('./adjacencyMatrix.js');



// greatestNProducts(m, 4)



//https://stackoverflow.com/questions/16631064/declare-multiple-module-exports-in-node-js



// const traversingBST = require('./Searching/binarySearchTree');
// traversingBST()



function tribonacci(signature,n) {

  if (n === 0) {
    return [];
  }

  if (n < 3) {
    return signature.slice(0,n)
  }

  /*generate sequences for n values > 3*/
  for(let j = 0; j < n - 3; j++) {

    let nextTribonacciEl = 0;
    /*create next element by summing previous three elements in the tribonacci sequence*/
    for(let i = 0; i<3 ;i++) {
      nextTribonacciEl += signature[(signature.length-1)-i];
    }

    signature.push(nextTribonacciEl);

    }

    return signature;

}


//tribonacci([7, 3, 2], 2)

tribonacci([1,1,1], 7)