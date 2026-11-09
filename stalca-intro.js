
/* Stalca — intro exibida somente uma vez por sessão de navegação. */
(() => {
  'use strict';

  const KEY = 'stalca_intro_v1_seen';
  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  let alreadySeen = false;

  try {
    alreadySeen = sessionStorage.getItem(KEY) === '1';
  } catch (_) {
    /* armazenamento bloqueado */
  }

  if (reducedMotion || alreadySeen) return;

  const start = () => {
    if (!document.body) return;

    const overlay = document.createElement('div');

    overlay.className = 'stalca-intro';
    overlay.setAttribute(
      'aria-label',
      'Apresentação da Stalca'
    );

    overlay.innerHTML = `
      <div class="stalca-intro__door stalca-intro__door--left" aria-hidden="true"></div>
      <div class="stalca-intro__door stalca-intro__door--right" aria-hidden="true"></div>

      <div class="stalca-intro__content">
        <img
          class="stalca-intro__logo"
          src="stalca-logo-nova.webp"
          alt="Stalca Administradora"
          width="220"
          height="220"
        >
        <p class="stalca-intro__caption">
          Tradição que administra. Tecnologia que aproxima.
        </p>
      </div>

      <button class="stalca-intro__skip" type="button">
        Pular abertura
      </button>
    `;

    document.body.prepend(overlay);

    let completed = false;

    const finish = () => {
      if (completed) return;
      completed = true;

      try {
        sessionStorage.setItem(KEY, '1');
      } catch (_) {
        /* sem persistência */
      }

      overlay.classList.add('is-opening');

      window.setTimeout(() => overlay.remove(), 850);
    };

    overlay.querySelector('.stalca-intro__skip')
      .addEventListener('click', finish);

    window.setTimeout(finish, 1450);

    // Remoção de segurança
    window.setTimeout(() => overlay.remove(), 3500);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, {
      once: true
    });
  } else {
    start();
  }
})();
