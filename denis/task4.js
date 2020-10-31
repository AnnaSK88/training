const brackets = '[{[]}]'
const opener = '[{"'
const closer = ']}"'

const isCorrect = (brackets) => {

    const o = [];
    const c = [];
    let broken;
    const arr = brackets.split('');

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const index = opener.indexOf(item);
        console.log(index);
        if (index != -1) {
            o.push(item);
            c.push(closer[index]);
            continue;
        }
        if (c.pop() !== item) {
            broken = true;
            break;
        }
        o.pop();
    }

    if (o.length || broken) return false;
    return true;
}

console.log(isCorrect(brackets));

//является ли строка корректной 
//в корректной строке каждой открывающей скобке должна соответствовать парная закрывающая

//1 создаем переменные строки, которые пок-т начало и конец строки

//2. ф-ция, проверяющая корректность строки:
//  2.1вводим переменные и присваиваем им значене массива,
//   имеющуюся строку также типиз-м в массив

//  2.2 для введеных данных вставляем условия  преобразования
//- пройдя цикл в консоль будет выведен индекс начала массива преобразованной строки