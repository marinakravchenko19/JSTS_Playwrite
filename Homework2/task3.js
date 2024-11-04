/** 
Task 3. Реалізуйте функцію deleteItem(arr, item), яка приймає параметри arr - масив і item – елемент масиву. 
Функція має видаляти елемент item з масиву arr, і повертати вихідний масив, який не містить цього елемента.

Приклад роботи:
console.log(deleteItem([3, 12, 16, 19, 21, 33], 16));		// [3, 12, 19, 21, 33]
*/

deleteItem = (arr = [], item) => {
    arr.splice(arr.indexOf(item), 1); // modifies the original array
    return arr;
};

deleteItemAndReturnNewArray = (arr = [], item) => {
    return arr.toSpliced(arr.indexOf(item), 1); // creates a copy of array without modifying the original array
};

const array1 = [3, 12, 16, 19, 21, 33];
console.log("Original array " + array1);
deleteItem(array1, 16);
console.log("Original array after deleting " + array1);


const array2 = [4, 6, 8, 45, 98];
console.log("Original array2 " + array2);
const arrayWithDeletedItem = deleteItemAndReturnNewArray(array2, 45);
console.log("Original array2 after deleting element " + array2);
console.log("New array with deleted item " + arrayWithDeletedItem);