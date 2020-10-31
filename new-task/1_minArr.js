// max and min
const arr = [10, 17, 3, 43, 22, 99, 11, 3, 4, 8, 12, 45, 532, -100, -1000, 34, 23, 45, 92];

//встроенный метод
console.log(Math.min(...arr))

// алгоритм
let min = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (min > arr[i])
        min = arr[i]
}
console.log(min)

//