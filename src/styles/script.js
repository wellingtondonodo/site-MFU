document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelectorAll('.slider');
    const btnPrev = document.getElementById('prev-button');
    const btnNext = document.getElementById('next-button');
  
    // Verifique se os elementos foram encontrados
    console.log('Slider elements:', slider);
    console.log('Previous button:', btnPrev);
    console.log('Next button:', btnNext);
  
    let currentSlide = 0;
  
    function hideSlider() {
      slider.forEach(item => item.classList.remove('on'));
    }
  
    function showSlider() {
      slider[currentSlide].classList.add('on');
    }
  
    function nextSlider() {
      console.log('Next slide clicked');
      hideSlider();
      if (currentSlide === slider.length - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }
      showSlider();
    }
  
    function prevSlider() {
      console.log('Previous slide clicked');
      hideSlider();
      if (currentSlide === 0) {
        currentSlide = slider.length - 1;
      } else {
        currentSlide--;
      }
      showSlider();
    }
  
    if (btnNext && btnPrev) {
      btnNext.addEventListener('click', nextSlider);
      btnPrev.addEventListener('click', prevSlider);
    } else {
      console.error('Buttons not found');
    }
  
    // Cleanup function to remove event listeners
    return () => {
      if (btnNext && btnPrev) {
        btnNext.removeEventListener('click', nextSlider);
        btnPrev.removeEventListener('click', prevSlider);
      }
    };
  });