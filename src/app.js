import {fillArrayWithRandomNumbers, insertionSort} from './insertionSort';

let arr = [];
let myArr = fillArrayWithRandomNumbers(arr, 12);
console.log(myArr);
insertionSort(myArr);
console.log(myArr);
