/* eslint-disable no-undef */
describe('Merge Sort', function(){
  describe('Split function', function(){
    it('is able to split an array into two halves', function(){
      expect(split([1])).toEqual([[],[1]]);
      expect(split([1,5,6,9,2,5,3,6])).toEqual([[1,5,6,9], [2,5,3,6]]);
      expect(split([1,5,6,9,2,5,3])).toEqual([[1,5,6], [9,2,5,3]])
    });
  })

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      expect(merge([1,2,3,4], ([5,6,7,8]))).toEqual([1,2,3,4,5,6,7,8]);
      expect(merge([5,6,7,8], ([1,2,3,4]))).toEqual([1,2,3,4,5,6,7,8]);
      expect(merge([1,5,7,11], ([2,4,10]))).toEqual([1,2,4,5,7,10,11]);
    });
  });


  describe('Merge Sort function', function(){
    it('handles an empty array', function() {
      expect(mergeSort([])).toEqual([]);
    });
    it('handles single item in an array', function() {
      expect(mergeSort(['one'])).toEqual(['one']);
      expect(mergeSort([1])).toEqual([1]);
    });
    it('handles multiple items in an array', function() {
      expect(mergeSort([12, 1, 5, 3, 20, 8])).toEqual([1, 3, 5, 8, 12, 20]);
      expect(mergeSort([1, 5, 8, 3, 2, 1])).toEqual([1, 1, 2, 3, 5, 8]);
    });
    it('sorts strings in alphabetical order', function() {
      expect(mergeSort(['ball', 'apple', 'dog', 'cat'])).toEqual([
        'apple',
        'ball',
        'cat',
        'dog'
      ]);
    });
  });

})
