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
    return words.reduce((len, word) => len+=word.length, 0) / words.length;
}
const cleanText = cleanText(text);
console.log('length with spaces')
console.log(lenWithSpaces(clearText))
console.log('length without spaces')
console.log(lenWithoutSpaces(clearText))
console.log('words')
console.log(countWords(clearText))
console.log('word average len')
console.log(countAwerageWordLen(clearText))