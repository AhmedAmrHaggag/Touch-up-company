document.addEventListener('DOMContentLoaded', () => {

  /* ---------- year in footer ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- hero load animation ---------- */
  requestAnimationFrame(() => {
    document.body.classList.add('reveal-ready');
  });

  /* ---------- sticky header shrink on scroll ---------- */
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };
  const openMenu = () => {
    mobileMenu.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  /* ---------- service card expand/collapse (touch + click friendly) ---------- */
  document.querySelectorAll('.service-card').forEach(card => {
    const btn = card.querySelector('.expand-btn');
    const toggle = () => card.classList.toggle('open');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggle();
    });
    card.querySelector('.service-body').addEventListener('click', toggle);
  });

  /* ---------- animated stat counters (trigger once, on scroll into view) ---------- */
  const statEls = document.querySelectorAll('.stat-num');
  const animateCount = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const duration = 1200;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  };

  if ('IntersectionObserver' in window) {
    const statObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    statEls.forEach(el => statObserver.observe(el));

    /* ---------- generic scroll-reveal for section headers ---------- */
    const revealTargets = document.querySelectorAll(
      '#services .max-w-lg, #work > div > div.flex, #process .road-line > span, #process .road-line > h2, #about .about-media, #about > div > div:last-child'
    );
    revealTargets.forEach(el => el.classList.add('scroll-fade'));

    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealTargets.forEach(el => revealObserver.observe(el));
  } else {
    // fallback: just show the numbers, no animation
    statEls.forEach(el => el.textContent = el.getAttribute('data-count'));
  }

  /* ---------- contact form (front-end only demo) ---------- */
  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      formNote.classList.remove('hidden');
      form.reset();
      setTimeout(() => formNote.classList.add('hidden'), 5000);
    });
  }

});
