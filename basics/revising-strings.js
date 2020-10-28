// .replace  - позволяет заменить слова в строках
let pizza = 'Pizza is alright'
pizza = pizza.replace('alright', 'wonderful')
console.log(pizza) //Pizza is wonderful

// toLowerCase () и toUpperCase ()- изменяют регистр
console.log(pizza.toLowerCase()) //pizza is wonderful
console.log(pizza.toUpperCase()) //PIZZA IS WONDERFUL
console.log('hello' [1].toUpperCase()) //E

//поиск подстроки -substr,  c позиции - pos 
// 1 .indexOf (substr, pos)
console.log(pizza.indexOf('za', 0)) //3
    // 2 .includes (substr, pos) возвращает в true/false
console.log(pizza.includes('za', 0)) //true
console.log(pizza.includes('anf')) //false

// получение подстроки
// .slice(start [, end])
// Возвращает часть строки от startдо (но не включая) end.
console.log(pizza.slice(0, 8)) //Pizza is