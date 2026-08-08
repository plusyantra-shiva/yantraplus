/* ============================================================
   PRODUCTS.JS — Logic for the Products Listing page
   Handles: rendering grid, category filter chips, live search,
   and reading ?search= / ?category= from the URL.
   ============================================================ */

let currentCategory = "all";
let currentSearch = "";

/* Generate the same product card markup used on the homepage */
function buildProductCard(p) {
  const discount = Math.round(((p.mrp - p.price) / p.mrp) * 100);
  return `
    <div class="product-card">
      <a href="product.html?id=${p.id}" class="thumb">
        <span class="badge-discount">${discount}% OFF</span>
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
      </a>
      <div class="product-info">
        <a href="product.html?id=${p.id}"><h3>${p.name}</h3></a>
        <div class="rating-row">
          <span class="rating-badge">${p.rating} ★</span>
          <span class="reviews-count">(${p.reviews})</span>
        </div>
        <div class="price-row">
          <span class="price-now">₹${p.price.toLocaleString('en-IN')}</span>
          <span class="price-mrp">₹${p.mrp.toLocaleString('en-IN')}</span>
        </div>
        <a href="product.html?id=${p.id}" class="btn btn-primary btn-block">Buy Now</a>
      </div>
    </div>
  `;
}

/* Build the category filter chips */
function renderFilterChips() {
  const bar = document.getElementById("filter-bar");
  bar.innerHTML = CATEGORIES.map(cat => `
    <button class="filter-chip ${cat.id === currentCategory ? 'active' : ''}" data-cat="${cat.id}">
      ${cat.label}
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

  countEl.textContent = `${filtered.length} product${filtered.length !== 1 ? 's' : ''} found`;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    document.getElementById("no-results").style.display = 'block';
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
  input.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    renderProductList();
    updateURL();
  });
}

/* Initialize the products page */
document.addEventListener("DOMContentLoaded", () => {
  readURLParams();
  renderFilterChips();
  setupPageSearch();
  renderProductList();
});
