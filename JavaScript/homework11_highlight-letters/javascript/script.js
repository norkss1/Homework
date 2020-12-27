const buttonArr = document.querySelectorAll('.btn');
let currentBtn = buttonArr[0];


function press(event) {

    for (let i = 0; i < buttonArr.length; i++) {

        if (buttonArr[i] !== currentBtn) {
            currentBtn.style.backgroundColor = 'black'
        }
        if (event.code === 'Enter' || event.code === `Key${buttonArr[i].textContent}`) {

            buttonArr[i].style.backgroundColor = 'blue';
            currentBtn = buttonArr[i];
            return currentBtn;
        }
    }
}

document.addEventListener('keydown', function (event) {
    press(event);
});