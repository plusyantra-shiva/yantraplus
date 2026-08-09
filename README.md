# YantraPlus — Pooja & Spiritual Essentials (HTML + CSS + JS only)

A responsive e-commerce website for YantraPlus — incense sticks, dhoop, hawan cups
and Rudraksha bracelets — populated with the real catalog from
https://meesho.com/yantraplus. Pure HTML/CSS/JS, no backend, ready for GitHub
Pages at https://plusyantra-shiva.github.io/yantraplus/.

## ⚠️ Before you go live — 2 things you MUST do

1. **Confirm your UPI handle.** Open `js/main.js` and find:
   ```js
   upiVpaHandle: "CONFIRM-HANDLE",
   ```
   Replace `"CONFIRM-HANDLE"` with your real UPI app's suffix (see the chat
   summary for what this means and how to find yours). Until you do this,
   the payment page will show `9743763945@CONFIRM-HANDLE`, which will not work.

2. **Replace the QR code placeholder.** Swap `assets/images/qr-placeholder.svg`
   for your real UPI QR code (exported from your UPI app), keeping the same
   filename — or update the path in `js/payment.js`.

## Other things worth reviewing

- **Product images are placeholders.** Meesho blocks automated image downloads
  (robots.txt), so real product photos couldn't be pulled in. Replace the SVGs
  in `assets/images/products/` with real photos (from your Meesho seller
  dashboard) whenever you're ready — same filenames, or update `js/products-data.js`.
- **3 of 23 Meesho listings are missing.** The store's page 2 is JS-rendered
  and wasn't reachable — add them manually to `js/products-data.js` (same
  shape as the other 20 entries) once you have the details.
- **Shipping policy, return policy, and delivery timelines are editable
  placeholders** (clearly marked with a ⚠️ notice on those pages) — nothing
  invented was presented as fact. Fill in your real numbers before publishing.
- **WhatsApp number** is currently set to the same number you gave for UPI
  (9743763945). Change `whatsappNumber` in `js/main.js` if that's wrong.

## Folder structure

```
index.html, products.html, product.html, payment.html,
about.html, contact.html, faq.html,
privacy-policy.html, terms-conditions.html, shipping-policy.html, return-policy.html,
404.html, robots.txt, sitemap.xml
css/style.css
js/products-data.js   ← real product catalog (20 items) + BRAND config lives in main.js
js/main.js             ← BRAND config, header/footer, order ID + WhatsApp message builder
js/products.js          ← listing page search/filter
js/product-detail.js    ← single product page + gallery
js/payment.js            ← full checkout flow (qty → details → UPI → WhatsApp)
assets/images/           ← logo, hero, category icons, QR placeholder
assets/images/products/  ← per-product gallery placeholders (product-{id}-{1,2,3}.svg)
```

## Checkout flow (as built)

Product page → **Buy Now** → Quantity → Delivery Details (name, mobile, address,
city, state, pincode) → Order Summary (subtotal/shipping/total, Order ID in
`AGB-YYYYMMDD-XXXX` format) → UPI QR + UPI ID → **Send Payment Screenshot on
WhatsApp** (pre-filled with the full order summary) → you verify manually and
confirm the order. No automatic payment verification exists or is implemented.

## Deploy to GitHub Pages

Push everything in this folder (keeping the structure) to the root of your
`plusyantra-shiva/yantraplus` repo, `main` branch. Settings → Pages → Deploy
from branch → `main` / `/ (root)`. Paths are all relative, so this works
correctly under the `/yantraplus/` project path.
