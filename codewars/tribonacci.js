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

// function tribonacci(signature, n){
//   let newArr = [...signature]
 
//   for(let i = 2; i < n-1 ;i++){
//     newArr.push(newArr[i-2] + newArr[i-1] + newArr[i])
//   }
  
//   return newArr.slice(0,n)

// }


//tribonacci([7, 3, 2], 2)

tribonacci([1,1,1], 10)