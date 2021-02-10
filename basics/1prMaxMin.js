//  All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function hL(str) {
    let arr = str
        .split(' ')
        .map(i => +i)
    return Math.max(...arr) + ' ' + Math.min(...arr)
}

console.log(hL('3 5 55'))




//     const MaxMin = (str) => [...str.split(' ').map(i => +i).reduce((res, item) => {
//         res.max = res.max < item ? res.max : item;
//         res.min = res.min > item ? res.min : item;
//         return res;
//     }, { max: 0, min: 0 })].join(' ');
// }



// нахождение максимума
// function arrayMax(array) {
//     return array.reduce(function(p, v) {
//         return (p > v ? p : v); //eсли P больше V, то выводит Р иначе V
//     });
// }

// function arrayMin(array) { //функция нахождения минимума
//     return array.reduce(function(p, v) {
//         return (p < v ? p : v); //eсли P меньше V, то выводит Р иначе V
//     });
// }