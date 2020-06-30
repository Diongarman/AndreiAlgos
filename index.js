const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {

  let {length} = array
  let minimum;
  let temp;
  let swapIndex

  for(let i = 0; i < length; i++ ) {
      for(let j = i+1; j < length; j++ ) {
        if (array[j] < array[i]) {
          minimum = array[j]
          swapIndex = j
     
        }
    }

    if (minimum !== null) {
      temp = array[i];
      array[i] = minimum;
      array[swapIndex] = temp
      minimum = null
    }
    
  }

  return array
  
}

selectionSort(numbers);