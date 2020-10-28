const arr = [10,17,3,43,22,99,11,3,4,8,12,45,532,-100,-1000,34,23,45,92];;

const getMin = (arr) => arr.reduce(
    (min, item) => min ? min > item ? item : min : item,
    undefined
)

console.log(getMin(arr));