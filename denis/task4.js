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

//1 создаем переменные строки,в  которых кладем начало и конец строки

//2.