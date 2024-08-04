var swiper = new Swiper(".slider__swiper", {
  slidesPerView: 5,
  spaceBetween: 55,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1199: {
      slidesPerView: 4,
      spaceBetweenSlides: 30
    },
    767: {
      slidesPerView: 2,
      spaceBetweenSlides: 10
    },
    320: {
      slidesPerView: 1,
      spaceBetweenSlides: 10
    }
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
});