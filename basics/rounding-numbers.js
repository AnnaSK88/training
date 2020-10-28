// округление 
// 1. Math.round - до ближайшего целого
let roundUp = 1.556;
console.log(Math.round(roundUp)) //2

// 2. Math.floor - в меньшую сторону
let roundUp1 = 1.789;
console.log(Math.floor(roundUp1)) //1

// Math.ceil - в большую сторону
let roundUp2 = -1.1;
console.log(Math.ceil(roundUp2)) //-1

// Math.trunc - удаляет все что после запятой
let roundUp3 = 3.945678;
console.log(Math.trunc(roundUp3)) //3

// toFixed()-окр. число до n цифр после точки и возвращает строку
let roundUp4 = 3.945678;
console.log(roundUp4.toFixed(3)) // "3.946"