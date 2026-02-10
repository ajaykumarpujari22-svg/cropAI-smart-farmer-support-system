
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
const slideInterval = 4000;
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}
setInterval(nextSlide, slideInterval);
showSlide(currentIndex);
