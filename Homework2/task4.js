/**
 * Task 4. Реалізуйте функцію getCircleLength(r), яка приймає параметр r -  радіус кола і обчислює його довжину. 
 * Передбачити припинення виконання програми і генерацію помилки у випадку, якщо функції передано не числовий або менший-рівний 0 параметр.
Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
    Приклад роботи:
getCircleLength(“five”); 	// “Incorrect radius - please, enter numeric value!”

 */

getCircleLength = (r) => {
    if ((r <= 0) || isNaN(+r)) {
        throw new TypeError("Incorrect radius - please, enter numeric value!");
    }
    return 2 * r * Math.PI;
};

getCircleLength("five");