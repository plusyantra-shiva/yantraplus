/* ============================================================
   MAIN.JS — Shared logic used across ALL pages
   (header injection, mobile nav, loader, WhatsApp button, search)
   ============================================================ */

/* ---------- BRAND CONFIG ----------
   IMPORTANT — read before going live:
   - whatsappNumber and phone are both set to the mobile number you gave
     us (9743763945), assuming it's the number you want customers to
     reach you on. Change it below if you'd rather use a different number
     for WhatsApp vs. the UPI-linked number.
   - upiVpaHandle is a PLACEHOLDER. We were told not to guess the UPI
     handle suffix (@ybl, @oksbi, @paytm, etc.), so the payment page will
     clearly show "9743763945@CONFIRM-HANDLE" until you fill this in.
     Tell us your bank/UPI app's handle and we'll set it correctly —
     see the chat summary for exactly what to provide.
   - email, address, social links, and any certifications/claims are
     intentionally left blank/placeholder since Meesho's listing and
     our conversation didn't provide them. Fill in only what's true. */
const BRAND = {
  name: "YantraPlus",
  tagline: "Pooja & Spiritual Essentials",
  whatsappNumber: "919743763945", // ASSUMED same as the UPI mobile number — confirm or change
  email: "", // not provided — add your real email here if you want it shown
  phone: "+91 97437 63945",
  address: "", // not provided — add your real business address here if you want it shown
  upiMobile: "9743763945",
  upiVpaHandle: "CONFIRM-HANDLE", // PLACEHOLDER — replace with your real handle (see chat)
  instagram: "", // not provided
  facebook: "", // not provided
  twitter: "", // not provided
  youtube: "" // not provided
};

/* Full UPI VPA built from the mobile number + handle above.
   Will literally show "9743763945@CONFIRM-HANDLE" until upiVpaHandle
   is replaced with the real value. */
const UPI_ID = `${BRAND.upiMobile}@${BRAND.upiVpaHandle}`;

/* ---------- HIDE PAGE LOADER ---------- */
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  if (loader) {
    setTimeout(() => loader.classList.add("hidden"), 250);
  }
});

/* ---------- INJECT HEADER ---------- */
function renderHeader(activePage) {
  const header = document.getElementById("site-header");
  if (!header) return;

  header.innerHTML = `
    <div class="container header-inner">
      <button class="nav-toggle" id="nav-toggle" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
      <a href="index.html" class="logo-link">
        <img src="assets/images/logo.svg" alt="${BRAND.name} logo" width="140" height="38">
      </a>
      <form class="header-search" id="header-search-form" role="search">
        <input type="search" id="header-search-input" placeholder="Search for products..." aria-label="Search products">
        <button type="submit" aria-label="Search">🔍</button>
      </form>
      <nav class="site-nav" id="site-nav">
        <ul>
          <li><a href="index.html" data-page="home">Home</a></li>
          <li><a href="products.html" data-page="products">Products</a></li>
          <li><a href="about.html" data-page="about">About Us</a></li>
          <li><a href="contact.html" data-page="contact">Contact Us</a></li>
          <li><a href="faq.html" data-page="faq">FAQ</a></li>
        </ul>
      </nav>
    </div>
    <div class="nav-overlay" id="nav-overlay"></div>
  `;

  // Highlight active nav link
  if (activePage) {
    const link = header.querySelector(`[data-page="${activePage}"]`);
    if (link) link.classList.add("active");
  }

  // Mobile nav toggle
  const navToggle = document.getElementById("nav-toggle");
  const siteNav = document.getElementById("site-nav");
  const overlay = document.getElementById("nav-overlay");
  function closeNav() {
    siteNav.classList.remove("open");
    overlay.classList.remove("open");
  }
  navToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
    overlay.classList.toggle("open");
  });
  overlay.addEventListener("click", closeNav);
  siteNav.querySelectorAll("a").forEach(a => a.addEventListener("click", closeNav));

  // Header search -> redirect to products.html with query param
  const searchForm = document.getElementById("header-search-form");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = document.getElementById("header-search-input").value.trim();
    window.location.href = `products.html?search=${encodeURIComponent(query)}`;
  });
}

/* ---------- INJECT FOOTER ---------- */
function renderFooter() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;

  // Only render social icons for links that were actually provided (never fabricated)
  const socialLinks = [
    { url: BRAND.facebook, label: "Facebook", path: 'M22 12a10 10 0 1 0-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.9-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12' },
    { url: BRAND.instagram, label: "Instagram", path: 'M12 2c2.7 0 3.1 0 4.1.06 1.1.05 1.8.2 2.4.45.7.27 1.2.6 1.7 1.1.5.5.87 1 1.1 1.7.25.6.4 1.3.45 2.4.06 1 .06 1.4.06 4.1s0 3.1-.06 4.1c-.05 1.1-.2 1.8-.45 2.4a4.6 4.6 0 0 1-1.1 1.7c-.5.5-1 .87-1.7 1.1-.6.25-1.3.4-2.4.45-1 .06-1.4.06-4.1.06s-3.1 0-4.1-.06c-1.1-.05-1.8-.2-2.4-.45a4.6 4.6 0 0 1-1.7-1.1 4.6 4.6 0 0 1-1.1-1.7c-.25-.6-.4-1.3-.45-2.4C2 15.1 2 14.7 2 12s0-3.1.06-4.1c.05-1.1.2-1.8.45-2.4.24-.7.6-1.2 1.1-1.7.5-.5 1-.87 1.7-1.1.6-.25 1.3-.4 2.4-.45C8.9 2 9.3 2 12 2zm0 1.8c-2.66 0-2.98 0-4.04.06-.9.04-1.4.19-1.7.31-.44.17-.75.37-1.08.7-.33.33-.53.64-.7 1.08-.12.32-.27.8-.31 1.7C4.1 9 4.1 9.3 4.1 12s0 2.98.06 4.04c.04.9.19 1.4.31 1.7.17.44.37.75.7 1.08.33.33.64.53 1.08.7.32.12.8.27 1.7.31 1.06.06 1.38.06 4.04.06s2.98 0 4.04-.06c.9-.04 1.4-.19 1.7-.31.44-.17.75-.37 1.08-.7.33-.33.53-.64.7-1.08.12-.32.27-.8.31-1.7.06-1.06.06-1.38.06-4.04s0-2.98-.06-4.04c-.04-.9-.19-1.4-.31-1.7a2.9 2.9 0 0 0-.7-1.08 2.9 2.9 0 0 0-1.08-.7c-.32-.12-.8-.27-1.7-.31C14.98 3.8 14.66 3.8 12 3.8zm0 3.05a5.15 5.15 0 1 1 0 10.3 5.15 5.15 0 0 1 0-10.3zm0 8.5a3.35 3.35 0 1 0 0-6.7 3.35 3.35 0 0 0 0 6.7zm5.35-8.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z' },
    { url: BRAND.twitter, label: "Twitter", path: 'M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.05a4.1 4.1 0 0 0 3.3 4 4.2 4.2 0 0 1-1.9.07 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.9c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.2z' },
    { url: BRAND.youtube, label: "YouTube", path: 'M23 12s0-3.6-.46-5.3a2.9 2.9 0 0 0-2-2C18.9 4.2 12 4.2 12 4.2s-6.9 0-8.54.5a2.9 2.9 0 0 0-2 2C1 8.4 1 12 1 12s0 3.6.46 5.3a2.9 2.9 0 0 0 2 2c1.64.5 8.54.5 8.54.5s6.9 0 8.54-.5a2.9 2.9 0 0 0 2-2C23 15.6 23 12 23 12zM9.8 15.5v-7l6.2 3.5-6.2 3.5z' }
  ].filter(s => s.url);

  const socialHtml = socialLinks.length
    ? `<div class="social-icons">${socialLinks.map(s => `
        <a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.label}">
          <svg viewBox="0 0 24 24"><path d="${s.path}"/></svg>
        </a>`).join('')}</div>`
    : '';

  const contactLines = [
    BRAND.phone ? `<li><a href="tel:${BRAND.phone.replace(/\s/g,'')}">📞 ${BRAND.phone}</a></li>` : '',
    BRAND.email ? `<li><a href="mailto:${BRAND.email}">✉️ ${BRAND.email}</a></li>` : '',
    BRAND.address ? `<li>📍 ${BRAND.address}</li>` : ''
  ].join('');

  footer.innerHTML = `
    <div class="container footer-inner">
      <div class="footer-col">
        <img src="assets/images/logo.svg" alt="${BRAND.name}" width="150" style="margin-bottom:12px;">
        <p>Pooja & spiritual essentials — incense, dhoop and Rudraksha bracelets, sourced and sold by ${BRAND.name}.</p>
        ${socialHtml}
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="products.html">All Products</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="faq.html">FAQ</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Policies</h4>
        <ul>
          <li><a href="privacy-policy.html">Privacy Policy</a></li>
          <li><a href="terms-conditions.html">Terms &amp; Conditions</a></li>
          <li><a href="shipping-policy.html">Shipping Policy</a></li>
          <li><a href="return-policy.html">Return &amp; Refund Policy</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Get In Touch</h4>
        <ul>${contactLines || '<li>Message us on WhatsApp — button on every page</li>'}</ul>
        <div class="payment-icons">
          <span>UPI</span>
        </div>
      </div>
    </div>
    <div class="footer-bottom container">
      &copy; <span id="footer-year"></span> ${BRAND.name}. All rights reserved.
    </div>
  `;

  document.getElementById("footer-year").textContent = new Date().getFullYear();
}

/* ---------- INJECT WHATSAPP FLOATING BUTTON ---------- */
function renderWhatsappButton() {
  const el = document.getElementById("whatsapp-float");
  if (!el) return;
  const message = encodeURIComponent(`Hi ${BRAND.name}! I have a question about your products.`);
  el.innerHTML = `
    <a href="https://wa.me/${BRAND.whatsappNumber}?text=${message}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4 0-.1-.2-.2-.5-.3zM12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.3a8.2 8.2 0 0 1-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.3 8.3 0 1 1 20.3 12 8.3 8.3 0 0 1 12 20.3z"/></svg>
    </a>
  `;
}

/* ---------- ORDER ID GENERATOR ----------
   Format: AGB-YYYYMMDD-XXXX (AGB = Agarbatti, matches YantraPlus's product line) */
function generateOrderId() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const rand = String(Math.floor(1000 + Math.random() * 9000)); // 4-digit random
  return `AGB-${y}${m}${d}-${rand}`;
}

/* ---------- WHATSAPP ORDER CONFIRMATION MESSAGE BUILDER ----------
   Builds the full pre-filled message customers send after paying,
   including order ID, their details, and the full order summary. */
function buildWhatsappOrderLink(order) {
  const {
    orderId, productName, quantity, price, subtotal, shipping, total,
    customerName, customerMobile, address, city, state, pincode
  } = order;

  const lines = [
    `Hi ${BRAND.name}! I've completed my UPI payment. Here are my order details:`,
    ``,
    `🧾 Order ID: ${orderId}`,
    ``,
    `👤 Name: ${customerName}`,
    `📱 Mobile: ${customerMobile}`,
    `🏠 Address: ${address}, ${city}, ${state} - ${pincode}`,
    ``,
    `📦 Product: ${productName}`,
    `🔢 Quantity: ${quantity}`,
    `💰 Price: ₹${price} x ${quantity}`,
    `Subtotal: ₹${subtotal}`,
    `Shipping: ${shipping === 0 ? 'FREE' : '₹' + shipping}`,
    `Total: ₹${total}`,
    ``,
    `✅ Payment Status: Paid via UPI (screenshot attached)`,
    ``,
    `Please confirm my order. Thank you! 🙏`
  ];

  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
}

/* ---------- RUN ON EVERY PAGE ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderFooter();
  renderWhatsappButton();
});
