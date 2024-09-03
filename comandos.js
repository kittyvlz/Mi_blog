const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');
const container = document.querySelector('.carousel__container');
const images = document.querySelectorAll('.carousel__image');

let index = 0;

function showImage(newIndex) {
    if (newIndex < 0) {
        index = images.length - 1;
    } else if (newIndex >= images.length) {
        index = 0;
    } else {
        index = newIndex;
    }
    container.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => showImage(index - 1));
nextButton.addEventListener('click', () => showImage(index + 1))