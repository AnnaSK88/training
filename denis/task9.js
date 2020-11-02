// Для произвольного теста нам нужно посчитать статистику, нужно вывести количество символов в тексте с пробелами, без пробелов, количество слов в тексте, посчитать среднюю длину слова.
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum sodales vestibulum. Fusce iaculis purus vel mauris suscipit dapibus. Aliquam ultrices sed justo non tincidunt. In lacus ligula, ullamcorper in sem in, venenatis euismod elit. In lacinia ex non eleifend vehicula. Sed vel magna enim. Vivamus tortor lorem, tempor eu venenatis a, rutrum a nulla. Phasellus vitae quam interdum.'

const cleanText = (text) => {
    let clearText = text.replace(/\./g, '');
    return clearText.replace(/\,/g, '');
}

const lenWithSpaces = (text) => text.length;
const lenWithoutSpaces = (text) => text.replace(/ /g, '').length;
const countWords = (text) => text.split(' ').length;
const countAwerageWordLen = (text) => {
    const words = text.split(' ');
    return words.reduce((len, word) => len += word.length, 0) / words.length;
}
const clearText = cleanText(text);

console.log('length with spaces')
console.log(lenWithSpaces(clearText))
console.log('length without spaces')
console.log(lenWithoutSpaces(clearText))
console.log('words')
console.log(countWords(clearText))
console.log('word average len')
console.log(countAwerageWordLen(clearText))

// консоль не работает
// выдает ошибку Identifier 'cleanText' has already been declared


//1. переменная типа строка с произвольным текстом
//2. вводим переменную cleanText, к-ая отраб-т ф-цию:
//   2.1 заменяет все точки и запятые на пустые строки

//3. вводим переменную, определяющая длину текста с пробелами
//   const lenWithSpaces = (text) => text.length;

//4. вводим переменную , опр длину текста БЕЗ пробелов
//   заданная ф-ция убирает пробелы, соединяя воедино текст 
//   const lenWithoutSpaces = (text) => text.replace(/ /g, '').length;

//5. вводим переменную с количеством слов, для этого
//  5.1 создаем ф-цию, к-ая преобразует текст в массив
//       и считаем кол-во элементов в нем
//   const countWords = (text) => text.split(' ').length;

// 6. расчет средней длины слова
//  6.1 создаем ф-цию, к-ая преобразует исходный текст
//     - перем-ной слова присваиваем значение теста, преоб-ого в массив
//     - возвращаем ф-ции значение, которое получено
//       вычислением сумма длины массива деленная на длину слова