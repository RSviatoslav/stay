const slider = document.querySelector("body");
const slidesContainer = document.querySelector(".apart");
const slides = document.querySelectorAll(".items");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentIndex = 0;

const slideWidth = slides[0].clientWidth;

// const clonedFirstSlide = slides[slides.length - 1].cloneNode(true);
// const clonedLastSlide = slides[0].cloneNode(true);
// slidesContainer.insertBefore(clonedFirstSlide, slides[0]);
// slidesContainer.appendChild(clonedLastSlide);

function showSlide(index) {
  slidesContainer.style.transition = "transform 0.3s ease-in-out";
  slidesContainer.style.transform = `translateX(-${index * 100}vw)`;

//   if (index === slides.length - 1) {
//     setTimeout(() => {
//       slidesContainer.style.transition = "none";
//       slidesContainer.style.transform = `translateX(-${slideWidth}px)`;
//       currentIndex = 1;
//     }, 300);
//   }

//   if (index === 0) {
//     setTimeout(() => {
//       slidesContainer.style.transition = "none";
//       slidesContainer.style.transform = `translateX(-${(slides.length - 2) * slideWidth}px)`;
//       currentIndex = slides.length - 2;
//     }, 300);
//   }
}

function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
  resetAutoplay();
}

function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
  resetAutoplay();
}

function resetAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = setInterval(nextSlide, 15000000);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

showSlide(currentIndex);

let autoplayInterval = setInterval(nextSlide, 150000000);
