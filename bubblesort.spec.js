/* eslint-disable no-undef */
describe('Bubble Sort', function() {
  describe('swap', function() {
    beforeEach(function() {
      spyOn(window, 'swap').and.callThrough();
    });

    it('should be called when sorting', function() {
      // replace swap with a spy
      // normally the spy is a fake function that doesn't
      // do anything

      bubbleSort([12, 1, 5, 3, 20, 8]);
      expect(swap).toHaveBeenCalled();
    });

    it('should be called 0 times if array is already sorted', function() {
      bubbleSort([1, 2, 3]);
      expect(swap.calls.count()).toEqual(0);
    });

    it('should be called once if there are two items in an array', function() {
      bubbleSort([3, 2]);
      expect(swap.calls.count()).toEqual(1);
    });

    it('should be called correct number of times with random tests', function() {
      bubbleSort([1, 5, 3, 12, 8, 20]);
      expect(swap.calls.count()).toEqual(2);
    });
    it('should be called correct number of times with random tests', function() {
      bubbleSort([1, 235, 3, 344, 7, 57, 685, 78, 745, 234, 1, 2, 67584753]);
      expect(swap.calls.count()).toEqual(30);
    });

  });

  describe('ascendingBubbleSort', function() {
    it('handles an empty array', function() {
      expect(bubbleSort([])).toEqual([]);
    });
    it('handles single item in an array', function() {
      expect(bubbleSort([1])).toEqual([1]);
      expect(bubbleSort(['one'])).toEqual(['one']);
    });
    it('handles multiple items in an array', function() {
      expect(bubbleSort([12, 1, 5, 3, 20, 8])).toEqual([1, 3, 5, 8, 12, 20]);
      expect(bubbleSort([1, 5, 8, 3, 2, 1])).toEqual([1, 1, 2, 3, 5, 8]);
    });
    it('sorts strings in alphabetical order', function() {
      expect(bubbleSort(['ball', 'apple', 'dog', 'cat'])).toEqual([
        'apple',
        'ball',
        'cat',
        'dog'
      ]);
    });
  });
});
