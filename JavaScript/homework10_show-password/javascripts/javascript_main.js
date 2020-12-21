let fasIcon = document.querySelectorAll('.fa-eye');
let input = document.querySelectorAll('.input');

// Функция отображения скрытого текста (пароля) вместо символов звездочки при нажатии на иконку глаза
function iconMouseDownFunc() {
    if (this.classList.contains('icon-password-1')) {
        input[0].type = 'text';
        this.classList.replace('fa-eye', 'fa-eye-slash')

    } else if (this.classList.contains('icon-password-2')) {
        input[1].type = 'text';
        this.classList.replace('fa-eye', 'fa-eye-slash')
    }
}

// Функция отображения символов звездочки вместо текста (пароля) при отпускании клавиши мыши с иконки глаза
function iconMouseUpFunc() {
    if (this.classList.contains('icon-password-1')) {
        input[0].type = 'password';
        this.classList.replace('fa-eye-slash', 'fa-eye')


    } else if (this.classList.contains('icon-password-2')) {
        input[1].type = 'password';
        this.classList.replace('fa-eye-slash', 'fa-eye')
    }
}

// Запуск цикла того чтобы словить на каком глазу произошло событие нажатия и отпускания кнопки мыши
fasIcon.forEach(function (icon) {
    icon.addEventListener('mousedown', iconMouseDownFunc);
    icon.addEventListener('mouseup', iconMouseUpFunc);
});


// Функция проверки значений в input
function checkValue() {
    let firstPassword = document.getElementById('firstPassword').value;
    let controlPassword = document.getElementById('controlPassword').value;

    if (firstPassword === controlPassword) {
        alert('You are welcome');
    } else {
        document.querySelector('.error').style.display = 'flex';
    }

    console.log(firstPassword)
    console.log(controlPassword)
}

// При click на кнопке и запуск проверки значений в input
document.querySelector('.btn').addEventListener('click', checkValue);

