const arr = [10, 17, 3, 43, 22, 99, 11, 3, 4, 8, 12, 45, 532, -100, -1000, 34, 23, 45, 92];

let newMimArr = arr
    .sort((a, b) => a - b)
    .splice(0, 3)
console.log(newMimArr)



// найти 3 мин элемента массива
// применяем сортировку по возрастанию [
//   [-1000, -100,  3,   3,  4, 8,   10, 11...]
// удаляем первые три элемента из массива
// [ -1000, -100, 3 ]