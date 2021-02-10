//удаляем все гласные из предложения при помощи ф-ции

function disemvowel(str) {
    str = str.replace(/[AEOUIaeoui]/g, '')
    return str;
}

console.log(disemvowel("This website is for losers LOL!"))