const arr = [10,17,3,43,22,99,11,3,4,8,12,45,532,-100,-1000,34,23,45,92];;

const getMax = (arr) => arr.reduce(
    (max, item) => max ? max < item ? item : max : item,
    undefined
)

console.log(getMax(arr));