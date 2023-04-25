let mountain = document.getElementById('Mountain');
let clouds = document.getElementById('Clouds');
let sections = document.getElementById('#');

// Valeur maximale de défilement
const maxScroll = document.body.offsetHeight - window.innerHeight - 1815;

function scrollHandler() {
  let value = window.scrollY;

  clouds.style.left = value * -2 + 'px';
  
  // Limiter la valeur de défilement pour éviter que l'élément ne descende trop bas
  let mountainScroll = Math.min(value * 2, maxScroll);
  mountain.style.top = mountainScroll + 'px';
}

window.addEventListener('scroll', scrollHandler);
