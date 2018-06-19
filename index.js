import SmoothScroll from 'smooth-scroll';
const $hero = document.querySelector('.hero');
const $navbarEnd = document.querySelector('.navbar-end');
const $slides = document.querySelector('#slides');

new SmoothScroll('a[href*="#"]');

const slideDelay = 5000;
let slideIndex = 0;
const slideImages = [
  'https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzQ5Mzc3NTQ5/rosa-parks-9433715-1-402.jpg',
  'https://www.biography.com/.image/t_share/MTE5NDg0MDU0ODEyNzIyNzAz/michelle-obama-thumb-2.jpg',
  'https://www.biography.com/.image/t_share/MTIwNjA4NjMzNzg2NTAwNjIw/angela-davis-9267589-1-402.jpg'
];

const switchSlide = () => {
  $slides.src = slideImages[slideIndex++];
  if (slideIndex >= slideImages.length) slideIndex = 0;
};

switchSlide();
setTimeout(switchSlide, slideDelay);

const $form = document.querySelector('#contact-form');
$form.onsubmit = e => e.preventDefault();

const $burger = document.querySelector('.navbar-burger');
$burger.onclick = () => {
  document.querySelector('.navbar-menu').classList.toggle('is-active');
};

const isElementInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

window.addEventListener('scroll', () => {
  if (!isElementInViewport($hero)) {
    $navbarEnd.classList.add('sticky');
  } else {
    $navbarEnd.classList.remove('sticky');
  }
});

/*
window.onhashchange = (e) => {
  if (window.location.hash) {
    e.preventDefault();
    const el = document.querySelector(window.location.hash);

    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
      /*window.scrollTo({
        behavior: "smooth",
        //left: 0,
        top: el.offsetTop
      });
    }
  }
};*/