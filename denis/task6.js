// Найти 3 минимальных элемента в массиве arr
const arr = [10, 17, 3, 43, 22, 99, 11, 3, 4, 8, 12, 45, 532, -100, -1000, 34, 23, 45, 92];
const get3Min = (arr) => arr.sort((a, b) => a - b).splice(0, 3);

console.log(get3Min(arr));


//1. создаем ф-цию, в к-ой:
//   1.1 применяем к М сортировку по возрастанию [-1000, -100,  3,   3,  4, 8,   10, 11...]
//   1.2 возвращаем из ф-ции первые три элемента из результирующего М [ -1000, -100, 3 ]
//2. выводим в консоль полученную ф-цию