"use strict";

// Ввод и проверка первого значения
let firstNum = prompt('Введите первое число:');
while (firstNum === '' || isNaN(firstNum)) {
    firstNum = prompt('Введите первое число:', firstNum);
};
firstNum = Number(firstNum);


// Ввод и проверка операции
let operation = prompt('Введите нужную операцию:');
while (operation === "") {
    operation = prompt('Введите нужную операцию:', operation);
}

// Ввод и проверка второго значения
let secondNum = prompt('Введите второе число:');
while (secondNum === '' || isNaN(secondNum)) {
    secondNum = prompt('Введите второе число:', secondNum);
};
secondNum = Number(secondNum);

// Вывод результата
console.log(computation(firstNum, operation, secondNum));

// Функция для подсчета введенных значений
function computation(leftOp, operation, rightOp) {

    switch (operation) {
        case '+':
            return leftOp + rightOp;

        case '-':
            return leftOp - rightOp;

        case '*':
            return leftOp * rightOp;

        case '/':
            return leftOp / rightOp;
    }

}