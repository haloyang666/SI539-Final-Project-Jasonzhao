document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });
  }

  const accordionButtons = document.querySelectorAll('.accordion-item');

  accordionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      if (!panel) return;

      const isOpen = panel.style.maxHeight && panel.style.maxHeight !== '0px';

      document.querySelectorAll('.accordion-panel').forEach(p => {
        p.style.maxHeight = null;
      });

      if (!isOpen) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  const detailImages = document.querySelectorAll('.detail-full-item img');
  if (detailImages.length) {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <div class="lightbox-inner">
        <img src="" alt="">
        <button class="lightbox-close" aria-label="Close">&times;</button>
      </div>
    `;
    document.body.appendChild(overlay);

    const viewImg = overlay.querySelector('img');
    const closeBtn = overlay.querySelector('.lightbox-close');

    detailImages.forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => {
        viewImg.src = img.src;
        overlay.classList.add('open');
      });
    });

    overlay.addEventListener('click', e => {
      if (e.target === overlay || e.target === closeBtn) {
        overlay.classList.remove('open');
      }
    });
  }
});
