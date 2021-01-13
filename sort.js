const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return;
    }
    console.log(data);
    const unsortedList = data.split(" ").map(num => parseInt(num, 10))
    bubbleSort(unsortedList);
    insertionSort(unsortedList);
    mergeSort(unsortedList);
});

// TRI À BULLE

const bubbleSort = (array) => {
  let numbers = [...array];
  let count = 0
  for (let i = numbers.length - 1; i > 0; i--) {
      for (let x= 0; x < i; x++) {
          count++
          if (numbers[x + 1] < numbers[x]) {
              [numbers[x + 1], numbers[x]] = [numbers[x], numbers[x + 1]];
          };
      }
  }
  console.log(`1) Tri à bulle : ${count} comparaisons - [${numbers}]`);
}

// TRI PAR INSERTION

const insertionSort = (array) => {
  let numbers = [...array];
  let count = 0;
  for (let i = 1; i < numbers.length; i++) {
      let currentNumber = numbers[i];
      let x = i;
      while (x > 0 && numbers[x - 1] > currentNumber) {
          numbers[x] = numbers[x - 1];
          x -= 1;
          count++
      }
      numbers[x] = currentNumber;
  }
  console.log(`2) Tri par insertion : ${count} comparaisons - [${numbers}]`);
}

// TRI FUSION

const mergeSort = (array) => {
  let count = 0;
  let numbers = [...array];
  let middle;

  const merge = (left, right) => {
    let array = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        array.push(left.shift()); 
      } else {
        array.push(right.shift()); 
      }
    }
    return [...array, ...left, ...right];
  };

  const sortSplit = (numbers, middle = numbers.length / 2) => {
    count++;
    if (numbers.length < 2) return numbers;
    let left = numbers.splice(0, middle);
    return merge(sortSplit(left), sortSplit(numbers));
  };
  numbers = sortSplit(array, middle);
  console.log(`3) Tri fusion : ${count} comparaisons - [${numbers}]`);
}



