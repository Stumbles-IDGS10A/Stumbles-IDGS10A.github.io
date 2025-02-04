if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
}

document.addEventListener('DOMContentLoaded', () => {
    notification();
  });
  
  function notification() {
    Notification.requestPermission().then(resultado => {
      console.log('Respuesta: ', resultado);
      if (resultado === 'granted') {
        new Notification("Bienvenido", {
          body: '¡Bienvenido a la página de Survival Zomb!',
          icon: 'img/logo-szomb.png'
        });
      } 
    });
  }

//SLIDER

const sliderList = document.querySelector('.slider-list');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    sliderList.style.transform = `translateX(${-currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

showSlide(currentIndex);
