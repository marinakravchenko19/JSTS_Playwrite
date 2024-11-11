/**
 * Task 1. Заданий об’єкт user, який представляє інформацію про користувача, включаючи його ім’я, контактні дані та адресу. 
 * Напишіть функцію gettUserInfo(obj), яка приймає цей об’єкт obj, як параметр і використовує деструктурування для отримання певних деталей. 
 * Функція повинна витягнути властивості firstName, lastName, email, phone та city з об’єкта і повернути новий об’єкт, що містить лише ці витягнуті властивості.
*/

const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    contact: {
        email: "john.doe@example.com",
        phone: "123-456-7890"
    },
    address: {
        city: "New York",
        country: "USA"
    }
};

getUserInfo = (obj) => {
    const {
        firstName: newfirstName,
        lastName: newLastName,
        age: newAge,
        contact: { email: newEmail, phoneNumber: newPhoneNumber },
        address: { city: newCity, country: newCountry }
    } = obj;

    return {
        firstN: newfirstName,
        lastN: newLastName,
        e: newEmail,
        phN: newPhoneNumber,
        cit: newCity
    };
}
const newUserInfo = getUserInfo(user);
console.log(`
    firstName: ${newUserInfo.firstN}
    lastName: ${newUserInfo.lastN}
    email: ${newUserInfo.e}
    phone: ${newUserInfo.phN}
    city: ${newUserInfo.cit}`); 