const isSum = (array, number) => {
  let numbers = [...array];
  let count = 0;
  let values = new Set();
  values.add(number - numbers[0]);
  for (let i = 1, length = numbers.length; i < length; i++) {
      count++;
      let value = number - numbers[i];
      if (values.has(numbers[i])) {
          return true;
      } else {
          values.add(value);
      }
  }
  return false;
};

console.log(isSum([10, 15, 3, 7], 17));
console.log(isSum([1, 8, 10, 21], 21));
