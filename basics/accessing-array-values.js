const food = ['apple', 'pizza', 'pear', 23, 56];
console.log(food[1]) //pizza

//перезапишем массив
food.length = 3; //укорачиваем до 3 элементов
console.log(food) //[ 'apple', 'pizza', 'pear' ]

// перебор элементов массива
// 1. for 
for (let i = 0; i < food.length; i++) {
    console.log(food[i]); // элемент М в отдельной строке
}

// 2 for ...of
for (let foods of food) {
    console.log(foods); // элемент М в отдельной строке
}
//3. метод forEach
food.forEach(Element => console.log(Element)) // элемент М в отдельной строке
food.forEach(console.log) // короткая форма