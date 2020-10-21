const people = [
    { name: 'Anna', age: '24', budget: 3000 },
    { name: 'Kate', age: '59', budget: 4900 },
    { name: 'Makle', age: '17', budget: 900 },
    { name: 'Dima', age: '38', budget: 3700 }
]

// итерирование обьекта:

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])//выводит весь массив
// }

// синтаксис Е6
// for (let person of people) {
//      console.log(person)//выводит весь массив
// }



// ForEach 
// .forEach(function(object, index, array)) - перебирает каждый элемент массива

// people.forEach(function(person, index, pArr) {
//     console.log(person) //выводит весь массив, синтаксис Е5
// })
// people.forEach(person => console.log(person))//стрелочная ф-ция,синтаксис Е6


//Map
// .map(function(object, index, array))создаем новые массивы и как рез-т заносим в новую переменную

// version E5
// const newPeople = people.map(person => {
// return person
// return 'Hello'// [ 'Hello', 'Hello', 'Hello', 'Hello' ]
//return person.name // [ 'Anna', 'Kate', 'Makle', 'Dima' ]
//return `${person.name} (${person.age})`//[ 'Anna (24)', 'Kate (59)', 'Makle (17)', 'Dima (38)' ]

// })
//console.log(newPeople) // в новый массив передали данные

// стрелочная функция
// const newPeople = people.map(person => `${person.name}(${person.age })`)
// console.log(newPeople)      


// Filter
//- .filter(function(object, index, array))фильтровали массив по исходному

// старый синтаксис Е5
// const adults = []
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adults.push(people[i])
//     }
// }
// console.log(adults)

// новый синтаксис Е6
// const adults = people.filter(person => {
// if (person.age >= 18) {
// return true
// }
// })
// console.log(adults)

// стрелочная функция Е6
// const adults = people.filter(person => person.age >= 18)
// console.log(adults)


//Reduce
//.reduce((total, integr obj), start)-для получения финального значения пройдя итерацию по массиву

// long version with for
// let amount = 0
// for (let i = 0; i < people.length; i++) {
// amount += people[i].budget
// }
// console.log(amount)

//short version with .reduce
// const amount = people.reduce((total, person) => {
//     return total + person.budget
// }, 0)
// console.log(amount)

// стрелочная функция Е6
const amount = people.reduce((total, person) => total + person.budget, 0)
console.log(amount) //12500

//Find
//поиск определенных элементов
const anna = people.find(person => person.name === "Anna")
console.log(anna) //{ name: 'Anna', age: '24', budget: 3000 }

// FindIndex
const annaIndex = people.findIndex(person => person.name === "Anna")
console.log(annaIndex) //0


// ================= we use a few methotds
// chain запись
const money = people
    .filter(person => person.budget > 3000)
    .map(person => {
        return {
            info: `${person.name}(${person.age})`,
            budget: Math.sqrt.person.budget
        }
    })
    .reduce((total, person) => total + person.budget, 0)

console.log(money)