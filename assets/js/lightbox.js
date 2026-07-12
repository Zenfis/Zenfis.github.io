(function () {
  var images = document.querySelectorAll('img.zoomable');
  if (!images.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML =
    '<button class="lightbox-close" type="button" aria-label="Закрыть">✕ Закрыть</button>' +
    '<img class="lightbox-image" alt="">' +
    '<p class="lightbox-hint">Клик по картинке — реальный размер · Esc — закрыть</p>';
  document.body.appendChild(overlay);

  var imgEl = overlay.querySelector('.lightbox-image');
  var closeBtn = overlay.querySelector('.lightbox-close');

  function open(src, alt) {
    imgEl.src = src;
    imgEl.alt = alt || '';
    imgEl.classList.remove('is-zoomed');
    overlay.classList.remove('is-zoomed');
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    overlay.scrollTop = 0;
    overlay.scrollLeft = 0;
  }

  function close() {
    overlay.classList.remove('is-open');
    overlay.classList.remove('is-zoomed');
    document.body.style.overflow = '';
    imgEl.src = '';
  }

  images.forEach(function (img) {
    img.addEventListener('click', function () {
      open(img.currentSrc || img.src, img.alt);
    });
  });

  imgEl.addEventListener('click', function () {
    var zoomed = imgEl.classList.toggle('is-zoomed');
    overlay.classList.toggle('is-zoomed', zoomed);
    overlay.scrollTop = 0;
    overlay.scrollLeft = 0;
  });

  closeBtn.addEventListener('click', close);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
  });
})();
