//Палиндром — это строка, которая читается одинаково и вперед, и назад. 

const string = 'asdfggfdsa'

function palindrome(string) {
    let palin = string.split("").reverse().join("");

    if (palin === string) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome('asdfggfdsa')) //true