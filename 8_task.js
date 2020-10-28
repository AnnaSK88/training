const arr = [10, 17, 3, 43, 22, 99, 11, 3, 4, 8, 12, 45, 532, -100, -1000, 34, 23, 45, 92];
//Из массива arr удалить все отрицательные элементы;
// если сумма положительных делится на 2,то вывест и что масив четный,
// если нет то вывести что массив нечетный.

let arrPositiv = arr.filter(value => value >= 0)
    // [10, 17,  3, 43, 22,  99, 11, 3,  4,  8, 12, 45, 532, 34, 23, 45, 92]
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const summaPositiv = arrPositiv.reduce(reducer); //1003

if (summaPositiv % 2 == 0) {
    console.log("Массив четный");
} else {
    console.log("массив нечетный"); //массив будет нечетным
}