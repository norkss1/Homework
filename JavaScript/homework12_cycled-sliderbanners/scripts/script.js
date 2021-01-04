const imageOfGameArr = document.querySelectorAll('.image-to-show');
const buttonStop = document.getElementById('button-stop');
const buttonGo = document.getElementById('button-go');

let currentTimeSlide = 0;
let checkRunSlider;

function startRunImg() {
    if (currentTimeSlide <= 3) {
        imageOfGameArr[currentTimeSlide].classList.remove('active');
        currentTimeSlide++;

        if (currentTimeSlide === 4) {
            currentTimeSlide = 0;
            imageOfGameArr[currentTimeSlide].classList.add('active');
        }
        imageOfGameArr[currentTimeSlide].classList.add('active');
    }
    checkRunSlider = true;
}

let timerId = setInterval(startRunImg, 3000);

buttonStop.addEventListener('click',  function () {
    clearInterval(timerId);
    checkRunSlider = false;
});

buttonGo.addEventListener('click',  function () {
    if (checkRunSlider === false) {
        timerId = setInterval(startRunImg, 3000);
    }
});








