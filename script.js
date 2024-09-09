const slides = document.querySelector('.slides');
let slideIndex = 0;

function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.children.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.children.length - 1;
    }
    showSlide(slideIndex);
}

// Change slide every 3 seconds (adjust the interval as needed)
setInterval(nextSlide, 3000);
