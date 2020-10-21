//исходное нечетабельное условие

// 1. if..else

let fruit = "orange";
if (fruit.length > 5) {
    console.log("The fruit name has more than five characters.");

} else {
    console.log("The fruit name has five characters or less.");
}

// 2  Ternare op
let fruit = "orange";
let result = (fruit.length > 5) ? ("The fruit name has more than five characters.") :
    "five characters or less";
console.log(`The fruit name has ${result}.`)

// 3.Terna
let fruit = "orange";
let result = (fruit.length > 5) ? "The fruit name has more than five characters." :
    "The fruit name has five characters or less.";
console.log(result)

// 4. If but with early return
const analizeFruit = fruit => fruit.length > 5;
const prind = (fruit) => {
    if (analizeFruit(fruit)) {
        return "The fruit name has more than five characters."
    }
    return "The fruit name has five characters or less.";
}
console.log(prind(fruit));

// 5. Bad solution
// const moreThen5 = () => "The fruit name has more than five characters.";
// const lessThen5 = () => "The fruit name has five characters or less.";
// const analize = (fruit) => fruit.length > 5 ? moreThen5() : lessThen5();


//switch
// switch (fruit.length) {
//     case 5:
//         "The fruit name has more than five characters."
//         break;
//     case '15':
//     default

// }