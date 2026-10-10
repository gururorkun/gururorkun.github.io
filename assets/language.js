(() => {
  const key = 'go-site-language';
  let saved; try { saved = localStorage.getItem(key); } catch (_) {}
  const requested = new URLSearchParams(location.search).get('lang');
  let language = requested === 'tr' || requested === 'en' ? requested : saved === 'tr' || saved === 'en' ? saved : (navigator.language || 'en').toLowerCase().startsWith('tr') ? 'tr' : 'en';
  if (!requested && location.hash === '#english') language = 'en';
  document.documentElement.classList.add('js');
  document.documentElement.lang = language;
  function apply(next, persist) {
    language = next;
    document.documentElement.lang = next;
    document.querySelectorAll('[data-tr][data-en]').forEach(el => {
      if (el.tagName === 'META') el.content = el.dataset[next];
      else el.textContent = el.dataset[next];
    });
    document.querySelectorAll('[data-content-lang]').forEach(el => { el.hidden = el.dataset.contentLang !== next; });
    document.querySelectorAll('[data-language]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.language === next)));
    if (persist || requested) { try { localStorage.setItem(key, next); } catch (_) {} }
    // Keep explicit language links and legacy English anchors consistent with the selection.
    if (persist && (requested || location.hash === '#english')) {
      const url = new URL(location.href); url.searchParams.set('lang', next);
      if (url.hash === '#english') url.hash = '';
      history.replaceState(null, '', url);
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    apply(language, false);
    document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => apply(button.dataset.language, true)));
  });
})();
