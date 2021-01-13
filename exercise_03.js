const isSum = (numbers, target) => {
  let numbersToCompare = [];

  for (let i = 0; i < numbers.length; i++) {
    let remaining = target - numbers[i];
    if (numbers.includes(remaining)) {
      numbersToCompare.push([numbers[i], remaining]);
    }
  }
  return numbersToCompare.length > 0 ? true : false;
};

console.log(isSum([10, 15, 3, 7], 17));
console.log(isSum([1, 8, 10, 21], 21));
