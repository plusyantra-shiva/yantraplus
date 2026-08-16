# YantraPlus — Pooja & Spiritual Essentials (HTML + CSS + JS only)

Production-ready, responsive e-commerce site for YantraPlus. Pure HTML/CSS/
vanilla JS, no backend, no framework. Deployed on **Cloudflare Pages**:
https://yantraplus.github.io/

## ⚠️ Before you go live — 1 thing you MUST do

**Confirm your UPI handle.** Open `js/main.js` and find:
```js
upiVpaHandle: "CONFIRM-HANDLE",
```
Replace `"CONFIRM-HANDLE"` with your real UPI app's suffix (e.g. `ybl` for
PhonePe, `oksbi` for SBI, `paytm` for Paytm — ask your UPI app what yours is).
Until you do this, the payment page shows `9743763945@CONFIRM-HANDLE`, which
will not work for real payments. The QR code (`assets/images/qr-placeholder.png`)
is generated to match this same UPI ID — regenerate it (or export your UPI
app's own QR) once you set the real handle.

## Folder structure

```
index.html, products.html, product.html, payment.html,
about.html, contact.html, faq.html,
privacy-policy.html, terms-conditions.html, shipping-policy.html, return-policy.html,
404.html, robots.txt, sitemap.xml
css/style.css
js/products-data.js   ← product catalog (20 real items from Meesho)
js/i18n.js              ← Hindi/English dictionary + language switching
js/main.js               ← BRAND config, header/footer, JSON-LD, shared helpers
js/products.js            ← listing page search/filter
js/product-detail.js       ← single product page + gallery
js/payment.js                ← full checkout flow
assets/images/                ← logo.png, favicon-32.png, hero-banner, category
                                thumbnails, about image, UPI QR (all JPG/WebP/PNG)
assets/images/products/        ← product-{id}-1.jpg (real photo) + generated
                                product-{id}-2/-3.jpg lifestyle/packaging shots
                                (each with a .webp version)
```

## Hindi / English toggle

A language button (top-right of the header) switches the whole site's
**chrome** — navigation, footer, buttons, form labels, and the entire
checkout flow — between English and Hindi. Choice is remembered
(localStorage) across pages.

**Deliberately left English-only:** product names/descriptions (sourced
verbatim from Meesho — translating them risks changing real product data,
which we were told never to do), and the body text of policy pages / FAQ
answers (legal/policy content needs a human review before publishing in
Hindi — a wrong word in a returns policy is worse than no translation).
Add Hindi versions of these yourself in `js/i18n.js` / the relevant HTML
files once you're ready, following the same `data-i18n` pattern used
elsewhere.

Note on SEO: this is a client-side toggle, not separate `/hi/` URLs, so
Google will index the page in whichever language is default (English) —
true bilingual SEO would need separate crawlable URLs per language, which
is a bigger change than this audit's scope.

## Supplementary product images (AI-generated — replace when ready)

Products 1–4 currently have a 3-image gallery (primary real photo + two
AI-generated lifestyle/packaging shots). Products 5–20 have their single
real photo only. These supplementary `product-{id}-2.jpg` / `-3.jpg` images
are branded placeholder visuals to keep the gallery looking complete — they
are **not** real product photos. Replace them with your own real photos
(same filenames) as soon as you have them; the gallery (`product-detail.js`)
switches automatically based on how many images each product lists in
`js/products-data.js`.

## Image optimization

All 20 real product photos were resized (max 1200px) and compressed:
**~38 MB → ~5 MB** (JPEG + WebP versions, ~87% smaller). Every product image
now loads via `<picture>` with a WebP source and JPEG fallback, using the
shared `productImageHTML()` helper in `js/main.js` (avoids duplicating this
markup in 4 different files). Below-the-fold images use `loading="lazy"`;
the hero banner does not (it's the LCP image).

## Deploy to Cloudflare Pages

Push everything in this folder (keeping the structure) to your connected
Git repo, or drag-and-drop the folder into the Cloudflare Pages dashboard.
No build command needed — this is a static site (build output directory: `/`).
All asset paths are relative, so this also works unmodified if you ever
serve it from a subfolder.

## Checkout flow (unchanged from before this audit)

Product page → **Buy Now** → Quantity → Delivery Details (name, mobile,
address, city, state, pincode) → Order Summary (subtotal/shipping/total,
Order ID in `AGB-YYYYMMDD-XXXX` format) → UPI QR + UPI ID → **Send Payment
Screenshot on WhatsApp** (pre-filled with the full order summary) → you
verify manually and confirm the order. No automatic payment verification.
