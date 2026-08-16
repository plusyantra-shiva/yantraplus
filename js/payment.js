/* ============================================================
   PAYMENT.JS — Full checkout flow
   Product → Customer Details → Order Summary → UPI Payment → WhatsApp Confirmation
   All calculations (subtotal/total) are dynamic. Payment stays 100%
   manual: customer pays via UPI, screenshots it, sends on WhatsApp,
   and YOU verify it manually. No automatic payment verification.
   ============================================================ */

/* EDIT THIS: shipping fee in ₹. Not provided by Meesho/you, so it
   defaults to 0 (free). Change if you charge for delivery. */
const SHIPPING_FEE = 0;

let checkoutState = {
  product: null,
  quantity: 1,
  step: 1, // 1 = quantity, 2 = customer details, 3 = payment
  customer: { name: '', mobile: '', address: '', city: '', state: '', pincode: '' },
  orderId: null
};

function calcTotals() {
  const subtotal = checkoutState.product.price * checkoutState.quantity;
  const total = subtotal + SHIPPING_FEE;
  return { subtotal, shipping: SHIPPING_FEE, total };
}

/* ---------- STEP 1: Quantity ---------- */
function renderStep1() {
  const p = checkoutState.product;
  const container = document.getElementById("payment-container");
  container.innerHTML = `
    <div class="breadcrumb"><a href="index.html">${t('nav.home')}</a> / <a href="product.html?id=${p.id}">${p.name}</a> / ${t('checkout.title')}</div>
    <div class="payment-card">
      <h1 class="mb-1" style="font-size:20px;">${t('checkout.title')}</h1>
      <div class="payment-product">
        ${productImageHTML(p.images[0], p.name, { loading: 'eager' })}
        <div>
          <div class="name">${p.name}</div>
          <div class="amount">₹${p.price} ${p.pack ? '· ' + p.pack : ''}</div>
        </div>
      </div>
      <div class="form-group">
        <label for="qty-input">${t('checkout.quantity')}</label>
        <div style="display:flex; align-items:center; gap:12px; justify-content:center;">
          <button type="button" id="qty-minus" class="btn btn-outline" style="border-color:var(--brand-secondary); color:var(--brand-secondary); padding:8px 16px;" aria-label="Decrease quantity">−</button>
          <span id="qty-display" style="font-size:20px; font-weight:700; min-width:30px;" aria-live="polite">${checkoutState.quantity}</span>
          <button type="button" id="qty-plus" class="btn btn-outline" style="border-color:var(--brand-secondary); color:var(--brand-secondary); padding:8px 16px;" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button type="button" id="continue-to-details" class="btn btn-primary btn-block mt-2">${t('checkout.continueToDetails')}</button>
    </div>
  `;

  document.getElementById("qty-minus").addEventListener("click", () => {
    if (checkoutState.quantity > 1) {
      checkoutState.quantity--;
      document.getElementById("qty-display").textContent = checkoutState.quantity;
    }
  });
  document.getElementById("qty-plus").addEventListener("click", () => {
    checkoutState.quantity++;
    document.getElementById("qty-display").textContent = checkoutState.quantity;
  });
  document.getElementById("continue-to-details").addEventListener("click", () => {
    checkoutState.step = 2;
    renderStep2();
  });
}

/* ---------- STEP 2: Customer Details ---------- */
function renderStep2() {
  const container = document.getElementById("payment-container");
  const c = checkoutState.customer;
  container.innerHTML = `
    <div class="breadcrumb"><a href="index.html">${t('nav.home')}</a> / ${t('checkout.title')} / ${t('checkout.deliveryDetails')}</div>
    <div class="payment-card" style="text-align:left;">
      <h1 class="mb-1" style="text-align:center; font-size:20px;">${t('checkout.deliveryDetails')}</h1>
      <form id="customer-form" class="contact-form">
        <div class="form-group">
          <label for="c-name">${t('checkout.fullName')} *</label>
          <input type="text" id="c-name" required value="${c.name}" placeholder="${t('checkout.fullName')}">
        </div>
        <div class="form-group">
          <label for="c-mobile">${t('checkout.mobile')} *</label>
          <input type="tel" id="c-mobile" required pattern="[0-9]{10}" value="${c.mobile}" placeholder="10-digit mobile number">
        </div>
        <div class="form-group">
          <label for="c-address">${t('checkout.address')} *</label>
          <textarea id="c-address" rows="3" required placeholder="House/Flat No., Street, Landmark">${c.address}</textarea>
        </div>
        <div class="form-group">
          <label for="c-city">${t('checkout.city')} *</label>
          <input type="text" id="c-city" required value="${c.city}" placeholder="${t('checkout.city')}">
        </div>
        <div class="form-group">
          <label for="c-state">${t('checkout.state')} *</label>
          <input type="text" id="c-state" required value="${c.state}" placeholder="${t('checkout.state')}">
        </div>
        <div class="form-group">
          <label for="c-pincode">${t('checkout.pincode')} *</label>
          <input type="text" id="c-pincode" required pattern="[0-9]{6}" value="${c.pincode}" placeholder="6-digit pincode">
        </div>
        <button type="submit" class="btn btn-primary btn-block mt-1">${t('checkout.continueToPayment')}</button>
        <button type="button" id="back-to-qty" class="btn btn-outline btn-block" style="border-color:var(--brand-secondary); color:var(--brand-secondary);">${t('checkout.back')}</button>
      </form>
    </div>
  `;

  document.getElementById("back-to-qty").addEventListener("click", () => {
    checkoutState.step = 1;
    renderStep1();
  });

  document.getElementById("customer-form").addEventListener("submit", (e) => {
    e.preventDefault();
    checkoutState.customer = {
      name: document.getElementById("c-name").value.trim(),
      mobile: document.getElementById("c-mobile").value.trim(),
      address: document.getElementById("c-address").value.trim(),
      city: document.getElementById("c-city").value.trim(),
      state: document.getElementById("c-state").value.trim(),
      pincode: document.getElementById("c-pincode").value.trim()
    };
    checkoutState.orderId = generateOrderId();
    checkoutState.step = 3;
    renderStep3();
  });
}

/* ---------- STEP 3: Order Summary + UPI Payment ---------- */
function renderStep3() {
  const p = checkoutState.product;
  const c = checkoutState.customer;
  const { subtotal, shipping, total } = calcTotals();
  const container = document.getElementById("payment-container");

  const upiHandlePlaceholder = BRAND.upiVpaHandle === "CONFIRM-HANDLE";

  container.innerHTML = `
    <div class="breadcrumb"><a href="index.html">${t('nav.home')}</a> / ${t('checkout.title')} / ${t('checkout.payVia')}</div>
    <div class="payment-card" style="text-align:left;">
      <h1 class="mb-1" style="text-align:center; font-size:20px;">${t('checkout.orderSummary')}</h1>

      <div class="content-block" style="box-shadow:none; background:var(--bg-light); padding:14px; margin-bottom:14px;">
        <p style="font-size:12px; color:var(--text-muted); margin-bottom:6px;">${t('checkout.orderId')}</p>
        <p style="font-weight:700; font-size:15px; margin-bottom:12px;">${checkoutState.orderId}</p>

        <p style="font-size:12px; color:var(--text-muted); margin-bottom:2px;">${t('checkout.deliverTo')}</p>
        <p style="font-size:13.5px; margin-bottom:0;">${c.name} · ${c.mobile}</p>
        <p style="font-size:13.5px; color:var(--text-muted);">${c.address}, ${c.city}, ${c.state} - ${c.pincode}</p>
      </div>

      <div class="payment-product">
        ${productImageHTML(p.images[0], p.name, { loading: 'eager' })}
        <div>
          <div class="name">${p.name}</div>
          <div style="font-size:12px; color:var(--text-muted);">${t('checkout.quantity')}: ${checkoutState.quantity} × ₹${p.price}</div>
        </div>
      </div>

      <table style="width:100%; font-size:13.5px; margin:14px 0;">
        <tr><td style="padding:4px 0;">${t('checkout.subtotal')}</td><td style="text-align:right;">₹${subtotal}</td></tr>
        <tr><td style="padding:4px 0;">${t('checkout.shipping')}</td><td style="text-align:right;">${shipping === 0 ? t('checkout.free') : '₹' + shipping}</td></tr>
        <tr style="font-weight:700; font-size:15px; border-top:1px solid var(--border-color);"><td style="padding:8px 0;">${t('checkout.total')}</td><td style="text-align:right;">₹${total}</td></tr>
      </table>

      <hr style="border:none; border-top:1px solid var(--border-color); margin:14px 0;">

      <h2 style="text-align:center; font-size:16px; margin-bottom:10px;">${t('checkout.payVia')}</h2>
      <div class="text-center">
        <div class="qr-wrap">
          <img src="assets/images/qr-placeholder.png" alt="UPI QR code for payment" width="200" height="200">
        </div>
        <div class="upi-id-box">
          <span id="upi-id-text">${UPI_ID}</span>
          <button id="copy-upi-btn" type="button">Copy</button>
        </div>
        ${upiHandlePlaceholder ? `<p style="font-size:12px; color:var(--danger); font-weight:600; margin-bottom:6px;">⚠️ UPI handle not confirmed yet — this ID won't work until the seller updates it (see setup notes).</p>` : ''}
        <p style="font-size:12px; color:var(--text-muted);">${t('checkout.scanOrPay')}</p>
      </div>

      <ol class="payment-steps">
        <li>Pay the exact total shown above: <strong>₹${total}</strong>.</li>
        <li>Take a screenshot of your successful payment confirmation.</li>
        <li>Tap the button below to send your order details + screenshot on WhatsApp.</li>
        <li>We'll verify your payment manually and confirm your order.</li>
      </ol>

      <a href="#" id="whatsapp-confirm-btn" class="whatsapp-confirm-btn">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4 0-.1-.2-.2-.5-.3zM12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.3a8.2 8.2 0 0 1-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.3 8.3 0 1 1 20.3 12 8.3 8.3 0 0 1 12 20.3z"/></svg>
        ${t('checkout.sendScreenshot')}
      </a>

      <button type="button" id="back-to-details" class="btn btn-outline btn-block mt-1" style="border-color:var(--brand-secondary); color:var(--brand-secondary);">${t('checkout.back')}</button>

      <p style="font-size:12px; color:var(--text-muted); margin-top:14px; text-align:center;">${t('checkout.manualNote')}</p>
    </div>
  `;

  document.getElementById("copy-upi-btn").addEventListener("click", () => {
    navigator.clipboard.writeText(UPI_ID).then(() => {
      const btn = document.getElementById("copy-upi-btn");
      const original = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = original), 1500);
    });
  });

  document.getElementById("back-to-details").addEventListener("click", () => {
    checkoutState.step = 2;
    renderStep2();
  });

  document.getElementById("whatsapp-confirm-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const link = buildWhatsappOrderLink({
      orderId: checkoutState.orderId,
      productName: p.name,
      quantity: checkoutState.quantity,
      price: p.price,
      subtotal, shipping, total,
      customerName: c.name,
      customerMobile: c.mobile,
      address: c.address,
      city: c.city,
      state: c.state,
      pincode: c.pincode
    });
    window.open(link, '_blank');
  });
}

/* Re-render whichever step the customer is currently on — used after a
   language switch so we never lose their progress (quantity, filled-in
   delivery details, or the generated Order ID on step 3). */
function rerenderCurrentStep() {
  if (!checkoutState.product) return;
  if (checkoutState.step === 1) renderStep1();
  else if (checkoutState.step === 2) renderStep2();
  else if (checkoutState.step === 3) renderStep3();
}

/* ---------- INIT ---------- */
function initCheckout() {
  const id = getProductIdFromURL();
  const product = PRODUCTS.find(p => p.id === id);
  const container = document.getElementById("payment-container");

  if (!product) {
    container.innerHTML = `
      <div class="empty-state">
        <p style="font-size:40px;">😕</p>
        <p>${t('product.notFound')}</p>
        <a href="products.html" class="btn btn-primary mt-2">${t('product.browseAll')}</a>
      </div>
    `;
    return;
  }

  document.title = `${t('checkout.title')} — ${product.name} | ${BRAND.name}`;
  checkoutState.product = product;
  renderStep1();
}

document.addEventListener("DOMContentLoaded", initCheckout);
document.addEventListener("yp:langchange", rerenderCurrentStep);
