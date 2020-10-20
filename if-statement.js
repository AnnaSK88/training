//исходное нечетабельное условие

// 1. if..else

//let fruit = "orange";
//if (fruit.length > 5) {
//   console.log("The fruit name has more than five characters.");
//The fruit name has more than five characters.
//} else {
//   console.log("The fruit name has five characters or less.");
// }

// 2   ?

let fruit = "orange";
let result = (fruit.length > 5) ? "more than five characters" :
    "five characters or less";
console.log(`The fruit name has ${result}.`)