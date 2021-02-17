//2 Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa).
// Leave any incidence of c untouched.

// function switcheroo(x) {
//     return x.split("").map((el) => (el == 'a' || el == 'b') ? ('b' || 'a') : el).join('')
// } 
//не срабатывает мар, срабатывает лишь первое условие [ 'b', 'b', 'c' ]
//[ 'b', 'b', 'c', 'c', 'b', 'b' ]
//1. Какой метод использовать вместо мар



function switcheroo(x) {
    function isChange(el) {
        if (el = 'a') {
            return 'b'
        }
        if (el = 'b') {
            return 'a'
        }

    }
    return x.split("").filter(isChange).join(' ')
}



console.log(switcheroo('abc')) //bac
console.log(switcheroo('aaccbb')) //bbccaa