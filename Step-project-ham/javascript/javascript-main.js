// При клике кнопок в блоке -Our Services- меняются вкладки и текст
let tab = document.querySelectorAll('.tabs-title');

tab.forEach(function (elem) {
    elem.addEventListener('click', function () {
        let currentTab = document.querySelector(`.tab-content[data-tab-content="${elem.dataset.tab}"]`);
        document.querySelector('.tab-content.content-active').classList.remove('content-active');
        document.querySelector('.tabs-title.active').classList.remove('active');
        document.querySelector('.tabs-title-img.current').classList.remove('current')

        currentTab.classList.add('content-active');
        elem.classList.add('active');
        elem.querySelector('.tabs-title-img').classList.add('current');
    });
});


// Переменные для  сортировки картинок в блоке -Our Amazing Work-
const buttonAll = document.getElementById('all');
const buttonGraphicDesign = document.getElementById('graphicDesign');
const buttonWebDesign = document.getElementById('webDesign');
const buttonLandingPages = document.getElementById('landingPages');
const buttonWordPress = document.getElementById('wordpress');
const workMainImg = document.querySelectorAll('.work-main-img');

let workImage = document.querySelectorAll('.work-image');
let graphicDesign = document.querySelectorAll('.graphic-design');
let webDesign = document.querySelectorAll('.web-design');
let landingPage = document.querySelectorAll('.landing-page');
let wordPress = document.querySelectorAll('.wordpress');

// Сортировка картинок в блоке -Our Amazing Work-
const btnAll = document.querySelector('.work-btn:first-child');

function closeWorkImg() {
    btnAll.style.borderColor = '#DADADA'; // задаю кнопке All цвет (для симуляции активированной кнопки)
    btnAll.style.color = '#717171';

    for (let i = 0; i < workImage.length; i++) {
        workImage[i].style.display = 'none';
    }
}

function showCurrentTab(currentBtn) {
    for (let i = 0; i < currentBtn.length; i++) {
        currentBtn[i].style.display = 'inline';
    }
}

function event(button, tab) {
    // функция при клике проверяет нажата ли кнопка All, если да, то показывает все картинки, если нажата другая кнопка,
    // то удаляет все блоки с картинками и после этого формирует блоки с картинками с выбраной темой
    button.addEventListener('click', function () {
        if (button === buttonAll) {
            document.querySelector('.work-main-img').style.display = 'flex';
            btnAll.style.borderColor = '#18CFAB';
            btnAll.style.color = '#18CFAB';
        } else {
            closeWorkImg();
        }
        showCurrentTab(tab);
    });
}

function eventGo() {
    event(buttonAll, workImage);
    event(buttonGraphicDesign, graphicDesign);
    event(buttonWebDesign, webDesign);
    event(buttonLandingPages, landingPage);
    event(buttonWordPress, wordPress);
}

eventGo();


// Подгрузка по нажатии кнопки #workImageBtn еще 12 картинок
const workImageBtn = document.getElementById('workImageBtn');

const classNameList = ['graphic-design', 'web-design', 'landing-page', 'wordpress'];
let quantityClick = 0;

workImageBtn.addEventListener('click', function () {

    function randNumberImg() {
        for (let i = 0; i < 12; i++) {
            let ind = Math.floor(Math.random() * 4);
            let choiceImg = 3;
            choiceImg = choiceImg + i;
            if (choiceImg > 10) {
                choiceImg = choiceImg - 6;
            }

            let div = document.createElement('div');
            div.className = `work-image ${classNameList[ind]}`;
            div.innerHTML = `<img class="work-image-picture" src=\"images/our-amazing-work/${classNameList[ind]}/${choiceImg}.jpg\" alt=\"#\"/> ${workMainImg[0].outerHTML}`;

            document.querySelector('.work-image-wrapper').append(div);

            workImageBtn.style.visibility = 'visible';
            barWrapper.style.display = 'none';

            // Перезаписываем массив с созданными новыми блоками и запускаем функцию eventGo для отображения этих блоков
            workImage = document.querySelectorAll('.work-image');
            graphicDesign = document.querySelectorAll('.graphic-design');
            webDesign = document.querySelectorAll('.web-design');
            landingPage = document.querySelectorAll('.landing-page');
            wordPress = document.querySelectorAll('.wordpress');

            eventGo();

            // Считаем сколько раз нажали кнопку, если уже 2, то убираем кнопку
            if (quantityClick === 2) {
                workImageBtn.style.display = 'none';
            }
        }
    }


    // Задержка срабатывания подгрузки картинок
    let barWrapper = document.querySelector('.bar-wrapper');

    function first() {
        setTimeout(() => randNumberImg(), 2000);
        quantityClick++;
    }

    function second() {
        workImageBtn.style.visibility = 'hidden';
        barWrapper.style.display = 'inline-block';
    }

    first();
    second();
});


// Slider
const slider = $('.slider');
const sliderBig = $('.slider-big');

$(document).ready(function () {

    slider.slick({
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false,
        variableWidth: false,
        asNavFor: ".slider-big"
    });

    sliderBig.slick({
        arrows: false,
        fade: true,
        asNavFor: ".slider"
    });

    document.querySelectorAll('.customer-icon-small').forEach((elem) => {
        elem.setAttribute('onclick', 'clickSmallImg(this)');
    });
})

function clickSmallImg(itemImg) {
    // функция для перехода на нужную картинку в big-slider при клике в маленьком slider
    const index = itemImg.getAttribute('data-slick-index');
    $('.slider-big').slick('goTo', index);
    $('.slider').slick('goTo', index);
}


// Masonry
$(document).ready(function () {

    const $bestImages = $('.best-images');

    $bestImages.imagesLoaded(function () {
        $bestImages.masonry({
            itemSelector: '.best-images-item',
            columnWidth: 370,
            gutter: 20
        })
    })

    const $itemMidWrap = $('.item-middle-wrapper').masonry({
        itemSelector: '.item-middle',
        columnWidth: 180,
        gutter: 3
    })

    $('#bestImagesBtn').on('click', function () {

        const bestImgBtnWrap = document.querySelector('.best-images-btn-wrapper');

        function createImgMansory() {
            let elems = [getItemElement(), getItemElement(), getItemElement(), getItemElement(), getItemElement(), getItemElement(), getItemElement()];
            let $elems = $(elems);

            $bestImages.imagesLoaded(function () {
                $bestImages.append($elems).masonry('appended', $elems);
            })

            bestImgBtnWrap.querySelector('.best-images-btn').style.visibility = 'visible';
            bestImgBtnWrap.querySelector('.preloader').style.display = 'none';
        }


        // Задержка срабатывания подгрузки картинок
        function firstMansoryBtn() {
            setTimeout(() => createImgMansory(), 2000);
        }

        function secondMansoryBtn() {
            bestImgBtnWrap.querySelector('.best-images-btn').style.visibility = 'hidden';
            bestImgBtnWrap.querySelector('.preloader').style.display = 'block';
        }

        firstMansoryBtn();
        secondMansoryBtn();
    });
});

function getItemElement() {

    let elem = document.createElement('div');
    let wRand
    let countW = 0;
    for (let i = 0; i <= 3; i++) {
        wRand = Math.random();
        countW++;
    }
    let hRand = Math.random();
    let widthClass = countW <= 2 ? 'best-images-item--width1' : countW > 2 ? 'best-images-item--width2' : '';
    let heightClass = hRand > 0.85 ? 'best-images-item--height4' : hRand > 0.6 ? 'best-images-item--height3' : hRand > 0.35 ? 'best-images-item--height2' : '';
    elem.className = 'best-images-item ' + widthClass + ' ' + heightClass;

    let randImg = Math.floor(Math.random() * 30 + 1);
    elem.innerHTML = `<img src=\"images/gallery-of-best-images/new-picture/${randImg}.jpg\" alt=\"#\"/>`;
    return elem;
}