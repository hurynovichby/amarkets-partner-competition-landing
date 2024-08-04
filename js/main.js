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
});
