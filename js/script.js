/* Mobile Menu */

let btn = document.getElementById("btn_hamburger");
let menu = document.getElementById("navbar_main_mobile");

btn.addEventListener('click', menuToggle);

function menuToggle() {
  btn.classList.toggle('open');
  document.body.classList.toggle('stop-scroll');
  menu.classList.toggle('show-menu');
}

/* Stats Counter */

let counters = document.querySelectorAll(".counter");
let scrollStart = false;

document.addEventListener('scroll', scrollPage);

function scrollPage() {
    let pos = window.scrollY;
    if (pos > 2200 && !scrollStart) {
        countUp();
        scrollStart = true;
    }
}

function countUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';
        let updateCounter = () => {
            let target = Number(counter.getAttribute('data-target'));
            let current = Number(counter.innerText);
            let increment = target / 100;
            if (current < target) {
                counter.innerText = `${Math.ceil(current + increment)}`;
                setTimeout(updateCounter, 30);
            } else {
                counter.innerText = target;
            }
        }
         updateCounter();
    })
}

/* Slides */

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let options = document.getElementsByClassName("option");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
  for (i = 0; i < options.length; i++) {
    options[i].className = options[i].className.replace(" active-option", "");
  }
  options[slideIndex-1].className += " active-option";
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  dots[slideIndex-1].className += " active-dot";
}