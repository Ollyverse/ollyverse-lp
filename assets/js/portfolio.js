
(function () {
  'use strict';

  var filterBtns = document.querySelectorAll('[data-olv-filter]');
  var cards      = document.querySelectorAll('[data-olv-card]');

  // ── Entry animation on load
  cards.forEach(function (card, i) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.4s ease, transform 0.4s ease, border-color 0.25s ease';
    setTimeout(function () {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 80 + i * 80);
  });

  // ── Filter logic
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {

      // Update button active states
      filterBtns.forEach(function (b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');

      var active = btn.getAttribute('data-olv-filter');

      cards.forEach(function (card) {
        var cat = card.getAttribute('data-olv-category');
        var show = (active === 'all' || cat === active);

        if (show) {
          card.style.display = 'flex';
          setTimeout(function () {
            card.style.opacity   = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity   = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(function () {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

})();

console.log("____-____Rendered successfully_____-_____")