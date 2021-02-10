//You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
//дан массив, который состоит из строк
// дано к- число, которое показывает количество последовательно обьединненных строк
// найти самую длинную последовательстьи вывести ее как строку

//разобрать код



function longestConsec(strarr, k) {

    let concarr = [];
    for (let i = 0; i < strarr.length - k + 1; i++) {
        concarr.push('');
        for (let j = i; j < i + k; j++) {
            concarr[i] += strarr[j];
        }
    }
    // 
    let max = concarr[0];

    for (let i = 1; i < concarr.length; i++) {
        if (concarr[i].length > max.length) {
            max = concarr[i];
        }
    }
    return maxmax ? max : ''
}
console.log(longestConsec(['one', 'two', 'three', 'four'], 2))