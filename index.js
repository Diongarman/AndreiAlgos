const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  let {length} = array
  //init boundary
  let boundary = 0;

  let value;

  for (let i = 1; i < length; i++) {
    value = array[i]

    for (let j = i-1; j >= 0; j--) {
      let temp;

      if (array[j] > value) {
        temp = array[j]
        array[j+1] = temp
        array[j] = value
      } 
    }
  }
  
}

insertionSort(numbers);
console.log(numbers);

/*

Implemented using abstract explanation from: https://www.youtube.com/watch?v=i-SKeOcBwko

*/