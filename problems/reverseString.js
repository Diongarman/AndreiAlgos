function reverse(str){
  str = str.split('')
  let output = [];
  for(let i = 0; i< str.length; i++){
    output[str.length - i] = str[i]
  }

  return output.join('')
}




console.log(reverse('Hello!'))


//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {

  str = str.split('')

  if (str.length === 1) {
    
    return str
  }
  
  return str.pop() + reverseString(str.join(''))

}

// reverseString('yoyo mastery')
//should return: 'yretsam oyoy'


function reverseStringIterative(str) {

  str = str.split('')
  let ans = []

  for(let i = 0; i < str.length+1; i++) {
    // console.log(str[str.length -i])
    ans.push(str[str.length -i])
     
  } 
  return ans.join('')

}
reverseStringIterative('yoyo mastery')