// https://codingmiles.com/sorting-algorithms-insertion-sort-using-javascript/
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function fillArrayWithRandomNumbers(a, size) {
  for (let i = 0; i < size; i++) {
    a.push(getRandomInt(100));
  }
  return a;
}

function indexTracking() {
  let _highestVal = 0;
  let _unSortedIndex = 0;
  let _sortedIndexUT = 0;

  function setTopSortedIndex(x) {
    _highestVal = x;
  }

  function getTopSortedIndex() {
    return _highestVal;
  }

  function setTraverseSortedIndexUT(x) {
    _sortedIndexUT = x;
  }

  function getTraverseSortedIndexUT() {
    return _sortedIndexUT;
  }

  function getUnsortedIndex() {
    return _unSortedIndex;
  }

  function setUnsortedIndex(x) {
    _unSortedIndex = x;
  }

  return {
    setTopSortedIndex,
    getTopSortedIndex,
    getUnsortedIndex,
    setUnsortedIndex,
    getTraverseSortedIndexUT,
    setTraverseSortedIndexUT,
  };
}

function insertionSort(arrayUnderSort) {
  let indexTracker,
    unsortedIndex,
    tmpKeyValueUT,
    sortedIndexUT,
    copySortedIndexValueToRight;

  indexTracker = indexTracking();
  indexTracker.setUnsortedIndex(1);
  unsortedIndex = indexTracker.getUnsortedIndex();

  while (unsortedIndex < arrayUnderSort.length) {
    tmpKeyValueUT = arrayUnderSort[indexTracker.getUnsortedIndex()];
    indexTracker.setTopSortedIndex(unsortedIndex - 1);
    indexTracker.setTraverseSortedIndexUT(indexTracker.getTopSortedIndex());
    sortedIndexUT = indexTracker.getTopSortedIndex();
    while (
      sortedIndexUT >= 0 &&
      arrayUnderSort[indexTracker.getTraverseSortedIndexUT()] > tmpKeyValueUT
    ) {
      copySortedIndexValueToRight = indexTracker.getTraverseSortedIndexUT() + 1;
      arrayUnderSort[copySortedIndexValueToRight] =
        arrayUnderSort[sortedIndexUT];
      sortedIndexUT--;
      indexTracker.setTraverseSortedIndexUT(sortedIndexUT);
    }
    arrayUnderSort[indexTracker.getTraverseSortedIndexUT() + 1] = tmpKeyValueUT;
    unsortedIndex++;
    indexTracker.setUnsortedIndex(unsortedIndex);
    unsortedIndex = indexTracker.getUnsortedIndex();
  }
}

export {fillArrayWithRandomNumbers, getRandomInt, indexTracking, insertionSort};
