/**
Task 2.  Реалізуйте функцію findElem(arr, el), яка приймає параметри arr -   масив і el - елемент. 
Функція має визначити чи міститься елемент el в масиві arr, і повертати відповідне булеве значення.

Приклад роботи:
const arr = [1, 2, 3, 4, "Alex", 10, "Nick"];
console.log(findElem(arr, 7));		// false
console.log(findElem(arr, "Alex"));		// true
 */

findElem = (arr = [], el) => {
    return arr.includes(el);
}

const arr = [1, 2, 3, 4, "Alex", 10, "Nick"];
console.log(findElem(arr, 7));
console.log(findElem(arr, "Alex"));