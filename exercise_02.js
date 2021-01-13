const hasWestView = (array) => {
  let numbers = [...array];
  let getsSun = 0;
  let currentMaxValue;
  let currentValue;
  
  for (let i = 0; i < numbers.length; i++) {
    currentMaxValue = true;
    currentValue = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] >= currentValue) {
        currentMaxValue = false;
        break;
      }
    }
    if (currentMaxValue) {
      getsSun++;
    }
  }
  return getsSun;
}

console.log(hasWestView([3, 7, 8, 3, 6, 1])); // should return 3
console.log(hasWestView([1, 4, 5, 8])); // should return 1

// const hasWestView = (array) => {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] > array[i]) {
//         i = j
//       }
//     }
//     count++;
//   }
//   return count
// }
// });