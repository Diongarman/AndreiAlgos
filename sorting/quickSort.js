
/*
-in place
-Divide and Conquer
-recursive
-O(nlogn) average case
*/

module.exports = () => {

  const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

  function partition(array,l,h){
      if (!(numbers[numbers.length - 1] === Number.MAX_VALUE)) {
      numbers.push(Number.MAX_VALUE)
    }

    pivot = array[l];

    let i = l;
    let j = h;

    while(i < j) {
      do {
        i++
      } while( array[i] <= pivot);

      do {
        j--;
      } while(array[j] > pivot)

      if(i < j) {
        swap(array,i,j)
      }
    }
    swap(array, l, j)
      array.pop()
      return j
  }


  function swap(array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp
  }


  function quickSort(array, l, h){

      if (l < h){
        let j = partition(array,l,h)
        quickSort(array,l,j)
        quickSort(array,j+1,h)
      } 

      
     
  }

  //Select first and last index as 2nd and 3rd parameters
  quickSort(numbers, 0, numbers.length);
  console.log(numbers);
}