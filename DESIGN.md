# Website standard

Use the homepage, `varlik-takip/` and `chess-cards/` as the reference implementation for future apps. GitHub Pages remains the host; no build step or third-party frontend dependency is required.

- Shared styles: `assets/site.css`. Use its spacing, typography, buttons, app cards, document layout and responsive navigation. Each app may override the accent, soft background and border colors through a body class.
- Shared language behavior: `assets/language.js`, loaded in the head. First visit follows the browser language (Turkish for `tr`, English otherwise). Explicit `?lang=tr` / `?lang=en` wins over saved preferences; a choice is saved across pages and visits. Legacy `#english` links remain supported. Storage being blocked must not break the selector.
- Translate short text using `data-tr` and `data-en`. Translate descriptions and titles too. Long support/privacy articles use `lang` and `data-content-lang` containers. Without JavaScript both article translations remain readable and Turkish short text is the fallback.
- Every page has the same header, TR/EN selector, skip link, main landmark and footer. Keep a single visible h1 per selected language, visible keyboard focus and at least 44px interactive targets where possible. Respect reduced motion.
- New app: add `<slug>/index.html`, `support.html`, `privacy.html` and `assets/icon.png`; add a homepage card. Use the real app icon, product hero, three feature summaries, App Store link, and support/privacy links. Do not invent store availability, screenshots, or features.
- Preserve published support/privacy URLs and disclosure text. Translate policies faithfully; changes to product behavior or policy substance need their own review.
- Keep the developer email, canonical URL, favicon and Apple touch icon accurate. All apps share root `app-ads.txt` for the same AdMob publisher; never duplicate publisher lines per app.

Before publication: check both languages, navigation and reload persistence; 390px and desktop layouts; every local link/image; legacy English links; and root `app-ads.txt`. App Store developer website should point to this domain so AdMob can discover the file.
