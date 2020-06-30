const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  let {length} = array

  let sorted = []
  sorted.push(array.shift())

  for (let i = 0; i < length - 1; i++ ) {
    
    for (let j = 0; j < sorted.length; j++) {
      if (array[i]< sorted[j]) {
        sorted.unshift(array[i])
        break
      } else if (array[i] > sorted[j] && array[i] < sorted[j+1]) {
        sorted.splice(j+1,0,array[i])
        break
      } else if (!sorted[j+1]) {
        sorted.push(array[i])
        break
      } 
      

    }
  }
  console.log(sorted)
  return sorted
}

insertionSort(numbers);
console.log(numbers);