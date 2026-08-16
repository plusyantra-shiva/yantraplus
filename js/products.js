/* ============================================================
   PRODUCTS.JS — Logic for the Products Listing page
   Handles: rendering grid, category filter chips, live search,
   and reading ?search= / ?category= from the URL.
   ============================================================ */

let currentCategory = "all";
let currentSearch = "";

/* Category id -> translated label (CATEGORIES array from products-data.js
   still carries the English default label as a fallback). */
function categoryLabel(catId) {
  if (catId === 'all') return t('filter.all');
  if (catId === 'incense') return t('category.incense');
  if (catId === 'bracelets') return t('category.bracelets');
  return catId;
}

/* Generate the same product card markup used on the homepage.
   No MRP/discount badge or ratings are shown — Meesho doesn't display
   an MRP for these listings and we don't fabricate ratings. */
function buildProductCard(p) {
  return `
    <div class="product-card">
      <a href="product.html?id=${p.id}" class="thumb">
        ${productImageHTML(p.images[0], p.name, { loading: 'lazy' })}
      </a>
      <div class="product-info">
        <a href="product.html?id=${p.id}"><h3>${p.name}</h3></a>
        ${p.pack ? `<div class="reviews-count">${p.pack}</div>` : ''}
        <div class="price-row">
          <span class="price-now">₹${p.price.toLocaleString('en-IN')}</span>
        </div>
        <a href="product.html?id=${p.id}" class="btn btn-primary btn-block">${t('btn.buyNow')}</a>
      </div>
    </div>
  `;
}

/* Build the category filter chips */
function renderFilterChips() {
  const bar = document.getElementById("filter-bar");
  bar.innerHTML = CATEGORIES.map(cat => `
    <button class="filter-chip ${cat.id === currentCategory ? 'active' : ''}" data-cat="${cat.id}" aria-pressed="${cat.id === currentCategory}">
      ${categoryLabel(cat.id)}
    </button>
  `).join('');

  bar.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      currentCategory = chip.dataset.cat;
      renderFilterChips();
      renderProductList();
      updateURL();
    });
  });
}

/* Filter products by category + search text, then render */
function renderProductList() {
  const grid = document.getElementById("products-grid");
  const countEl = document.getElementById("results-count");

  let filtered = PRODUCTS.filter(p => {
    const matchesCategory = currentCategory === "all" || p.category === currentCategory;
    const matchesSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                           p.shortDesc.toLowerCase().includes(currentSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  countEl.textContent = `${filtered.length} ${t('products.resultsCount')}`;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    const noResults = document.getElementById("no-results");
    noResults.querySelector('p:last-child').textContent = t('products.noResults');
    noResults.style.display = 'block';
    return;
  }
  document.getElementById("no-results").style.display = 'none';
  grid.innerHTML = filtered.map(buildProductCard).join('');
}

/* Keep the URL in sync so filters are shareable/bookmarkable */
function updateURL() {
  const params = new URLSearchParams();
  if (currentCategory !== "all") params.set("category", currentCategory);
  if (currentSearch) params.set("search", currentSearch);
  const query = params.toString();
  history.replaceState(null, '', query ? `products.html?${query}` : 'products.html');
}

/* Read initial state from URL query params (?category=&search=) */
function readURLParams() {
  const params = new URLSearchParams(window.location.search);
  currentCategory = params.get("category") || "all";
  currentSearch = params.get("search") || "";
}

/* Wire up the on-page search input (separate from header search) */
function setupPageSearch() {
  const input = document.getElementById("page-search-input");
  input.value = currentSearch;
  input.placeholder = t('products.searchPlaceholder');
  input.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    renderProductList();
    updateURL();
  });
}

/* Initialize the products page */
function initProductsPage() {
  readURLParams();
  renderFilterChips();
  setupPageSearch();
  renderProductList();
}

document.addEventListener("DOMContentLoaded", initProductsPage);
document.addEventListener("yp:langchange", initProductsPage);
