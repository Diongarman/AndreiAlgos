function reverse(str){
  str = str.split('')
  let output = [];
  for(let i = 0; i< str.length; i++){
    output[str.length - i] = str[i]
  }

  return output.join('')
}




console.log(reverse('Hello!'))