// swap function helper

let swapCount = 0;
let comparisonCount = 0;

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const bubbleSort = array => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let j = 0; j < array.length; j++) {
      comparisonCount++;
      if (array[j + 1] < array[j]) {
        swap(array, j + 1, j);
        swapped = true;
        swapCount++;
      }
    }
    console.log(array);
  }
  console.log(swapCount);
  console.log(comparisonCount);
  return array;
};

bubbleSort([1,2,1,4,2,6])
