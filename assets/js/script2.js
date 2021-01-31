// select concert container
var concertSectionEl = document.querySelector('#concert-display')


var submitFindShows = function(event) {
    event.preventDefault();
    concertSectionEl.innerHTML = '';

    // get value from artistNameEl
    var artistConcerts = artistNameEl.value.trim();

    if (artistConcerts) {
        fetchBandsData(artistConcerts);
        artistNameEl.value = "";
    } 
}

var fetchBandsData = function(artistConcerts) {
    fetch(
        'https://rest.bandsintown.com/v4/artists/'
        + 'grimes'
        + '/events?app_id='
        + 'e6da6370c9375949d1ebfe0713ff02c8'
    )
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayConcertDates(data)
    })
}

// function to display concert dates
var displayConcertDates = function(data) {

    var similarArtistName = document.querySelector('#similar-artist')
    similarArtistName.textContent=''

    for (let i = 0; i < 5; i++) {

    // create concert background (li)
    var concertBackgroundEl = document.createElement('li')
    concertBackgroundEl.className = 'concert-background'
    concertBackgroundEl.setAttribute('id', 'container-' + i)

    // create container for concert info
    var concertConatinerEl = document.createElement('div')
    concertConatinerEl.classList.add('concert-container')

    // create p element and give it value of city
    var concertCityEl = document.createElement('p')
    concertCityEl.classList.add('city-details')
    concertCityEl.textContent = //NEED HELP WITH ENDPOINT 

    // create p element and give it a value of date
    var concertDateEl = document.createElement('p')
    concertDateEl.classList.add('date-details')
    concertDateEl.textContent = //NEED HELP WITH ENDPOINT

    // create container for button
    var infoBtnConEl = document.createElement('div')
    infoBtnConEl.classList.add('infoBtn-container')

    // create see more info btn
    var infoBtnEl = document.createElement('button')
    infoBtnEl.classList.add('info')
    infoBtnEl.textContent = 'See more info & get tickets'

    // append elements to page
    concertSectionEl.appendChild(concertBackgroundEl)
    concertBackgroundEl.appendChild(concertContainerEl)
    concertBackgroundEl.appendChild(infoBtnConEl)
    concertConatinerEl.appendChild(concertCityEl)
    concertConatinerEl.appendChild(concertDateEl)
    infoBtnConEl.appendChild(infoBtnConEl)
    }

}

// listen for info button click
infoBtnEl.addEventListener('click', //NEED END POINT 
);

