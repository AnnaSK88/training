// Найти 3 минимальных элемента в массиве arr
const arr = [10,17,3,43,22,99,11,3,4,8,12,45,532,-100,-1000,34,23,45,92];
const get3Min = (arr) => arr.sort((a,b) => a - b).splice(0,3);

console.log(get3Min(arr));
