
const summerCampImage = document.querySelector('.summer-camp__img');
const previews = document.querySelectorAll('[class^="summer-camp__item"]');
const defaultSrc = "./assets/images/summer-camp-2025.jpg";
previews.forEach(preview => {
    const hoverSrc = preview.dataset.hoverSrc;
    preview.addEventListener('mouseover', () => summerCampImage.src = hoverSrc);
    preview.addEventListener('mouseout', () => summerCampImage.src = defaultSrc);
});

const buttonsPosters = [
    document.getElementById('posters__paragraph-1'),
    document.getElementById('posters__paragraph-2'),
    document.getElementById('posters__paragraph-3'),
    document.getElementById('posters__paragraph-4')
];
const blocksPosters = [
    document.getElementById('event-1'),
    document.getElementById('event-2'),
    document.getElementById('event-3'),
    document.getElementById('event-4')
];
function openPoster (index) {
    buttonsPosters.forEach((button, i) => {
        button.className = i === index ? 'posters__paragraph' : 'posters__paragraph_not-active';
    });
    blocksPosters.forEach((block, i) => {
        block.className = i === index ? 'event' : 'event_not-active';
    });
}
buttonsPosters.forEach((button, index) => {
    button.addEventListener('click', () => openPoster(index));
});

const contactsPopup = document.querySelector('.communication');
const contactsPopupOpen = document.querySelectorAll('.event__button');
const contactsPopupClose = document.querySelector('.communication__button');

contactsPopupClose.addEventListener('click', () => {contactsPopup.close();})
contactsPopupOpen.forEach(button => {
    button.addEventListener('click', () => {
        contactsPopup.showModal();
    });
    contactsPopup.addEventListener('click', (event) => {
        if (event.target === contactsPopup) {
            contactsPopup.close();
        }
    })
})