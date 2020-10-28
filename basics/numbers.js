const example = 123456789
console.log(example)

// запись больших чисел в js
let billion = 1e9;
let ms = 1e-6;
console.log(billion) //1000000000
console.log(ms) //0.000001

//Math.max(a, b, c...) / Math.min(a, b, c...)
console.log(Math.max(2, 3, 3, 5, -10, 0, 1)) //5
console.log(Math.min(2, 3, 3, 5, -10, 0, 1)) //-10

//Math.pow(n, power) число возводим в степень
console.log(Math.pow(2, 10)) //1024