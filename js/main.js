// Скрытие блока countdown
document.addEventListener('DOMContentLoaded', function () {
  const countdown = document.querySelector('.countdown');
  const closeButton = document.querySelector('.countdown__close');
  
  const isHidden = localStorage.getItem('countdown-hidden');
  if (isHidden) {
    const hideTime = parseInt(isHidden, 10);
    const now = new Date().getTime();
    if (now < hideTime) {
      countdown.style.display = 'none';
    } else {
      localStorage.removeItem('countdown-hidden');
    }
  }

  closeButton.addEventListener('click', function () {
    const now = new Date().getTime();
    localStorage.setItem('countdown-hidden', now + 24 * 60 * 60 * 1000);
    countdown.style.display = 'none';
  });
});
