
function press(event) {
    const buttonArr = document.querySelectorAll('.btn');
    for (let i = 0; i < buttonArr.length; i++) {
        if (buttonArr[i].innerHTML === event.key || buttonArr[i].innerHTML === event.key.toUpperCase()) {
            buttonArr[i].classList.add('active');
        } else {
            buttonArr[i].classList.remove('active');
        }
    }
}

document.addEventListener('keydown', function (event) {
    press(event);
});