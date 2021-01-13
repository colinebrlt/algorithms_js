const hasWestView = (array) => {
  let numbers = [...array];
  let hasView = 0;
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
    if (currentMaxValue) hasView++;
  }
  return hasView;
}

console.log(hasWestView([3, 7, 8, 3, 6, 1]));
console.log(hasWestView([1, 4, 5, 8]));

