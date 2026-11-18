# FOSSOR — Official GitHub Pages Website

FOSSOR's public pages are hosted in the shared developer website, not in the iOS source repository.

- [Game / Marketing (TR + EN)](https://gururorkun.github.io/fossor/)
- [Support (TR + EN)](https://gururorkun.github.io/fossor/support.html)
- [Privacy Policy (TR + EN)](https://gururorkun.github.io/fossor/privacy.html)
- [Privacy Choices](https://gururorkun.github.io/fossor/privacy.html#privacy-choices)
- [App Store — FOSSOR](https://apps.apple.com/us/app/fossor/id6834523577)
- [App Store short link](https://gururorkun.github.io/fossor/app.html)
- [Developer homepage](https://gururorkun.github.io/)

## Site implementation

- Uses shared `../assets/site.css` and `../assets/language.js`, with a dedicated `fossor.css` skin.
- Reuses the **actual icon binary** from the FOSSOR iOS repository.
- The mine illustration is CSS artwork, **not** a real gameplay screenshot.
- All App Store CTAs are active. The official listing URL in `app-store.js` activates links on FOSSOR pages and the developer homepage; static `apple-itunes-app` metadata is present on each FOSSOR page for iOS Safari.
- Public support contact is `g.o.urensel@hotmail.com`.
- No trackers, analytics scripts, cookies or embedded advertising are added to these static pages.
- All navigation, marketing and policy text is localized in Turkish and English. The shared selector persists preference.

## App Store Connect

Marketing URL: `https://gururorkun.github.io/fossor/`

Support URL: `https://gururorkun.github.io/fossor/support.html`

Privacy Policy URL: `https://gururorkun.github.io/fossor/privacy.html`

Privacy Choices URL: `https://gururorkun.github.io/fossor/privacy.html#privacy-choices`

## Published App Store listing

- **Official App Store URL:** https://apps.apple.com/us/app/fossor/id6834523577
- **Shareable short URL:** https://gururorkun.github.io/fossor/app.html
- **App Store ID:** `6834523577`

The FOSSOR hero and footer download buttons, the navigation links across
all three FOSSOR pages and the app badge/download action on the developer
homepage are enabled by `fossor/app-store.js`. iOS Smart App Banner metadata
is included statically in each FOSSOR page; the short URL redirects to the
public Apple listing and has a visible fallback link.

The app uses Unity LevelPlay for optional rewarded advertising and StoreKit 2
for Apple in-app purchases. Google Mobile Ads and Google UMP are not linked
in the current v0.18.3 build. Availability of ads remains subject to
privacy choices, regional requirements, provider fill and remote configuration.
