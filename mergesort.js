function split(arr) {
  let mid = arr.length / 2;
  let firstHalf = arr.slice(0, mid);
  let secondHalf = arr.slice(mid);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let result = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  return result.concat(arr1, arr2);
}

function mergeSort(arr) {
  //basecase
  if (arr.length <= 1) return arr;

  let [left, right] = split(arr);
  return merge(mergeSort(left), mergeSort(right));
}
