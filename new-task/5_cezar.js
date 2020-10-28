//Для произвольной строки реализовать алгоритм шифрования Цезаря
//каждая буква текста сдвигается на +-n символов вправо/влево относительно своего положения в алфавите

let stroka = "never give up and you will succeed";
let alfabet = "abcdefghijklmnopqrstuvwxyz".split(""); //массив

function changeAlfabet(alfabet, n) {
    return alfabet.slice(3).concat(alfabet.slice(0, n));
}
//console.log(changeAlfabet(alfabet, -3));

console.log(stroka.split('').changeAlfabet(alfabet, -3))