/* FOSSOR App Store launch configuration.
   At launch, change ONLY the value below to the verified Apple app URL.
   Example format: https://apps.apple.com/app/id1234567890
   Do not use a guessed ID or the App Store Connect (private) URL. */
(() => {
  'use strict';

  const APP_STORE_URL = '';

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

    // On the app's own pages only, activate Apple's iOS Smart App Banner.
    if (document.body && document.body.classList.contains('fossor')) {
      const banner = document.createElement('meta');
      banner.name = 'apple-itunes-app';
      banner.content = 'app-id=' + apple.id;
      document.head.appendChild(banner);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', activateStoreLinks, { once: true });
  } else {
    activateStoreLinks();
  }
})();
