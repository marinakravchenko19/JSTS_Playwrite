/**
 * Task 3. Реалізуйте функцію логування checkLogin(username, password), яка імітує перевірку імені користувача username та пароля password. 
 * Якщо надані облікові дані збігаються, вона повинна завершити роботу з привітальним повідомленням. Якщо вони не збігаються, вона повинна відхилити запит 
 * з повідомленням про помилку.
 * Функція повертає Promise, який завершується повідомленням «Welcome, username!», якщо ім'я користувача «admin» і пароль «qwerty123456».
 * Або відхиляється з повідомленням «Invalid username or password!», якщо облікові дані не збігаються. Час логування становить 2 сек.

Приклад застосування:
checkLogin("admin", "qwerty123456")
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
Вивід в консолі через 2 сек:
    Welcome, admin!
 */

function checkLogin(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "qwerty123456") {
                resolve(`Welcome, ${username}!`);
            }
            else {
                reject(new Error("Invalid username or password!"));
            }
        }, 2000)
    });
}

checkLogin("admin", "qwerty123456").then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error.message);
});

checkLogin("admin", "password").then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error.message);
});