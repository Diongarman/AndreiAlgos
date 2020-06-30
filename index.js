const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {

  let {length} = array


  for(let i = 0; i < length; i++ ) {

      let minimum = i;
      let temp = array[i];
      
      for(let j = i+1; j < length; j++ ) {
        if (array[j] < array[i]) {
   
          minimum = j
     
        }
    }

    array[i] = array[minimum];
    array[minimum] = temp
    
  }

  return array
  
}

selectionSort(numbers);