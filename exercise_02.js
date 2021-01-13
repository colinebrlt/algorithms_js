const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return;
    }
    console.log(data);
    const list = data.split(" ").map(num => parseInt(num, 10))
    bubbleSort(list);
    insertionSort(list);
    mergeSort(list);
});