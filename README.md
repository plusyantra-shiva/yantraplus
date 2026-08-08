# ShopEase — E-commerce Website (HTML + CSS + JS only)

A complete, production-quality, responsive e-commerce website built with **pure HTML, CSS and JavaScript** — no frameworks, no backend, no database. Ready to deploy on **GitHub Pages** as-is.

---

## 📁 Folder Structure

```
shopease/
├── index.html                 → Home page (hero banner, categories, featured products)
├── products.html               → All products listing (search + category filter)
├── product.html                → Single product detail page (gallery, buy now)
├── payment.html                 → UPI payment page (QR + WhatsApp screenshot confirm)
├── about.html                  → About Us
├── contact.html                → Contact Us (form + info)
├── faq.html                    → FAQ accordion
├── privacy-policy.html
├── terms-conditions.html
├── shipping-policy.html
├── return-policy.html
├── 404.html                    → Custom "page not found" page
├── robots.txt                  → SEO crawler rules
├── sitemap.xml                 → SEO sitemap
├── css/
│   └── style.css               → All styling (mobile-first, responsive)
├── js/
│   ├── products-data.js        → PRODUCT & CATEGORY data ("database")
│   ├── main.js                 → Shared: header, footer, nav, loader, WhatsApp button, BRAND config
│   ├── products.js              → Products listing page logic (search/filter)
│   ├── product-detail.js        → Product detail page logic (gallery, related items)
│   └── payment.js               → Payment page logic (QR, UPI ID, WhatsApp link)
└── assets/
    └── images/
        ├── logo.svg, favicon.svg, hero-banner.svg
        ├── qr-placeholder.svg   → Replace with your real UPI QR code image
        ├── cat-*.svg            → Category icons
        └── products/            → product-{id}-{1,2,3}.svg (gallery placeholders)
```

---

## ✏️ How to Customize (Do This First!)

### 1. Brand details — `js/main.js`
At the top of this file, edit the `BRAND` object:
```js
const BRAND = {
  name: "ShopEase",
  whatsappNumber: "919999999999", // your WhatsApp number, country code + number, NO + or spaces
  email: "support@yourstore.com",
  phone: "+91 99999 99999",
  address: "Your store address",
  upiId: "yourid@upi",            // your real UPI ID
  instagram: "...", facebook: "...", twitter: "...", youtube: "..."
};
```

### 2. Products — `js/products-data.js`
Edit the `PRODUCTS` array — add, remove, or update products, prices, descriptions, categories and image paths.

### 3. Images — `assets/images/`
All images are simple placeholder SVGs so the site works instantly out of the box. Replace them with real photos:
- Keep the **same filenames** (e.g. `product-1-1.svg` → you can rename to `product-1-1.jpg` but then update the path in `products-data.js`), or simply overwrite the SVGs with your own images using the same filenames and `.jpg`/`.png` extensions (update the `<img>`/data references accordingly).
- Replace `assets/images/qr-placeholder.svg` with your real UPI QR code image (export from your UPI app).
- Replace `assets/images/logo.svg` and `assets/images/hero-banner.svg` with your brand assets.

### 4. Colors / Theme — `css/style.css`
All brand colors are CSS variables at the top of the file under `:root`. Change `--brand-primary` etc. to match your brand.

---

## 🚀 Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `shopease`).
2. Upload/push **all files in this folder** (keeping the folder structure) to the repository's root (or a `main` branch).
3. Go to your repo → **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**, Branch: `main`, folder: `/ (root)`.
5. Save. Your site will be live at:
   `https://<your-username>.github.io/<repo-name>/`
6. Update `robots.txt` and `sitemap.xml` with your real live URL, and update `<link rel="canonical">` tags in each HTML file's `<head>`.

No build step, no `npm install` — it's plain static HTML/CSS/JS, so it works immediately on GitHub Pages.

---

## 🛒 How the "Checkout" Flow Works (No Backend)

1. Customer clicks **Buy Now** on a product → goes to `payment.html?id=<productId>`.
2. `payment.html` shows the product, price, your UPI QR code and UPI ID.
3. Customer pays via any UPI app and takes a screenshot.
4. Customer taps **"Send Payment Screenshot on WhatsApp"** → opens WhatsApp Web/App with your number and a pre-filled message (including the product name and amount) — they just attach the screenshot and hit send.
5. You verify the payment manually and confirm the order with the customer on WhatsApp.

This keeps things 100% backend-free while still enabling real transactions.

---

## 🔍 Features Included

- Fully responsive, mobile-first design (phones → tablets → desktop)
- Sticky header with search bar + hamburger mobile nav
- Home page hero banner, category shortcuts, featured products
- Products page with live search + category filter (syncs to URL)
- Product detail page with image gallery (thumbnails), related products
- UPI payment page with QR + copyable UPI ID + WhatsApp confirmation button
- About, Contact (with client-side form → opens email app), FAQ (accordion)
- Privacy Policy, Terms & Conditions, Shipping Policy, Return & Refund Policy
- Floating WhatsApp chat button on every page
- Page loading spinner + smooth fade-in page transitions
- SEO meta tags (title, description, canonical, Open Graph) on every page
- `robots.txt` + `sitemap.xml`
- Custom 404 page
- Clean, commented code throughout — no external dependencies, no build tools

---

## 🧩 Notes

- All "data" lives in `js/products-data.js` — there is no database or server. To scale beyond a static catalog, you'd eventually want a real backend, but this is intentionally backend-free per the project requirements.
- Contact form uses `mailto:` (opens the visitor's email app) since there's no backend to receive form submissions.
- Tested to work by simply opening `index.html` in a browser, or via any static file server / GitHub Pages.
