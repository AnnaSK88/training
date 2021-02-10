//возводим в квадрат каждое целое число и обьединяем


function squareDigits(num) {
    let mas = [];
    while (num > 0) {
        let ost = num % 10;
        mas.push(Math.pow(ost, 2));
        num = Math.trunc(num / 10);
    }
    return +mas.join('');
}
console.log(squareDigits(9119)); //811181



function squareD(num) {
    return Number(num.toString().split('').map(i => i * i).join(""));
}
console.log(squareD(9119)) //811181