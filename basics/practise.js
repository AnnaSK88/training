//  All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function hL(str) {
    let arr = str
        .split(' ')
        .map(function(item) {
            return +item;
        })
    let b = Math.max.apply(null, arr)
    let c = Math.min.apply(null, arr)
    let d = `${b}` + ` ` + `${c}`

    return d;
}


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

console.log(hL('2 -4 4 55 689'))