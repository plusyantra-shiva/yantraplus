/* ============================================================
   PRODUCT-DETAIL.JS — Logic for the single Product Detail page
   Handles: reading ?id= from URL, rendering product info,
   image gallery (main image + thumbnails), and Buy Now button.
   ============================================================ */

/* Get product id from URL query string, e.g. product.html?id=3 */
function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"), 10);
}

/* Switch the main gallery image when a thumbnail is clicked */
function switchGalleryImage(index, product) {
  const mainImg = document.getElementById("pd-main-img");
  mainImg.src = product.images[index];
  mainImg.alt = `${product.name} — image ${index + 1}`;

  document.querySelectorAll(".pd-thumbs img").forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index);
  });
}

/* Render the "You may also like" strip using other products from same category */
function renderRelatedProducts(product) {
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  if (related.length === 0) return '';
  const cards = related.map(p => {
    const discount = Math.round(((p.mrp - p.price) / p.mrp) * 100);
    return `
      <div class="product-card">
        <a href="product.html?id=${p.id}" class="thumb">
          <span class="badge-discount">${discount}% OFF</span>
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
        </a>
        <div class="product-info">
          <a href="product.html?id=${p.id}"><h3>${p.name}</h3></a>
          <div class="price-row">
            <span class="price-now">₹${p.price.toLocaleString('en-IN')}</span>
            <span class="price-mrp">₹${p.mrp.toLocaleString('en-IN')}</span>
          </div>
          <a href="product.html?id=${p.id}" class="btn btn-primary btn-block">Buy Now</a>
        </div>
      </div>
    `;
  }).join('');
  return `
    <section class="section">
      <div class="section-title">You May Also Like</div>
      <div class="product-grid">${cards}</div>
    </section>
  `;
}

/* Main render function for the product detail page */
function renderProductDetail() {
  const id = getProductIdFromURL();
  const product = PRODUCTS.find(p => p.id === id);
  const container = document.getElementById("product-detail-container");

  if (!product) {
    container.innerHTML = `
      <div class="empty-state">
        <p style="font-size:40px;">😕</p>
        <p>Product not found.</p>
        <a href="products.html" class="btn btn-primary mt-2">Browse All Products</a>
      </div>
    `;
    document.title = "Product Not Found — ShopEase";
    return;
  }

  // Update SEO meta tags dynamically for this product
  document.title = `${product.name} — Buy Online at ₹${product.price} | ShopEase`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", product.shortDesc);

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  container.innerHTML = `
    <div class="breadcrumb">
      <a href="index.html">Home</a> / <a href="products.html">Products</a> /
      <a href="products.html?category=${product.category}">${product.category}</a> / ${product.name}
    </div>

    <div class="pd-layout">
      <!-- GALLERY -->
      <div class="pd-gallery">
        <div class="pd-main-image">
          <img id="pd-main-img" src="${product.images[0]}" alt="${product.name}">
        </div>
        <div class="pd-thumbs" id="pd-thumbs">
          ${product.images.map((img, i) => `
            <img src="${img}" alt="${product.name} thumbnail ${i + 1}" class="${i === 0 ? 'active' : ''}" data-index="${i}">
          `).join('')}
        </div>
      </div>

      <!-- INFO -->
      <div class="pd-info">
        <span class="pd-category-tag">${product.category}</span>
        <h1>${product.name}</h1>
        <div class="rating-row">
          <span class="rating-badge">${product.rating} ★</span>
          <span class="reviews-count">${product.reviews} ratings</span>
        </div>
        <div class="pd-price-block">
          <span class="price-now">₹${product.price.toLocaleString('en-IN')}</span>
          <span class="price-mrp">₹${product.mrp.toLocaleString('en-IN')}</span>
          <span class="price-off">${discount}% off</span>
        </div>
        <p class="pd-stock">✔ In Stock (${product.stock} available)</p>

        <div class="pd-desc">
          <h3>Product Description</h3>
          <p>${product.description}</p>
        </div>

        <div class="pd-actions">
          <a href="payment.html?id=${product.id}" class="btn btn-primary">Buy Now</a>
          <a href="https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent('Hi! I am interested in: ' + product.name)}" target="_blank" rel="noopener" class="btn btn-outline" style="border-color:var(--brand-secondary); color:var(--brand-secondary);">Ask on WhatsApp</a>
        </div>

        <div class="trust-badges">
          <span class="trust-badge">🚚 Free Delivery</span>
          <span class="trust-badge">↩️ 7-Day Returns</span>
          <span class="trust-badge">🔒 Secure UPI Payment</span>
          <span class="trust-badge">✅ Quality Checked</span>
        </div>
      </div>
    </div>

    ${renderRelatedProducts(product)}
  `;

  // Wire up thumbnail clicks after render
  document.querySelectorAll(".pd-thumbs img").forEach(thumb => {
    thumb.addEventListener("click", () => {
      switchGalleryImage(parseInt(thumb.dataset.index, 10), product);
    });
  });
}

document.addEventListener("DOMContentLoaded", renderProductDetail);
