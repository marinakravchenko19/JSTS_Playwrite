/**
 * Task 2. Вам задано масив авто, і вам потрібно підрахувати, скільки разів кожне авто зустрічається у масиві. 
 * Використовуйте колекцію Map(), щоб зберігати кожне унікальне авто як ключ, а кількість його входжень - як значення.
 * Реалізуйте функцію countCars(cars), яка отримує на вхід масив автівок cars. 
 * Функція використовує Map() для підрахунку входжень кожного авто і повертає мапу з кожним авто та кількістю його входжень.
 */

const cars = ["BMW", "Opel", "Audi", "VW", "Toyota", "BMW", "VW", "Nissan", "BMW"];
console.log(countCars(cars).entries());

function countCars(cars = []) {
    const carsMap = new Map();
    cars.forEach((car) => {
        carsMap.set(car, cars.filter((c) => c == car).length)
    });

    return carsMap;
}