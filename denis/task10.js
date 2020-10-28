//Для произвольного текста нам необходимо выполнить преобразование, нужно чтобы каждое второе слово в тексте было написано с большой буквы, слова меньше 3х символов при этом должны игнорироваться и при подсчете и при преобразовании.
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum sodales vestibulum. Fusce iaculis purus vel mauris suscipit dapibus. Aliquam ultrices sed justo non tincidunt. In lacus ligula, ullamcorper in sem in, venenatis euismod elit. In lacinia ex non eleifend vehicula. Sed vel magna enim. Vivamus tortor lorem, tempor eu venenatis a, rutrum a nulla. Phasellus vitae quam interdum.'

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const transformText = (text) => text.split(' ').filter(word => word.length > 2).map((word, ind) => ind % 2 === 1 ? word.capitalize() : word).join(' ');
console.log(transformText(text));