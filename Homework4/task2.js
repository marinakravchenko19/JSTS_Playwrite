/**Task 2. 
+Реалізуйте клас Student, конструктор якого приймає 2 параметри fullName – ім’я і прізвище студента, direction – напрямок, на якому він навчається.
+Створіть метод класу showFullName(), який повертає ім’я і прізвище студента.
+Створіть метод класу nameIncludes(data), який використовуючи метод showFullName() здійснює перевірку наявності в імені студента текстового аргумента data 
    і повертає відповідно true, якщо співпадіння знайдено чи false, якщо не знайдено.
+Створіть статичний метод класу studentBuilder(), який повертає новий екземпляр класу з іменем ‘Ihor Kohut’ і напрямком 'qc'.
+Створіть гетер і сетер direction() для вичитування і задання поля direction.
Створіть екземпляр класу stud1 з іменем 'Ivan Petrenko' і напрямком 'web'.
Створіть екземпляр класу stud2 з іменем 'Sergiy Koval' і напрямком 'python'.
Створіть екземпляр класу stud3 з іменем ‘Ihor Kohut’ і напрямком 'qc' за допомогою статичного методу studentBuilder().

Приклад застосування:
const stud1 = new Student('Ivan Petrenko', 'web');
stud1.nameIncludes('Ivan');   // true
stud1.nameIncludes('Denysenko'); // false
 */

class Student {
    #fullName;
    #direction;

    constructor(fullName, direction) {
        this.#fullName = fullName;
        this.#direction = direction;
    };
    get direction() {
        return this.#direction;
    }
    set direction(value) {
        this.#direction = value;
    }

    showFullName() {
        return this.#fullName;
    }

    nameIncludes(data) {
        return this.showFullName().toLowerCase().includes(data.toLowerCase())
    };

    static studentBuilder() {
        return new Student("Ihor Kohut", "qc");
    }
}

const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');
const stud3 = Student.studentBuilder();

console.log(stud1.nameIncludes('Ivan'));   // true
console.log(stud1.nameIncludes('Denysenko')); // false

stud2.direction = "Mathematics";
console.log(stud2);

console.log(stud3.direction);
