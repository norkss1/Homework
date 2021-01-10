$(document).ready(function () {
    // Фиксированное меню при скроле
    const navbarScroll = $('#navbar-scroll');
    const posts = $('#posts');
    const buttonUp = $('#button-up');
    let postsH = posts.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, postsH)

    $(window).on("scroll", function () {
        postsH = posts.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, postsH)
    });

    function checkScroll(scrollPos, postsH) {
        if (scrollPos > (postsH - 600)) {
            navbarScroll.addClass('fixed');
            buttonUp.addClass('button-up-visible')
        } else {
            navbarScroll.removeClass('fixed');
            buttonUp.removeClass('button-up-visible')
        }
    }

    // Скролл при клике на ссылку в меню
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top - 120;

        $("html, body").animate({
            scrollTop: elementOffset,
        }, 700)
    })

    // Скролл на стартовую страницу при клике на кнопку
    $(document).on("click", ".floating-button", function (event) {
        event.preventDefault();

        $("html, body").animate({
            scrollTop: 0,
        }, 1000)
    });


    // Скрыть/показать блок Most Popular Posts при клике на кнопку
    $(document).on("click", ".glow-button", function () {
        $(".most-popular-posts").toggle(1000);
    })


});
