module.exports = () => {
    const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }

  const midIndex = array.length/2
  // Split Array in into right and left
  let left = array.slice(0, midIndex);
  let right = array.slice(midIndex, numbers.length);

  console.log('left: ', left)
  console.log('right: ', right)

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){

  let mergedArray = []

  const leftL = left.length;
  const rightL = right.length;
  

  let i = j = k = 0;

  while (i < leftL && j < rightL) {

    if (left[i] <= right[j]){
      mergedArray[k] = left[i]
      i++
    } else {
      mergedArray[k] = right[j]
      j++
    }
    k++
  }

  while(i < leftL) {
    mergedArray[k] = left[i]
    i++
    k++
  }

  while (j < rightL) {
    mergedArray[k] = right[j]
    j++
    k++
  }

  return mergedArray

}


const answer = mergeSort(numbers);
console.log(answer);
};