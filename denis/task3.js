const string = 'asdfggfdsa';

isPolindrom = (string) => string.split('').reverse().join('') === string;

console.log(isPolindrom(string));


//найти Палиндром — это строка, 
//которая читается одинаково и вперед, и назад.

// 1. создаем ф-цию Палиндром для существующей строки
// 2. возращаем фунции  преобразованное след образом значение:
//   2.1 заданная строка будет преобразована в М (каждый буква станет отдельным элементом)
//   2.2 элементы полученного М поменяют порядок следование (первый станет последним и тд)
//   2.3 преобразованный М обьединит все элементы и выдаст строку
//   2.4 если преобразованная строка  равна заданной строке,
//       то это Да- Палиндром, 
//       иначе нет.
// 3. выводим в консоль результат ф-ции