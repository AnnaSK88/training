// В массиве arr поменять местами 5й и 10 элемент. Операции присваивания использовать запрещено.
const arr = [10, 17, 3, 43, 22, 99, 11, 3, 4, 8, 12, 45, 532, -100, -1000, 34, 23, 45, 92];

const swap = (arr, n1, n2) => {
    arr[n2] = arr[n2] + arr[n1];
    arr[n1] = arr[n2] - arr[n1];
    arr[n2] = arr[n2] - arr[n1];
    return arr;
}

console.log(arr);
console.log(swap(arr, 5, 10));

// создаем функцию swap,которая преобразует исходный М
// фунция присваивает новые значения индексам  и высчитываем матем способам:
// 1. присваиваем новое значение эленту М 
//    аrr[n2] = arr[n2] + arr[n1];
// 2.преобразуем первый элемент
//    arr[n1] = arr[n2] - arr[n1]= 
//            = arr[n2] + arr[n1] - arr[n1]=
//             = arr[n2]
// 3. преобразуем  второй элемент:
//    arr[n2] = arr[n2] - arr[n1]=
//            = arr[n2] - arr[n2] + arr[n1]=
//             = arr[n1]
// 4. возвращаем преобразованные данные в массив 
// 5. выводим в консоль функцию