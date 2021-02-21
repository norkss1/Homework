async function startSearchIP() {
    let inquiryIP = await fetch('https://api.ipify.org/?format=json');
    let clientIP = await inquiryIP.json();

    let result = await fetch(`http://ip-api.com/json/${clientIP.ip}?fields=continent,country,regionName,city`);
    let resultParse = await result.json();
    renderInformation(resultParse);
}


function renderInformation(obj) {

    const background = document.querySelector('.background');

    let html = '<ul class="list">';

    for (let key in obj) {
        let nameValue = key[0].toUpperCase() + key.slice(1).toLowerCase();

        html += `<li class="list-elem"><span>${nameValue}:</span> ${obj[key]}</li>`
    }

    html += '</div>'

    background.insertAdjacentHTML('beforeend', `${html}`);
}


function imageGo() {
    document.querySelector('.image').style.visibility = 'visible';
}

document.querySelector('#btn-start').addEventListener('click', (e) => {
    e.preventDefault();

    startSearchIP();

    setTimeout(() => imageGo (), 1000);
})

