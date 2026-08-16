/* ============================================================
   PRODUCT-DETAIL.JS — Logic for the single Product Detail page
   Handles: reading ?id= from URL, rendering product info,
   image gallery (main image + thumbnails), and Buy Now button.
   No stock counts, ratings, or MRP are shown — not available on
   the Meesho source listing, so we don't invent them here.
   ============================================================ */

/* Switch the main gallery image when a thumbnail is clicked */
function switchGalleryImage(index, product) {
  const mainImg = document.getElementById("pd-main-img");
  mainImg.src = product.images[index];
  // Also update the <source srcset> (WebP) so the main image actually
  // switches on browsers that support WebP — otherwise the <picture>'s
  // source would keep serving images[0] and the gallery would look stuck.
  const source = mainImg.parentElement.querySelector("source");
  if (source) source.srcset = product.images[index].replace(/\.(jpg|jpeg|png)$/i, '.webp');
  mainImg.alt = `${product.name} — image ${index + 1}`;

  document.querySelectorAll(".pd-thumbs img").forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index);
  });
}

/* Render the "You may also like" strip using other products from same category */
function renderRelatedProducts(product) {
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  if (related.length === 0) return '';
  const cards = related.map(p => `
      <div class="product-card">
        <a href="product.html?id=${p.id}" class="thumb">
          ${productImageHTML(p.images[0], p.name, { loading: 'lazy' })}
        </a>
        <div class="product-info">
          <a href="product.html?id=${p.id}"><h3>${p.name}</h3></a>
          <div class="price-row">
            <span class="price-now">₹${p.price.toLocaleString('en-IN')}</span>
          </div>
          <a href="product.html?id=${p.id}" class="btn btn-primary btn-block">${t('btn.buyNow')}</a>
        </div>
      </div>
    `).join('');
  return `
    <section class="section">
      <h2 class="section-title">${t('product.related')}</h2>
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
        <p>${t('product.notFound')}</p>
        <a href="products.html" class="btn btn-primary mt-2">${t('product.browseAll')}</a>
      </div>
    `;
    document.title = "Product Not Found — YantraPlus";
    return;
  }

  document.title = `${product.name} — Buy Online at ₹${product.price} | YantraPlus`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", product.shortDesc);

  // Category label follows the current UI language; product name and
  // description stay in English (sourced verbatim from Meesho — see
  // js/i18n.js header comment for why these aren't machine-translated).
  const categoryLabel = product.category === 'incense' ? t('category.incense') : t('category.bracelets');
  const hasMultipleImages = product.images.length > 1;

  container.innerHTML = `
    <div class="breadcrumb">
      <a href="index.html">${t('nav.home')}</a> / <a href="products.html">${t('nav.products')}</a> /
      <a href="products.html?category=${product.category}">${categoryLabel}</a> / ${product.name}
    </div>

    <div class="pd-layout">
      <!-- GALLERY -->
      <div class="pd-gallery">
        <div class="pd-main-image">
          <picture>
            <source srcset="${product.images[0].replace(/\.(jpg|jpeg|png)$/i, '.webp')}" type="image/webp">
            <img id="pd-main-img" src="${product.images[0]}" alt="${product.name}">
          </picture>
        </div>
        ${hasMultipleImages ? `
        <div class="pd-thumbs" id="pd-thumbs">
          ${product.images.map((img, i) => `
            ${productImageHTML(img, `${product.name} thumbnail ${i + 1}`, { className: i === 0 ? 'active' : '', loading: 'lazy' })}
          `).join('')}
        </div>` : ''}
      </div>

      <!-- INFO -->
      <div class="pd-info">
        <span class="pd-category-tag">${categoryLabel}</span>
        <h1>${product.name}</h1>
        ${product.pack ? `<p style="font-size:13.5px; color:var(--text-muted); margin-bottom:6px;"><strong>${t('product.pack')}:</strong> ${product.pack}</p>` : ''}
        <div class="pd-price-block">
          <span class="price-now">₹${product.price.toLocaleString('en-IN')}</span>
        </div>

        <div class="pd-desc">
          <h2>${t('product.description')}</h2>
          <p>${product.description}</p>
        </div>

        <div class="pd-actions">
          <a href="payment.html?id=${product.id}" class="btn btn-primary">${t('btn.buyNow')}</a>
          <a href="https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent('Hi! I am interested in: ' + product.name)}" target="_blank" rel="noopener" class="btn btn-outline" style="border-color:var(--brand-secondary); color:var(--brand-secondary);">${t('btn.askWhatsapp')}</a>
        </div>

        <div class="trust-badges">
          <span class="trust-badge">🔒 ${t('trust.securePayment')}</span>
          <span class="trust-badge">📦 ${t('trust.verifiedOrders')}</span>
        </div>
      </div>
    </div>

    ${renderRelatedProducts(product)}
  `;

  if (hasMultipleImages) {
    document.querySelectorAll(".pd-thumbs img").forEach(thumb => {
      thumb.addEventListener("click", () => {
        const idx = [...document.querySelectorAll(".pd-thumbs img")].indexOf(thumb);
        switchGalleryImage(idx, product);
      });
    });
  }

  injectProductStructuredData(product, categoryLabel);
}

/* ---------- SEO: JSON-LD structured data for this product ----------
   Adds Product schema (name/image/price/availability) and a
   BreadcrumbList so search engines can understand the page. Injected
   dynamically since product.html is a single template for all 20
   products. Removes any previous instance first (in case of re-render). */
function injectProductStructuredData(product, categoryLabel) {
  document.getElementById('product-jsonld')?.remove();
  document.getElementById('breadcrumb-jsonld')?.remove();

  const pageUrl = `https://yantraplus.pages.dev/product.html?id=${product.id}`;
  const imageUrl = `https://yantraplus.pages.dev/${product.images[0]}`;

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": [imageUrl],
    "description": product.shortDesc,
    "sku": `YP-${product.id}`,
    "brand": { "@type": "Brand", "name": "YantraPlus" },
    "offers": {
      "@type": "Offer",
      "url": pageUrl,
      "priceCurrency": "INR",
      "price": product.price,
      "availability": "https://schema.org/InStock"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yantraplus.pages.dev/index.html" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://yantraplus.pages.dev/products.html" },
      { "@type": "ListItem", "position": 3, "name": categoryLabel, "item": `https://yantraplus.pages.dev/products.html?category=${product.category}` },
      { "@type": "ListItem", "position": 4, "name": product.name, "item": pageUrl }
    ]
  };

  const s1 = document.createElement('script');
  s1.type = 'application/ld+json';
  s1.id = 'product-jsonld';
  s1.textContent = JSON.stringify(productSchema);
  document.head.appendChild(s1);

  const s2 = document.createElement('script');
  s2.type = 'application/ld+json';
  s2.id = 'breadcrumb-jsonld';
  s2.textContent = JSON.stringify(breadcrumbSchema);
  document.head.appendChild(s2);
}

document.addEventListener("DOMContentLoaded", renderProductDetail);
document.addEventListener("yp:langchange", renderProductDetail);
