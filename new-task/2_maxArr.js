const arr = [10, 17, 3, 43, 22, 99, 11, 3, 4, 8, 12, 45, 532, -100, -1000, 34, 23, 45, 92];

// встроенный метод
console.log(Math.max(...arr))

// алгоритм
let max = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (max < arr[i])
        max = arr[i]
}
console.log(max)

//let max = arr.forEach(number => number < arr[i] ? number = arr[i])
//console.log(arr[i])