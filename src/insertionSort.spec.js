import test from 'tape';
import {
  getRandomInt,
  fillArrayWithRandomNumbers,
  indexTracking,
  copyValueToRight
} from './insertionSort';

test('getRandomInt:: between 0 and 1000 to fill an array', t => {
  let actual, expected, obj;
  actual = getRandomInt(1000);
  t.ok(actual <= 1000 && actual >= 0, 'should be between 0 and 1000');
  t.end();
});

test('fillArrayWithRandomNumbers:: check params and returns', t => {
  let actual, expected, obj;
  let a = [];
  obj = fillArrayWithRandomNumbers(a, 4);
  actual = obj instanceof Array;
  expected = true;
  t.equals(actual, expected, 'expect actual to be instancof Array');
  actual = obj.length;
  expected = 4;
  t.equals(actual, expected, 'expect length to be 4');
  t.end();
});

test('indexTracking::returns object with getTopSortedIndex & setTopSortedIndex properties', t => {
  let actual, expected, obj;

  obj = indexTracking();
  actual = obj instanceof Object;
  expected = true;
  t.equal(actual, expected, 'expected indexTracking() to return an instanceof an Object ');

  actual = 'setTopSortedIndex' in obj && 'getTopSortedIndex' in obj;
  expected = true;
  t.equal(actual, expected, 'expect to find properties setTopSortedIndex & getTopSortedIndex in object');
  t.end();
});

test('indexTracking:: getTopSortedIndex works and original val. is set to 0, setTopSortedIndex uses arg sent, 5', t => {
  let actual, expected, obj;

  obj = indexTracking();
  actual = obj.getTopSortedIndex();
  expected = 0;
  t.equal(actual, expected, 'expect getTopSortedIndex to get initial value of 0');

  obj.setTopSortedIndex(5);
  actual = obj.getTopSortedIndex(5);
  expected = 5;
  t.equal(actual, expected, 'expect setTopSortedIndex to set as 5');
  t.end();
});

test('indexTracking:: getUnsortedIndex works and original val. is set to 0, setUnsortedIndex uses arg sent, 3', t => {
  let actual, expected, obj;

  obj = indexTracking();
  actual = obj.getUnsortedIndex();
  expected = 0;
  t.equal(actual, expected, 'expect getUnsortedIndex to get initial value of 0');

  obj.setUnsortedIndex(3);
  actual = obj.getUnsortedIndex();
  expected = 3;
  t.equal(actual, expected, 'expect getUnsortedIndex value to be 3');

  t.end();
});

test('indexTracking:: getDecreasingIndexOfSorted works and original val. is set to 0, setUnsortedIndex uses arg sent', t => {
  let actual, expected, obj;

  obj = indexTracking();
  actual = obj.getTraverseSortedIndexUT();
  expected = 0;
  t.equal(actual, expected, 'expect initial value to be 0');

  obj.setTraverseSortedIndexUT(5);
  actual = obj.getTraverseSortedIndexUT();
  expected = 5;
  t.equal(actual, expected, 'expect get value to be 3');

  t.end();
});
