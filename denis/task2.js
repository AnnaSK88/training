const arr = [10, 17, 3, 43, 22, 99, 11, 3, 4, 8, 12, 45, 532, -100, -1000, 34, 23, 45, 92];;

const getMax = (arr) => arr.reduce(
    (max, item) => max ? max < item ? item : max : item,
    undefined
)

console.log(getMax(arr));

//найти макс элемент массива(М)
// 1 создаем новую ф-цию к сущ-му М

// 2 применим к М метод reduce(),
//   который возвратит ф-ции мак значение,пройдя по всем элементам М:
//   2.1 если макс значение (задается авто первому элементу М)
//   2.2 если зад-ое мак значение меньше следующего элемента М,
//     2.2.1 то этот элемент принимает значение максимума
//           и дальше происходит сравнение элементов М
//   2.3 иначе: НЕОПРЕДЕЛЕННО

//  3 выводим в консоль результаты ф-ции