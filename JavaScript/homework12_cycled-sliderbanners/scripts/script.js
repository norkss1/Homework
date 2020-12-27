const imageOfGameArr = document.querySelectorAll('.image-to-show');
const buttonStop = document.getElementById('button-stop');
const buttonGo = document.getElementById('button-go');

let i = 0;

function startRunImg() {
    if (i <= 3) {
        imageOfGameArr[i].classList.remove('active');
        i++;

        if (i === 4) {
            i = 0;
            imageOfGameArr[i].classList.add('active');
        }
        imageOfGameArr[i].classList.add('active');
    }
}

let timerId = setInterval(startRunImg, 3000);

buttonStop.addEventListener('click',  function () {
    clearInterval(timerId);
});

buttonGo.addEventListener('click',  function () {
    timerId = setInterval(startRunImg, 3000);
});








