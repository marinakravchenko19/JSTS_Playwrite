/**
Task 5. Реалізуйте функцію checkID(), яка пропонуватиме користувачу ввести власне ID. Валідні ID знаходяться в діапазоні від 1 до 1000.
Функція має генерувати в модальному вікні помилки у випадку, коли: 
    - юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your ID”), 
    - нечислове значення
    - ID знаходиться поза межами коректного діапазону.
Якщо ID валідне юзер отримує відповідне сповіщення.
В блокові catch передбачити виведення назви і опису помилки.
 */

checkID = () => {
    try {
        let userId = prompt("Please enter your ID");
        validateID(userId);
        alert("You've entered a valid ID!");
    } catch (error) {
        alert(`${error.name} happened: ${error.message}`);
    }

};

validateID = (id) => {
    if (id == null || id.trim().length == 0) {
        throw new TypeError("The field is empty! Please enter your ID!");
    }

    if (isNaN(+id)) {
        throw new TypeError("The field should be a numeric ID!");
    }

    if (!Number.isInteger(+id)) {
        throw new TypeError("ID cannot be a float number");
    }

    if (+id < 1 || +id > 1000) {
        throw new RangeError("It is not a valid ID!");
    }
}

checkID();