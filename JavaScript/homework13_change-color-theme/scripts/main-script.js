window.onload = function () {


    if (localStorage.length !== 0) {
        document.querySelector('.style').href = localStorage.getItem('href');
    } else {
        document.querySelector('.style').setAttribute('href', "styles/style.css");
    }

    function startChangeTheme() {
        const style = document.querySelector('.style');
        if (style.getAttribute('href') === "styles/style.css") {
            style.setAttribute('href', "styles/style-2.css");
            localStorage.setItem('href', 'styles/style-2.css');
        } else {
            style.setAttribute('href', "styles/style.css");
            localStorage.setItem('href', 'styles/style.css');
        }
    }

    document.querySelector('.btn-theme').addEventListener('click', () => startChangeTheme());
}