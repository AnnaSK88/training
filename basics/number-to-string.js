// преобразование типов

//1 number to string
let n = 128;
n = n.toString();
console.log(n) //"128"
console.log(typeof n) // string

//2 parseInt -возвращает целое число
console.log(parseInt('100.345px')) // 100
console.log(parseInt('a123')) //Nan

//3 parseFloat - возвращает число с плавающей запятой
console.log(parseFloat('12.554em')) // 12.554