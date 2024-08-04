// Скрытие блока countdown
document.addEventListener("DOMContentLoaded", function () {
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

  var header = document.querySelector(".header");
  var headerOffset = header.offsetTop;

  window.addEventListener("scroll", function () {
    if (window.scrollY > headerOffset) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });

  // modal
  var modalOverlay = document.querySelector(".modal-overlay");
  var modalClose = document.querySelector(".modal__close");
  var openModalButton = document.querySelector(".open-modal-button"); // Кнопка для открытия модального окна

  // Открытие модального окна
  openModalButton.addEventListener("click", function () {
    modalOverlay.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  // Закрытие модального окна при клике на крестик
  modalClose.addEventListener("click", function () {
    modalOverlay.style.display = "none";
    document.body.style.overflow = "";
  });

  // Закрытие модального окна при клике вне его
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = "none";
    }
  });

  document.querySelectorAll(".header__nav-item").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // Удаление класса active у всех элементов
      document
        .querySelectorAll(".header__nav-item")
        .forEach((item) => item.classList.remove("active"));

      // Добавление класса active к текущему элементу
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

  // Обработчик для изменения активного пункта при скролле
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    let scrollPos = window.scrollY || document.documentElement.scrollTop;

    sections.forEach((section) => {
      if (
        scrollPos >=
        section.offsetTop - document.querySelector(".header").offsetHeight
      ) {
        let id = section.getAttribute("id");
        document.querySelectorAll(".header__nav-item").forEach((item) => {
          item.classList.remove("active");
          if (item.getAttribute("href").substring(1) === id) {
            item.classList.add("active");
          }
        });
      }
    });
  });

  var burger = document.querySelector('.header__burger');
  var nav = document.querySelector('.header__nav');
  var navItems = document.querySelectorAll('.header__nav-item');

  burger.addEventListener('click', function() {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
  });

  navItems.forEach(function(item) {
    item.addEventListener('click', function() {
      nav.classList.remove('active');
      burger.classList.remove('active');
    });
  });
});
