document.addEventListener('DOMContentLoaded', () => {
  // Slider
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  prevBtn.addEventListener('click', showPrev);
  nextBtn.addEventListener('click', showNext);

  // Initialize slider
  showSlide(currentIndex);

  // Fade-in effect for elements with class 'fade-in'
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = 'opacity 0.8s ease-in-out';
      el.style.opacity = 1;
    }, 100);
  });

  // Optional: Auto-slide every 5 seconds
  // setInterval(showNext, 5000);

  // --- Dacă ai hartă, inițializeaz-o aici ---
  // Exemplu simplu Google Maps sau Leaflet (în funcție de ce folosești)
  // function initMap() {
  //   // codul pentru hartă
  // }
});
