
const summerCampImage = document.querySelector('.summer-camp__img');
const previews = document.querySelectorAll('[class^="summer-camp__item"]');
const defaultSrc = "./assets/images/summer-camp-2025.jpg";

previews.forEach(preview => {
    const hoverSrc = preview.dataset.hoverSrc;
    preview.addEventListener('mouseover', () => summerCampImage.src = hoverSrc);
    preview.addEventListener('mouseout', () => summerCampImage.src = defaultSrc);
});