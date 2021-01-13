const hasWestView = (array) => {
  let numbers = [...array];
  let getsSun = 0;
  let currentMaxValue;
  let currentValue;
  
  for (let i = 0; i < numbers.length; i++) {
    currentMaxValue = true;
    currentValue = numbers[i];

    let j = i + 1;
    while (currentMaxValue && j < numbers.length) {
      if (numbers[j] >= currentValue) {
        currentMaxValue = false;
        i = j - 1;
      }
      j++;
    }
    if (currentMaxValue) {
      getsSun++;
    }
  }
  return getsSun;
}

console.log(hasWestView([3, 7, 8, 3, 6, 1])); // should return 3
console.log(hasWestView([1, 4, 5, 8])); // should return 1

