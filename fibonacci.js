// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
  //code here;

  if (n < 2) {
    return n
  }

  let a = 0;
  let b = 1;
  let temp;

  for (let i = 2; i <= n; i++) {
    temp = a + b
    a = b
    b = temp
  }
  return temp
}
fibonacciIterative(3);

function fibonacciRecursive(n) {
  //code here;
  if (n < 2) {
    return n
  }

  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
}

//fibonacciRecursive(3)
fibonacciIterative(10)