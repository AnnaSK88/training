let pizzaToppings = ['tomato sauce', 'cheese', 'pepperoni'];
console.log(pizzaToppings) //'tomato sauce', 'cheese', 'pepperoni'
console.log(pizzaToppings.length) // 3 
console.log(pizzaToppings[2]) // pepperoni



// 1.методы для Концa массива
//1.1 удаляем и выводим последний элемент массива- pepperoni
console.log(pizzaToppings.pop()); //pepperoni

//1.2 добавляем новый элемент в конец массива
pizzaToppings.push('mayou');
console.log(pizzaToppings); //[ 'tomato sauce', 'cheese', 'mayou' ]

// 2. методы для начала массива
//2.1  удаляем первый элемент
console.log(pizzaToppings.shift()); //tomato sauce

//2.2 добавляем в начало массива новый   элемент - pesto
pizzaToppings.unshift('pesto');
console.log(pizzaToppings) //[ 'pesto', 'cheese', 'mayou' ]