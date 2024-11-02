/**Task 1. Реалізуйте функцію processData(num1, num2, action), яка приймає числові параметри num1, num2 
і повертає результат їх обчислення в залежності від значення параметра action.
У випадку якщо:
-	action=”sum” функція має повернути суму
-	action=”product” функція має повернути добуток
-	action=”square” функція має повернути num1 в степені num2
За замовчуванням num1 і num2 рівні 0, а action ”sum”.
	
Приклад роботи:
console.log(processData(10, 4, ”product”));		// 40
 */

processData = (num1 = 0, num2 = 0, action = product) => {
    return action(num1, num2);
}

const sum = (a, b) => (a + b);
const product = (a, b) => (a * b);
const square = (a, b) => (Math.pow(a, b));

console.log("With default parameters");
console.log(processData());

console.log("Sum as an action");
console.log(processData(2, 3, sum));

console.log("Product as an action");
console.log(processData(2, 3, product));

console.log("Square as an action");
console.log(processData(2, 3, square));