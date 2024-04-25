// Funkcja sprawdzająca czy górna część elementu jest widoczna na ekranie
function isElementTopInViewport(el) {
  var rect = el.getBoundingClientRect();
  var offset = -50; // Margines offsetu, możesz dostosować go według swoich potrzeb
  return rect.top >= -offset && rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset;
}
  
// Funkcja obsługująca animację obrazków
function handleScrollAnimation() {
    var images = document.querySelectorAll('.img img, .img1 img'); // Wybierz wszystkie obrazy
    images.forEach(function(image) {
      if (isElementTopInViewport(image) && !image.classList.contains('animated')) {
        image.classList.add('animate'); // Dodaj klasę animate, która uruchamia animację
        image.classList.add('animated'); // Dodaj klasę animated, aby oznaczyć, że animacja została już uruchomiona
      }
    });
  }
  
  // Nasłuchuj zdarzenie przewijania strony
  window.addEventListener('scroll', function() {
    handleScrollAnimation();
  });
  
  // Uruchom funkcję handleScrollAnimation() po załadowaniu strony, aby sprawdzić widoczność obrazków na początku
  document.addEventListener('DOMContentLoaded', function() {
    handleScrollAnimation();
  });
  

const hamburger = document.querySelector(".hamburger-menu")
const navbar = document.querySelector(".navbar")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navbar.classList.toggle("active")
})



    window.onload = function() {
        document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }


const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide(){
  for (let i = 0; i < imgs.length; i++){
    imgs[i].style.display = 'none';
  }
  imgs[n].style.display = 'block';
}
changeSlide();

prev_btn.addEventListener('click', (e)=>{
  e.preventDefault();
  if(n > 0){
    n--;
  }else{
    n = imgs.length -1;
  }
  changeSlide();
})
next_btn.addEventListener('click', (e)=>{
  e.preventDefault();
  if(n < imgs.length - 1){
    n++;
  }else{
    n = 0;
  }
  changeSlide();
})

