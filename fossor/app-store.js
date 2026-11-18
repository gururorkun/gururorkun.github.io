/* Official FOSSOR App Store listing. One configuration activates download links
   on the FOSSOR pages and the shared developer homepage. */
(() => {
  'use strict';

  const APP_STORE_URL = 'https://apps.apple.com/us/app/fossor/id6834523577';

  function verifiedAppStoreLink(value) {
    if (!value || !value.trim()) return null;
    try {
      const url = new URL(value.trim());
      const match = url.pathname.match(/\/app\/(?:[^/]+\/)?id([0-9]+)\/?$/);
      if (url.protocol !== 'https:' || url.hostname !== 'apps.apple.com' || !match) {
        return null;
      }
      return { href: url.href, id: match[1] };
    } catch (_) {
      return null;
    }
  }

  function activateStoreLinks() {
    const apple = verifiedAppStoreLink(APP_STORE_URL);
    if (!apple) return;

    document.querySelectorAll('[data-fossor-app-store-link]').forEach(link => {
      link.href = apple.href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.hidden = false;
    });
    document.querySelectorAll('[data-fossor-store-idle]').forEach(element => {
      element.hidden = true;
    });

    // Smart App Banner metadata is declared in each FOSSOR HTML <head>.
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', activateStoreLinks, { once: true });
  } else {
    activateStoreLinks();
  }
})();
