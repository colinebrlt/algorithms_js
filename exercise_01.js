const isSum = (array, number) => {
  let numbers = [...array]

  for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
          if (numbers[i] + numbers[j] === number) return true;
      }
      return false
  }
}

console.log(isSum([10, 15, 3, 7], 17));
console.log(isSum([1, 8, 10, 21], 21));