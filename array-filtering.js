const numbers = [1, 2, 3, 4, 5, 6, 7]

//  МЕТОДЫ в массиве
// .splice - добавляет, удаляет,заменяет элементы
numbers.splice(1, 1, 34); // удаляем 2 и заменяем на 34
console.log(numbers); // выводим [1, 34, 3, 4,  5, 6,  7]


//. slice - возвращает новый массив, копирующий в него все элементы от индекса start до end(не включая end).
let arr = ['h', 'e', 'l', 'l', 'o']
console.log(arr.slice(1, 3)) //e,l (copy from 1 to 3)
console.log(arr.slice()); //копия массива ['h', 'e', 'l', 'l', 'o']

// .concat - создает новый массив: включает значения из др. массивов и доп. элементы.
console.log(numbers.concat([8, 9])); //[1, 34, 3, 4, 5, 6,  7, 8, 9]
console.log(arr.concat(['World!'])); //[ 'h', 'e', 'l', 'l', 'o', 'World!' ]

// Не сработал!!!
// let arrLike = {
//     0: 'and',
//     1: 'be happy',
//     [Symbol.isConcatSpreadable]: true,
//     lenght: 2
// };
//  console.log(arr.concat(arrLike));// 


// .filter - 
const defined = numbers.filter(
    function evenNumbers(number) {
        return number % 2 === 0 //остаток от деления на 2, четное 
    }
)
console.log(defined) //[ 2, 4, 6, 8, 10 ]