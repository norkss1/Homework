function getFilms() {
    fetch('https://swapi.dev/api/films/')
        .then((response) => {
            return response.json()
        })
        .then((filmsData) => {
            renderFilms(filmsData.results);
            filmsData.results.forEach(film => {

                film.characters.forEach((charUrl) => {
                    fetch(charUrl)
                        .then((res) => res.json())
                        .then((filmsData) => {
                            renderChar(film.title, filmsData)
                        });
                });
            });
        });
}


function renderFilms(films) {

    let html = "<div class='films-name-wrapper'>";
    for (const film of films) {
        html += `
            <div id="${film.title}" class="films-name">
            <div class="films-name-title-wrapper">
                <div class="films-name-title">
                    <div class="films-name-id">${film.episode_id}.</div>
                    <div class="films-name-text">${film.title}</div>
                </div>
                    <div class="films-name-opening_crawl">${film.opening_crawl}</div>
            </div>

            <div class="characters"><div class="characters-title">Characters:</div></div>

            </div>
                `
    }
    html += `</div>`;
    document.body.innerHTML = html;
}


function renderChar(filmName, charData) {
    const filmElem = document.getElementById(filmName);

    const charactersElem = filmElem.querySelector('.characters');

    charactersElem.insertAdjacentHTML(
        'beforeend',
        `<span>${charData.name}</span>`
    );
}

getFilms();