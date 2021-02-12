//Ваша задача - найти первый не последовательный элемент массива.
//Под непоследовательными мы подразумеваем не на 1 больше, чем предыдущий элемент массива.
//Например , если у нас есть массив [1,2,3,4,6,7,8]то выведет 6
//Если весь массив последовательный, верните null.


function fin(arr) {

    return arr.find((a, b) => (a !== b + 1) ? b : null);

}
console.log(fin([1, 2, 3, 8, 6])) //8
console.log(fin([1, 2, 3, 4, 5, 6])) //null должно быть а появляется undefined
console.log(fin([-3, -1, 0])) //-1

// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// 1 Can you write a solution that will return null for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )