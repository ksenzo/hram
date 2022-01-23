let openMenu = document.querySelector('.header__btn-mobile');
let menuMobile = document.querySelector('.mobile-menu');
let openMenuSpan = document.querySelector('.header__span');
let body = document.querySelector('body');

if (openMenu) {
   openMenu.addEventListener('click', () => {
      openMenuSpan.classList.toggle('__active');
      menuMobile.classList.toggle('__active');
      body.classList.toggle('__noscroll');
   });
}


window.onscroll = function showHeader() {
   let fixedHeader = document.querySelector('.header');
   if (window.pageYOffset > 0) {
      fixedHeader.classList.add('__active');
   } else {
      fixedHeader.classList.remove('__active');
   }
};


const swiper = new Swiper('.slider', {
   spaceBetween: 0,
   slidesPerView: 'auto',
   centerSlide: true,
   pagination: {
      el: '.slider-pagination',
   },
   allowTouchMove: true,
   //navigation: {
   //   nextEl: '.steps__step-button-next',
   //   prevEl: '.steps__step-button-prev',
   //},
});