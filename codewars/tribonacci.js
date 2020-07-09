/*
https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
*/

function tribonacci(signature,n) {

  if (n === 0) {
    return []
  }

  if (n < 3) {
    return signature.slice(0,n)
  }

  for(let j = 0; j < n - 3; j++) {

    let tn = 0;
    for(let i = 0; i<3 ;i++) {
      tn += signature[(signature.length-1)-i]
    }

    signature.push(tn)

    }

    return signature

}


//tribonacci([7, 3, 2], 2)

tribonacci([1,1,1], 4)