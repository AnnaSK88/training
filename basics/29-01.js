// 1 
// найти метод который возвращает число полученое делением первого на второго и округленный до десятых
// const solve = (x, y) => {
//     return (x / y).toFixed(1);
// }
// console.log(solve(5, 3))

//const solve1 = (x, y) => x / y

// 2 
//Завершите метод, который принимает логическое значение и возвращает "Yes"строку для trueили "No"строку для false.
// function boolToWord(bool) {
//     return bool ? 'Yes' : 'No';
//     if (bool === true) {
//         return "YES";
//     }
//     if (bool === false) {
//         return "NO"
//     }
//     return bool

// }
// //return bool ? 'Yes' : 'No';

// console.log(boolToWord(true))
// console.log(boolToWord(false))


// 3
//func будет принимать два списка целых чисел aи b. 
// Каждый список будет состоять из 3 пол-х целых чисел выше 0, представляющих размеры кубоидов aи b.
// Вы должны найти разницу объемов кубоидов независимо от того, какой из них больше.


// function findDifference(a, b) {

//     let c = a.reduce((x, y) => x * y)
//     let d = b.reduce((x, y) => x * y)

//     return (c > d) ? (c - d) : (d - c)
// }

// console.log(findDifference([2, 2, 3], [5, 4, 1]))


//4.
//Ваша задача - найти первый не последовательный элемент массива.
//Под непоследовательными мы подразумеваем не на 1 больше, чем предыдущий элемент массива.
//Например , если у нас есть массив [1,2,3,4,6,7,8]то выведет 6
//Если весь массив последовательный, верните null2 .
//function firstNonConsecutive(arr) {

function fin(a) {
    for (let i = 0; i < a.length; i++) {

        return (i > i + 1) ? i : null
    }
}
console.log(fin([1, 2, 3, 8, 6]))