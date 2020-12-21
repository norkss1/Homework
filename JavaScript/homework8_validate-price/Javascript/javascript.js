let priceButtonId = document.getElementById('priceButtonId');
let pricePopUp = document.querySelector('.price-popUp');
let pricePopUpForm = document.querySelector('.price-popUp-form');
let pricePopUpBtn = document.querySelector('.price-popUp-btn');
let priceWarning = document.querySelector('.price-warning');


// Действия при фокусе на форму ввода
priceButtonId.addEventListener('focus', function () {
    priceButtonId.style.border = '3px solid #12d712'; // при фокусе на форму меняем цвет border
});

// Убираем фокус с формы и border теряет зеленый цвет
priceButtonId.addEventListener('blur', function () {

    if (parseInt(priceButtonId.value) > 0) {
        priceButtonId.style.border = '';
        priceWarning.style.display = 'none';
        pricePopUp.style.display = 'flex';
        pricePopUpForm.innerHTML = `Текущая цена: ${priceButtonId.value} грн.`; // добавляем текст в .price-popUp с ценой которая из формы
    } else {
        pricePopUp.style.display = 'none';
        priceButtonId.style.border = '3px solid #c30e0e';
        priceWarning.style.display = 'inline';
    }
});

// При клике на кнопку-крестик пропадает блок с ценой
pricePopUpBtn.addEventListener('click', function () {
    pricePopUp.style.display = 'none';
    priceButtonId.value = '';
});
