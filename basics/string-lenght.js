// длина строки
const example = 'example string'
console.log(example.length) //14

// доступ к символам строки 2 способами
console.log(example[5]); //l
console.log(example[100]); // undefined

console.log(example.charAt(0)) //e
console.log(example.charAt(100)) // '' (an empty string)

// перебор символов for... of
for (let char of "Hello") {
    console.log(char); // H,e,l,l,o
}