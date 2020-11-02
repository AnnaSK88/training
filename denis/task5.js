const input = 'hello world';
const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');

const crypt = (source, rot) => {
    return input.split('').reduce((result, item) => {
        const index = abc.indexOf(item);
        if (index !== -1) {
            result += index + rot > abc.length ? abc[index + rot - abc.length] : abc[index + rot]
            return result;
        }
        result += ' ';
        return result;
    }, '')
}

console.log(crypt(input, 1));


//Для произвольной строки реализовать алгоритм шифрования Цезаря
//1. создаем новую переменную строка,
//   присваиваем ей значение алфавита и преобразуем ее в массив

//2. создаем ф-цию с атрибутами source, rot

//   2.1 возвращаем в ф-цию исходную строку преобразованную в массив,
//    к-ая будет возращать значение:
//       2.1.1 присваем переменной значение равное индексу массива авс
//            - если этот индеск не совпадает с последним элементом массива, значит результатом будет
//             сумма, которая должна быть больше длинны массива abc()
//              result += index + rot > abc.length ? abc[index + rot - abc.length] : abc[index + rot]