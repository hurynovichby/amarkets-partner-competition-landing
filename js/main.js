document.addEventListener("DOMContentLoaded", function () {
  // Функция для скрытия блока countdown
  function initializeCountdown() {
    const countdown = document.querySelector(".countdown");
    const closeButton = document.querySelector(".button__close");

    const isHidden = localStorage.getItem("countdown-hidden");
    if (isHidden) {
      const hideTime = parseInt(isHidden, 10);
      const now = new Date().getTime();
      if (now < hideTime) {
        countdown.style.display = "none";
      } else {
        localStorage.removeItem("countdown-hidden");
      }
    }

    closeButton.addEventListener("click", function () {
      const now = new Date().getTime();
      localStorage.setItem("countdown-hidden", now + 24 * 60 * 60 * 1000);
      countdown.style.display = "none";
    });
  }

  // Функция для управления модальным окном
  function initializeModal() {
    const modalOverlay = document.querySelector(".modal-overlay");
    const modalClose = document.querySelector(".modal__close");
    const openModalButton = document.querySelector(".open-modal-button");

    openModalButton.addEventListener("click", function () {
      modalOverlay.style.display = "flex";
      document.body.style.overflow = "hidden";
    });

    modalClose.addEventListener("click", function () {
      modalOverlay.style.display = "none";
      document.body.style.overflow = "";
    });

    modalOverlay.addEventListener("click", function (e) {
      if (e.target === modalOverlay) {
        modalOverlay.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  }

  // Функция для плавного скролла и активации пунктов навигации
  function initializeSmoothScroll() {
    document.querySelectorAll(".header__nav-item").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelectorAll(".header__nav-item").forEach((item) =>
          item.classList.remove("active")
        );

        this.classList.add("active");

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
          top:
            targetElement.offsetTop -
            document.querySelector(".header").offsetHeight,
          behavior: "smooth",
        });
      });
    });
  }

  // Функция для изменения активного пункта при скролле
  function initializeScrollSpy() {
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY || document.documentElement.scrollTop;

      sections.forEach((section) => {
        if (
          scrollPos >=
          section.offsetTop - document.querySelector(".header").offsetHeight
        ) {
          const id = section.getAttribute("id");
          document.querySelectorAll(".header__nav-item").forEach((item) => {
            item.classList.remove("active");
            if (item.getAttribute("href").substring(1) === id) {
              item.classList.add("active");
            }
          });
        }
      });
    });
  }

  // Функция для управления бургер-меню
  function initializeBurgerMenu() {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const navItems = document.querySelectorAll('.header__nav-item');

    burger.addEventListener('click', function () {
      nav.classList.toggle('active');
      burger.classList.toggle('active');
    });

    navItems.forEach((item) => {
      item.addEventListener('click', function () {
        nav.classList.remove('active');
        burger.classList.remove('active');
      });
    });
  }

  // Инициализация всех функций
  initializeCountdown();
  initializeModal();
  initializeSmoothScroll();
  initializeScrollSpy();
  initializeBurgerMenu();
});
