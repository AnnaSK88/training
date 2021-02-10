function divisors(integer) {
    let divs = [];
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            divs.push(i);
        }
    }
    // main number is number that has 0 divisors
    return divs.length > 0 ? divs : integer + ' is main';
}
console.log(divisors(7))

// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"