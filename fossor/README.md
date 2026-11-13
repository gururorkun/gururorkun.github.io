# FOSSOR — Official GitHub Pages Website

FOSSOR's public pages are hosted in the shared developer website, not in the iOS source repository.

- [Game / Marketing (TR + EN)](https://gururorkun.github.io/fossor/)
- [Support (TR + EN)](https://gururorkun.github.io/fossor/support.html)
- [Privacy Policy (TR + EN)](https://gururorkun.github.io/fossor/privacy.html)
- [Privacy Choices](https://gururorkun.github.io/fossor/privacy.html#privacy-choices)
- [Developer homepage](https://gururorkun.github.io/)

## Site implementation

- Uses shared `../assets/site.css` and `../assets/language.js`, with a dedicated `fossor.css` skin.
- Reuses the **actual icon binary** from the FOSSOR iOS repository.
- The mine illustration is CSS artwork, **not** a real gameplay screenshot.
- All App Store CTAs are already in place. The single launch URL in `app-store.js` activates every button, the developer homepage badge and adds Smart App Banner metadata for supported iOS Safari versions.
- Public support contact is `g.o.urensel@hotmail.com`.
- No trackers, analytics scripts, cookies or embedded advertising are added to these static pages.
- All navigation, marketing and policy text is localized in Turkish and English. The shared selector persists preference.

## App Store Connect

Marketing URL: `https://gururorkun.github.io/fossor/`

Support URL: `https://gururorkun.github.io/fossor/support.html`

Privacy Policy URL: `https://gururorkun.github.io/fossor/privacy.html`

Privacy Choices URL: `https://gururorkun.github.io/fossor/privacy.html#privacy-choices`

## Release day — edit one line only

After Apple publishes FOSSOR and provides the **verified public App Store URL**, open:

`fossor/app-store.js`

Change the single line:

```javascript
const APP_STORE_URL = '';
```

to:

```javascript
const APP_STORE_URL = 'https://apps.apple.com/app/idACTUAL_APP_ID';
```

Replace `idACTUAL_APP_ID` with the **real** listing identifier; this is an instructional example, not an actual URL. Commit the file to the **main** branch of `gururorkun.github.io`.

This one edit automatically enables App Store buttons in the FOSSOR hero,
footer CTA, all three FOSSOR page navigation bars and the developer
homepage card, along with an Apple Smart App Banner on iOS. Before adding
the link, all informational pages are fully usable; no broken App Store
links or misleading "available now" claims are displayed.

The app currently uses Unity LevelPlay + UMP for optional rewarded
advertising and StoreKit 2 for Apple IAP. Google Mobile Ads / AdMob is
temporarily compiled out in v0.18.2.
