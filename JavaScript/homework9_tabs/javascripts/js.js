let tab = document.querySelectorAll('.tabs-title');

tab.forEach(function (elem) {
    elem.addEventListener('click', function () {
        let currentTab = document.querySelector(`.tab-content[data-tab-content="${elem.dataset.tab}"]`);
        document.querySelector('.tab-content.content-active').classList.remove('content-active');
        document.querySelector('.tabs-title.active').classList.remove('active');
        currentTab.classList.add('content-active');
        elem.classList.add('active');
    });
});
