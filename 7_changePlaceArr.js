const arr = [10, 17, 3, 43, 22, 99, 11, 3, 4, 8, 12, 45, 532, -100, -1000, 34, 23, 45, 92];
// заменяем число 22=8 и обратно 
[arr[5], arr[10]] = [arr[10], arr[5]];
console.log(arr)

const swap = (arr, n1, n2) => {
    [arr[n1], arr[n2]] = [arr[n2], arr[n1]];
    return arr;
}