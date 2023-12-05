function show() {
    document.getElementById('sidebar').classList.add('active');
}


function hide() {
    document.getElementById('sidebar').classList.remove('active');
}
const carouselImages = document.querySelectorAll('.carousel img');
const prevButton = document.querySelector('.btn.prev');
const nextButton = document.querySelector('.btn.next');

let currentIndex = 0;

function changeImage(newIndex) {
    carouselImages[currentIndex].classList.remove('active');
    currentIndex = newIndex;
    carouselImages[currentIndex].classList.add('active');
}

nextButton.addEventListener('click', () => {
    changeImage((currentIndex + 1) % carouselImages.length);
});

prevButton.addEventListener('click', () => {
    changeImage((currentIndex - 1 + carouselImages.length) % carouselImages.length);
});