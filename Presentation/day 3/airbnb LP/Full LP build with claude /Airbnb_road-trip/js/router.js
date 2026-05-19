const PAGES = ['home', 'find-stay', 'route-planner'];

function getPage() {
  const hash = window.location.hash.replace('#', '');
  return PAGES.includes(hash) ? hash : 'home';
}

function navigate(page) {
  window.location.hash = page;
}

function render(page) {
  document.body.setAttribute('data-page', page);

  PAGES.forEach(p => {
    const el = document.getElementById('page-' + p);
    if (!el) return;
    el.hidden = p !== page;
    el.setAttribute('aria-hidden', String(p !== page));
  });

  document.querySelectorAll('[data-nav-link]').forEach(link => {
    const isActive = link.dataset.navLink === page;
    link.classList.toggle('nav-link--active', isActive);
    link.setAttribute('aria-current', isActive ? 'page' : 'false');
  });

  document.querySelectorAll('[data-category-tab]').forEach(tab => {
    const strip = tab.closest('[data-category-strip]');
    if (!strip) return;
    tab.classList.remove('category-tab--active');
  });
  const firstTabs = document.querySelectorAll('[data-category-strip] [data-category-tab]:first-child');
  firstTabs.forEach(t => t.classList.add('category-tab--active'));

  window.scrollTo(0, 0);
}

function initCategoryStrips() {
  document.querySelectorAll('[data-category-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      const strip = tab.closest('[data-category-strip]');
      if (!strip) return;
      strip.querySelectorAll('[data-category-tab]').forEach(t => {
        t.classList.remove('category-tab--active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('category-tab--active');
      tab.setAttribute('aria-selected', 'true');
    });
  });
}

function initDatePicker() {
  const container   = document.getElementById('dp-days');
  const monthLabel  = document.getElementById('dp-month-label');
  const hiddenInput = document.getElementById('rp-departure');
  if (!container || !monthLabel) return;

  let currentYear  = new Date().getFullYear();
  let currentMonth = new Date().getMonth();
  let selectedDate = null;

  const MONTHS = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];

  function renderCalendar() {
    const firstDay    = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const today       = new Date(); today.setHours(0, 0, 0, 0);

    monthLabel.textContent = MONTHS[currentMonth] + ' ' + currentYear;
    container.innerHTML = '';

    for (let i = 0; i < firstDay; i++) {
      const blank = document.createElement('span');
      blank.setAttribute('aria-hidden', 'true');
      container.appendChild(blank);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr  = currentYear + '-' +
                       String(currentMonth + 1).padStart(2, '0') + '-' +
                       String(d).padStart(2, '0');
      const thisDate = new Date(currentYear, currentMonth, d);
      const btn      = document.createElement('button');

      btn.type = 'button';
      btn.setAttribute('role', 'gridcell');
      btn.setAttribute('aria-label', MONTHS[currentMonth] + ' ' + d + ', ' + currentYear);
      btn.setAttribute('aria-selected', dateStr === selectedDate ? 'true' : 'false');
      btn.textContent = d;

      if (thisDate < today) {
        btn.disabled = true;
        btn.className = 'date-picker-day date-picker-day--past';
      } else if (dateStr === selectedDate) {
        btn.className = 'date-picker-day date-picker-day--selected';
      } else {
        btn.className = 'date-picker-day';
        btn.addEventListener('click', () => {
          selectedDate = dateStr;
          if (hiddenInput) {
            hiddenInput.value = dateStr;
            hiddenInput.dispatchEvent(new Event('change'));
          }
          renderCalendar();
        });
      }

      container.appendChild(btn);
    }
  }

  document.querySelector('.date-picker-nav__prev')?.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    renderCalendar();
  });

  document.querySelector('.date-picker-nav__next')?.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    renderCalendar();
  });

  renderCalendar();
}

function initRoutePlannerSync() {
  const fields = [
    { inputId: 'rp-origin',      targetId: 'summary-origin' },
    { inputId: 'rp-destination', targetId: 'summary-destination' },
    { inputId: 'rp-seats',       targetId: 'summary-seats' },
  ];

  fields.forEach(({ inputId, targetId }) => {
    const el  = document.getElementById(inputId);
    const out = document.getElementById(targetId);
    if (!el || !out) return;
    el.addEventListener('input', () => {
      out.textContent = el.value.trim() || '—';
    });
  });

  const departureInput    = document.getElementById('rp-departure');
  const summaryDeparture  = document.getElementById('summary-departure');
  if (departureInput && summaryDeparture) {
    departureInput.addEventListener('change', () => {
      summaryDeparture.textContent = departureInput.value || '—';
    });
  }

  const postBtn       = document.getElementById('rp-submit');
  const requiredIds   = ['rp-origin', 'rp-destination', 'rp-departure', 'rp-seats'];

  function checkValidity() {
    if (!postBtn) return;
    const allFilled = requiredIds.every(id => {
      const el = document.getElementById(id);
      return el && el.value.trim() !== '';
    });
    postBtn.disabled = !allFilled;
  }

  requiredIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', checkValidity);
      el.addEventListener('change', checkValidity);
    }
  });

  checkValidity();

  // Mirror disabled state to the rail CTA
  const postBtnRail = document.getElementById('rp-submit-rail');
  if (postBtnRail && postBtn) {
    const observer = new MutationObserver(() => {
      postBtnRail.disabled = postBtn.disabled;
    });
    observer.observe(postBtn, { attributes: true, attributeFilter: ['disabled'] });
    postBtnRail.disabled = postBtn.disabled;
  }
}

function formatDate(val) {
  if (!val) return '';
  const d = new Date(val + 'T00:00:00');
  if (isNaN(d)) return val;
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function initHeroSearch() {
  const pill     = document.getElementById('hero-search');
  const segments = pill?.querySelectorAll('.search-bar-pill__segment');
  const submitBtn = document.getElementById('hero-search-btn');
  if (!pill || !segments) return;

  // Clicking a segment activates it and focuses its input
  segments.forEach(seg => {
    seg.addEventListener('click', e => {
      // Don't re-fire if clicking directly on the input
      segments.forEach(s => s.classList.remove('search-bar-pill__segment--active'));
      seg.classList.add('search-bar-pill__segment--active');
      const input = seg.querySelector('.search-bar-pill__input');
      if (input) input.focus();
    });

    const input = seg.querySelector('.search-bar-pill__input');
    if (input) {
      // Deactivate on blur (with small delay to allow submit click)
      input.addEventListener('blur', () => {
        setTimeout(() => {
          if (!pill.contains(document.activeElement)) {
            segments.forEach(s => s.classList.remove('search-bar-pill__segment--active'));
          }
        }, 150);
      });
    }
  });

  // Click outside deactivates
  document.addEventListener('click', e => {
    if (!pill.contains(e.target)) {
      segments.forEach(s => s.classList.remove('search-bar-pill__segment--active'));
    }
  });

  // Submit: populate Find Stay search bar and navigate
  submitBtn?.addEventListener('click', e => {
    e.preventDefault();
    const from  = document.getElementById('hs-from')?.value.trim();
    const to    = document.getElementById('hs-to')?.value.trim();
    const when  = document.getElementById('hs-when')?.value.trim();
    const seats = document.getElementById('hs-seats')?.value.trim();

    // Update Find Stay search bar display values
    const fsSegments = document.querySelectorAll('#page-find-stay .search-bar-pill__segment');
    const fields = [
      { el: fsSegments[0], val: from,            empty: 'Any city' },
      { el: fsSegments[1], val: to,              empty: 'Any destination' },
      { el: fsSegments[2], val: formatDate(when), empty: 'Any week' },
      { el: fsSegments[3], val: seats ? seats + (seats === '1' ? ' seat' : ' seats') : '', empty: '1+' },
    ];
    fields.forEach(({ el, val, empty }) => {
      if (!el) return;
      const valEl = el.querySelector('.search-bar-pill__value');
      if (valEl) valEl.textContent = val || empty;
    });

    navigate('find-stay');
  });

  // Allow pressing Enter in any input to submit
  pill.querySelectorAll('.search-bar-pill__input').forEach(input => {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') submitBtn?.click();
    });
  });
}

function initCarousels() {
  if (window.innerWidth <= 743) return;

  document.querySelectorAll('.card-row-scroll').forEach(scroll => {
    const track = scroll.querySelector('.card-row-scroll__track');
    if (!track || !track.id) return;

    const id      = track.id.replace('-track', '');
    const prevBtn = document.querySelector(`[data-carousel-prev="${id}"]`);
    const nextBtn = document.querySelector(`[data-carousel-next="${id}"]`);

    let position = 0;

    function getMaxScroll() {
      return Math.max(0, track.scrollWidth - scroll.offsetWidth);
    }

    function update() {
      track.style.transform = `translateX(${-position}px)`;
      if (prevBtn) prevBtn.disabled = position <= 0;
      if (nextBtn) nextBtn.disabled = position >= getMaxScroll() - 1;
    }

    prevBtn?.addEventListener('click', () => {
      position = Math.max(0, position - scroll.offsetWidth);
      update();
    });

    nextBtn?.addEventListener('click', () => {
      position = Math.min(getMaxScroll(), position + scroll.offsetWidth);
      update();
    });

    update();
  });
}

function initCardUI() {
  document.querySelectorAll('.property-card__photo-wrap').forEach(wrap => {
    if (wrap.querySelector('.property-card__dots')) return;
    wrap.insertAdjacentHTML('beforeend', `
      <button class="property-card__img-prev" aria-label="Previous photo" tabindex="-1">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M7 1L3 5l4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <button class="property-card__img-next" aria-label="Next photo" tabindex="-1">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M3 1l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="property-card__dots" aria-hidden="true">
        <span class="property-card__dot property-card__dot--active"></span>
        <span class="property-card__dot"></span>
        <span class="property-card__dot"></span>
      </div>
    `);
  });
}

window.addEventListener('hashchange', () => render(getPage()));

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-nav-link]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigate(link.dataset.navLink);
    });
  });

  initCategoryStrips();
  initDatePicker();
  initRoutePlannerSync();
  initHeroSearch();
  initCarousels();
  initCardUI();
  render(getPage());
});
