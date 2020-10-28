// Для произвольного теста:
// - посчитать статистику,
// - вывести количество символов в тексте с пробелами,
// - без пробелов,
// - количество слов в тексте, 
// -посчитать среднюю длину слова.

let p = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into electronic typesetting,
remaining essentially unchanged. It was popularised in the 1960s with the release of
Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

console.log(p.length) //574 количеством символов в строке c пробелами

let withoutSpace = p.split(' ').join('').length;
console.log(withoutSpace); //490 к-во символов в тексте без пробелов

let words = p.split(' ').length;
console.log(words); //85 количество слов в тексте

//  среднюю длину слова
let overageLenght = withoutSpace / words
console.log(overageLenght.toFixed(2)) // 5.76