//Для произвольного текста нам необходимо выполнить преобразование, нужно чтобы каждое второе слово в тексте было написано с большой буквы, слова меньше 3х символов при этом должны игнорироваться и при подсчете и при преобразовании.
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum sodales vestibulum. Fusce iaculis purus vel mauris suscipit dapibus. Aliquam ultrices sed justo non tincidunt. In lacus ligula, ullamcorper in sem in, venenatis euismod elit. In lacinia ex non eleifend vehicula. Sed vel magna enim. Vivamus tortor lorem, tempor eu venenatis a, rutrum a nulla. Phasellus vitae quam interdum.'

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const transformText = (text) => text.split(' ').filter(word => word.length > 2).map((word, ind) => ind % 2 === 1 ? word.capitalize() : word).join(' ');
console.log(transformText(text));

// 1. создаем переменную строку с именем текст

// 2. String.prototype.capitalize = создаем прототип строки: обект, 
//    (строки неизмяняемы и их невозможно внутри изменить)

// ???дальше в алгоритме смутило прототип и this!!!!!
// 3. задаем прототипу функцию,к-ая пройдется по всем элементам
//   3.1 начиная преобразование с первого элемента(символа)  приводим все к верхнему регистру
//   3.2 заменяя лишь элемент с 1 индекса

//4. создаем переменную transformText, 
//   к-ая преобразует сущ-щий тескт:
//   4.1 разделяя его на элементы массива,
//   4.2 применяется фильтр: оставляет элементы длинна,к-рых больше 2
//   4.3 выводим новый массив при условии
//        4.3.1 если элемент занимает нечет позицию, то применяем ф-цию 3
//              иначе слово остается неизменным
//   4.4 преоброзованный массив возвращаем к ввиду строки

//    5. выводим в консоль преобразование