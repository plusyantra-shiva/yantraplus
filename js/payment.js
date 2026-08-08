/* ============================================================
   PAYMENT.JS — Logic for the UPI Payment page
   Reads ?id= from URL, shows order summary + QR + UPI ID,
   and builds the pre-filled WhatsApp "send screenshot" link.
   ============================================================ */

function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"), 10);
}

function copyUPIId() {
  navigator.clipboard.writeText(BRAND.upiId).then(() => {
    const btn = document.getElementById("copy-upi-btn");
    const original = btn.textContent;
    btn.textContent = "Copied!";
    setTimeout(() => (btn.textContent = original), 1500);
  });
}

function renderPaymentPage() {
  const id = getProductIdFromURL();
  const product = PRODUCTS.find(p => p.id === id);
  const container = document.getElementById("payment-container");

  if (!product) {
    container.innerHTML = `
      <div class="empty-state">
        <p style="font-size:40px;">😕</p>
        <p>No product selected for payment.</p>
        <a href="products.html" class="btn btn-primary mt-2">Browse Products</a>
      </div>
    `;
    return;
  }

  document.title = `Pay ₹${product.price} for ${product.name} — ShopEase`;

  container.innerHTML = `
    <div class="breadcrumb"><a href="index.html">Home</a> / <a href="product.html?id=${product.id}">${product.name}</a> / Payment</div>

    <div class="payment-card">
      <h2 class="mb-1">Complete Your Payment</h2>
      <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">Scan the QR code or use the UPI ID below to pay via any UPI app (GPay, PhonePe, Paytm, BHIM).</p>

      <div class="payment-product">
        <img src="${product.images[0]}" alt="${product.name}">
        <div>
          <div class="name">${product.name}</div>
          <div class="amount">₹${product.price.toLocaleString('en-IN')}</div>
        </div>
      </div>

      <div class="qr-wrap">
        <img src="assets/images/qr-placeholder.svg" alt="UPI QR code for payment">
      </div>

      <div class="upi-id-box">
        <span id="upi-id-text">${BRAND.upiId}</span>
        <button id="copy-upi-btn" type="button">Copy</button>
      </div>
      <p style="font-size:12px; color:var(--text-muted);">(Replace this QR image & UPI ID in assets/images/qr-placeholder.svg and js/main.js)</p>

      <ol class="payment-steps">
        <li>Open any UPI app and scan the QR code above, or enter the UPI ID manually.</li>
        <li>Pay the exact amount shown: <strong>₹${product.price.toLocaleString('en-IN')}</strong>.</li>
        <li>Take a screenshot of your successful payment confirmation.</li>
        <li>Tap the button below to send us the screenshot on WhatsApp for order confirmation.</li>
      </ol>

      <a href="${buildWhatsappOrderLink(product.name, product.price)}" target="_blank" rel="noopener" class="whatsapp-confirm-btn">
        <svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4 0-.1-.2-.2-.5-.3zM12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.3a8.2 8.2 0 0 1-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.3 8.3 0 1 1 20.3 12 8.3 8.3 0 0 1 12 20.3z"/></svg>
        Send Payment Screenshot on WhatsApp
      </a>

      <p style="font-size:12px; color:var(--text-muted); margin-top:14px;">Your order will be confirmed once we verify the payment. This usually takes a few minutes during business hours.</p>
    </div>
  `;

  document.getElementById("copy-upi-btn").addEventListener("click", copyUPIId);
}

document.addEventListener("DOMContentLoaded", renderPaymentPage);
