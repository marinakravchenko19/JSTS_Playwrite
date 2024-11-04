/**
Task 6*. Реалізуйте функцію findArrDiff(arr1, arr2), яка приймає числові масиви arr1, arr2 і повертає масив чисел, які не повторюються у вихідних масивах.
	
Приклад роботи:
console.log(difference([5, 10, 20], [0, 10, 20, 30]));		// ["5", "0", "30"]
 */

findArrDiff = (arr1 = [], arr2 = []) => {
    const combinedArray = arr1.concat(arr2);
    let resultArray = [];
    combinedArray.forEach(el => {
        if (combinedArray.indexOf(el) == combinedArray.lastIndexOf(el)) {
            resultArray.push(el);
        }
    });

    return resultArray;
}

console.log(findArrDiff([5, 10, 20], [0, 10, 20, 30]));
