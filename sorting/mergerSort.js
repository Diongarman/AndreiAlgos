function mergeSortedArrays(arr1, arr2) {
  const output = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];

   


  if (arr1.length === 0) {
    return arr2
  }

  if (arr2.length === 0) {
    return arr1
  }

  let i = 1;
  let j = 1;
  while(arr1Item || arr2Item) {
    console.log(arr1Item , arr2Item)

    if (!arr2Item || arr1Item < arr2Item) {
      output.push(arr1Item)
      arr1Item = arr1[i]
      i++
      
    } else {
        output.push(arr2Item)
        arr2Item = arr2[j]
        j++   
    }
  }


  return output
}



mergeSortedArrays([0,3,4,31], [4,6,30,57,92,99]);
/*

edge cases
array sizes? Handle if different


iterate until shorter array is traversed
add tail of longer array to end of output array

steps

loop arrays
  
  arr1[i] > arr2[i]
    assign highest
    assign curr
    push curr

arr2[0] --> 
arr1[0] --> 

[0, ]

*/


