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

//2. создаем ф-цию с атрибутами source, rot, к-рые
//   2.1 возвращаем в ф-цию исходную строку преобразованную в массив,
//    к-ая будет возращать значение, к-ое преобразовывается:
//       2.1.1