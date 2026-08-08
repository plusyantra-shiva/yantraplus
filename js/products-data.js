/* ============================================================
   PRODUCTS DATA FILE
   ------------------------------------------------------------
   This is your "database" — no backend needed.
   To add/edit/remove products, just edit this array.
   Each product needs a unique numeric "id".
   "images" array = product gallery (replace with your own photos,
   keep same filenames or update the paths).
   ============================================================ */

const PRODUCTS = [
  {
    id: 1,
    name: "Wireless Bluetooth Earbuds Pro",
    category: "electronics",
    price: 1499,
    mrp: 2999,
    rating: 4.3,
    reviews: 128,
    shortDesc: "Crystal clear sound with 24hr battery backup.",
    description:
      "Experience premium sound quality with our Wireless Bluetooth Earbuds Pro. Featuring active noise cancellation, touch controls, IPX5 water resistance, and up to 24 hours of total battery life with the charging case. Perfect for workouts, calls, and daily commute.",
    images: [
      "assets/images/products/product-1-1.svg",
      "assets/images/products/product-1-2.svg",
      "assets/images/products/product-1-3.svg"
    ],
    stock: 45
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    category: "electronics",
    price: 2299,
    mrp: 4499,
    rating: 4.5,
    reviews: 302,
    shortDesc: "Track your health 24/7 with heart rate & SpO2 monitor.",
    description:
      "Stay on top of your fitness goals with this Smart Fitness Watch. Includes heart rate monitoring, SpO2 tracking, sleep analysis, 100+ workout modes, and smartphone notifications. Water resistant and up to 7 days battery life.",
    images: [
      "assets/images/products/product-2-1.svg",
      "assets/images/products/product-2-2.svg",
      "assets/images/products/product-2-3.svg"
    ],
    stock: 60
  },
  {
    id: 3,
    name: "Men's Casual Cotton Shirt",
    category: "fashion",
    price: 799,
    mrp: 1499,
    rating: 4.1,
    reviews: 87,
    shortDesc: "100% breathable cotton, regular fit.",
    description:
      "A wardrobe essential — this Men's Casual Cotton Shirt is made from 100% breathable cotton fabric for all-day comfort. Regular fit, machine washable, and available in multiple sizes. Perfect for office or casual outings.",
    images: [
      "assets/images/products/product-3-1.svg",
      "assets/images/products/product-3-2.svg",
      "assets/images/products/product-3-3.svg"
    ],
    stock: 120
  },
  {
    id: 4,
    name: "Women's Ethnic Kurti Set",
    category: "fashion",
    price: 1099,
    mrp: 2199,
    rating: 4.6,
    reviews: 210,
    shortDesc: "Elegant printed kurti with matching bottom.",
    description:
      "This Women's Ethnic Kurti Set combines traditional prints with a modern silhouette. Includes a matching bottom, soft rayon fabric, and comfortable fit — perfect for festive occasions or everyday elegance.",
    images: [
      "assets/images/products/product-4-1.svg",
      "assets/images/products/product-4-2.svg",
      "assets/images/products/product-4-3.svg"
    ],
    stock: 75
  },
  {
    id: 5,
    name: "Non-Stick Cookware Set (5 Pcs)",
    category: "home",
    price: 1899,
    mrp: 3499,
    rating: 4.4,
    reviews: 156,
    shortDesc: "Durable non-stick coating, induction friendly.",
    description:
      "Upgrade your kitchen with this 5-piece Non-Stick Cookware Set. Induction-friendly base, scratch-resistant coating, and ergonomic handles make cooking effortless and cleanup a breeze.",
    images: [
      "assets/images/products/product-5-1.svg",
      "assets/images/products/product-5-2.svg",
      "assets/images/products/product-5-3.svg"
    ],
    stock: 30
  },
  {
    id: 6,
    name: "LED Table Lamp with USB Port",
    category: "home",
    price: 599,
    mrp: 1199,
    rating: 4.2,
    reviews: 64,
    shortDesc: "3 brightness modes, touch control, USB charging.",
    description:
      "This LED Table Lamp features 3 brightness modes, touch-sensitive controls, and a built-in USB charging port — ideal for study tables, bedside, or office desks.",
    images: [
      "assets/images/products/product-6-1.svg",
      "assets/images/products/product-6-2.svg",
      "assets/images/products/product-6-3.svg"
    ],
    stock: 90
  },
  {
    id: 7,
    name: "Herbal Face Wash Combo (Pack of 3)",
    category: "beauty",
    price: 449,
    mrp: 899,
    rating: 4.0,
    reviews: 95,
    shortDesc: "Natural ingredients for glowing, clear skin.",
    description:
      "This Herbal Face Wash Combo (Pack of 3) is enriched with natural ingredients like neem, aloe vera, and turmeric to deeply cleanse and nourish your skin, leaving it soft, clear and refreshed.",
    images: [
      "assets/images/products/product-7-1.svg",
      "assets/images/products/product-7-2.svg",
      "assets/images/products/product-7-3.svg"
    ],
    stock: 200
  },
  {
    id: 8,
    name: "Matte Lipstick Set (6 Shades)",
    category: "beauty",
    price: 699,
    mrp: 1399,
    rating: 4.5,
    reviews: 178,
    shortDesc: "Long-lasting, waterproof, highly pigmented.",
    description:
      "This Matte Lipstick Set includes 6 stunning shades that are long-lasting, waterproof, and highly pigmented. Lightweight, non-drying formula keeps your lips comfortable all day.",
    images: [
      "assets/images/products/product-8-1.svg",
      "assets/images/products/product-8-2.svg",
      "assets/images/products/product-8-3.svg"
    ],
    stock: 150
  },
  {
    id: 9,
    name: "Men's Running Sports Shoes",
    category: "fashion",
    price: 1599,
    mrp: 2999,
    rating: 4.3,
    reviews: 240,
    shortDesc: "Lightweight, breathable mesh, cushioned sole.",
    description:
      "Designed for comfort and performance, these Men's Running Sports Shoes feature a breathable mesh upper, cushioned sole for shock absorption, and a lightweight design perfect for running or daily wear.",
    images: [
      "assets/images/products/product-9-1.svg",
      "assets/images/products/product-9-2.svg",
      "assets/images/products/product-9-3.svg"
    ],
    stock: 80
  },
  {
    id: 10,
    name: "Portable Bluetooth Speaker",
    category: "electronics",
    price: 999,
    mrp: 1999,
    rating: 4.4,
    reviews: 190,
    shortDesc: "12W stereo sound, 10hr battery, waterproof.",
    description:
      "This Portable Bluetooth Speaker delivers powerful 12W stereo sound with deep bass. IPX6 waterproof rating, 10-hour battery backup, and TWS pairing make it the perfect companion for outdoor parties or travel.",
    images: [
      "assets/images/products/product-10-1.svg",
      "assets/images/products/product-10-2.svg",
      "assets/images/products/product-10-3.svg"
    ],
    stock: 55
  }
];

/* Categories used across the site for filtering */
const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "electronics", label: "Electronics" },
  { id: "fashion", label: "Fashion" },
  { id: "home", label: "Home & Kitchen" },
  { id: "beauty", label: "Beauty" }
];
