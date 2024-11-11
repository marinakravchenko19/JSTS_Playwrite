/**
 * У вас є кошик, представлений у вигляді масиву об'єктів товарів. Кожен об'єкт містить унікальний ідентифікатор, назву, ціну та кількість. 
 * Коли користувачі додають нові товари до свого кошика, вам може знадобитися оновити кількість існуючих товарів або додати нові товари, якщо вони ще не існують.
    Реалізуйте функцію updateCart(cart, newItem), яка отримує два параметри:
-	cart - масив об'єктів товарів у поточному кошику
-	newItem - об'єкт товару, що представляє товар, який користувач хоче додати або оновити в кошику.
Функція повинна:
-	перевірити, чи існує в кошику товар з таким самим ідентифікатором, що і newItem
-	якщо існує, збільшити кількість існуючого товару на кількість, вказану в newItem
-	якщо його не існує, додайте новий елемент до кошика
-	повертає оновлений масив кошика, не змінюючи оригінальний масив кошика.
 */

const cart = [
    { id: 1, name: "Laptop", price: 1200, quantity: 1 },
    { id: 2, name: "Smartphone", price: 800, quantity: 2 },
];

function updateCart(cart = [], newItem) {
    const tempCart = cart.map(item => ({ ...item }));
    const index = cart.findIndex(item => newItem.id === item.id);

    if (index < 0) {
        tempCart.push(newItem);
    }
    else {
        tempCart[index].quantity += newItem.quantity;
    }
    return tempCart;
};

console.log(
    updateCart(cart, { id: 2, name: "Smartphone", price: 800, quantity: 1 })
);

console.log(
    updateCart(cart, { id: 3, name: "Tablet", price: 600, quantity: 1 })
);