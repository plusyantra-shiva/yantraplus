/* ============================================================
   PRODUCTS DATA FILE — YANTRAPLUS (real catalog)
   ------------------------------------------------------------
   SOURCE OF TRUTH: https://meesho.com/yantraplus (fetched by Claude).
   Every name, price, and pack size below is taken directly from the
   live Meesho listing. No MRP is shown anywhere on the Meesho store,
   so "mrp" is left null for every product (never invented).
   No ratings/reviews are shown on this site because Meesho does not
   consistently display them per-product and we were told not to
   fabricate any.
   Images are PLACEHOLDER SVGs — Meesho blocks automated image
   download (robots.txt), so real product photos could not be pulled
   in automatically. Replace the files in assets/images/products/
   with your own photos (from your Meesho seller dashboard) whenever
   ready — same filenames, or update the "images" paths below.
   3 of the 23 Meesho listings could not be retrieved because the
   store's pagination (page 2) is JS-rendered and not accessible to
   the fetch tool — see the chat summary for details.
   ============================================================ */

const PRODUCTS = [
  {
    id: 1,
    name: "Hawan Cup Combo Pack 100g+100g",
    fullName: "Hawan Cup Combo Pack 100g+100g | Made from Kashi Temple Flowers | Loban & Chandan Dhoop Cups | Natural Pooja Samagri | Long Lasting Fragrance | Home Mandir & Havan Use",
    category: "incense",
    price: 137,
    mrp: null,
    pack: "100g + 100g (2 cups combo)",
    shortDesc: "Made from Kashi temple flowers, Loban & Chandan fragrance.",
    description:
      "Premium Hawan Cups made from Kashi temple flowers with Loban & Chandan fragrance. Perfect for pooja, havan, and daily spiritual use. Made using a natural temple-flower recycling process. Long lasting, natural & eco-friendly, low smoke, safe for daily use.",
    images: [
      "assets/images/products/product-1-1.svg",
      "assets/images/products/product-1-2.svg",
      "assets/images/products/product-1-3.svg"
    ],
    meeshoUrl: "https://www.meesho.com/hawan-cup-combo-pack-100g100g-made-from-kashi-temple-flowers-loban-chandan-dhoop-cups-natural-pooja-samagri-long-lasting-fragrance-home-mandir-havan-use-yantraplus/p/eys03x"
  },
  {
    id: 2,
    name: "Premium Rudraksha Bracelet (Original)",
    fullName: "Premium Original Rudraksha for Men & Women | Spiritual Healing Bracelet | Meditation & Daily Wear | Unisex",
    category: "bracelets",
    price: 655,
    mrp: null,
    pack: "1 bracelet, Free Size (adjustable)",
    shortDesc: "Natural Rudraksha beads, adjustable, unisex.",
    description:
      "Premium quality Rudraksha Bracelet designed for spiritual energy, positivity and daily wear. Perfect for meditation, pooja and a stylish look for men & women. Crafted using natural Rudraksha beads, lightweight and comfortable for all-day wear.",
    images: [
      "assets/images/products/product-2-1.svg",
      "assets/images/products/product-2-2.svg",
      "assets/images/products/product-2-3.svg"
    ],
    meeshoUrl: "https://www.meesho.com/premium-original-rudraksha-for-men-women-spiritual-healing-bracelet-meditation-daily-wear-unisex/p/ey50bb"
  },
  {
    id: 3,
    name: "Premium Hawan Cup Combo (12 Cups)",
    fullName: "Premium Hawan Cup Combo Pack 12 Cups | Loban Chandan Dhoop for Daily Pooja Havan Shiv Mandir & Meditation",
    category: "incense",
    price: 251,
    mrp: null,
    pack: "12 cups combo pack",
    shortDesc: "Loban & Chandan dhoop, made from sacred temple flowers.",
    description:
      "Specially prepared for daily pooja rituals, havan ceremonies, meditation, and devotional practices. Made using sacred temple flower ingredients with traditional preparation methods. Rich Loban and Chandan fragrance, long-lasting, chemical & charcoal free preparation. Combo pack of 12 cups.",
    images: [
      "assets/images/products/product-3-1.svg",
      "assets/images/products/product-3-2.svg",
      "assets/images/products/product-3-3.svg"
    ],
    meeshoUrl: "https://www.meesho.com/premium-hawan-cup-combo-pack-12-cups-loban-chandan-dhoop-for-daily-pooja-havan-shiv-mandir-meditation/p/fhdu88"
  },
  {
    id: 4,
    name: "Rudraksha & Clear Quartz Bracelet (Premium)",
    fullName: "Premium Original Rudraksha & Clear Quartz for Men & Women | Spiritual Healing Bracelet | Meditation & Daily Wear | Unisex",
    category: "bracelets",
    price: 900,
    mrp: null,
    pack: "1 bracelet, Free Size (adjustable)",
    shortDesc: "Natural Rudraksha beads with Clear Quartz, unisex.",
    description:
      "Premium quality Rudraksha & Clear Quartz bracelet designed for spiritual energy, positivity and daily wear. Perfect for meditation, pooja, and a stylish look for men & women. Lightweight and comfortable, a symbol of protection and positive energy.",
    images: [
      "assets/images/products/product-4-1.svg",
      "assets/images/products/product-4-2.svg",
      "assets/images/products/product-4-3.svg"
    ],
    meeshoUrl: "https://www.meesho.com/premium-original-rudraksha-clear-quartz-for-men-women-spiritual-healing-bracelet-meditation-daily-wear-unisex/p/ey4yws"
  },
  {
    id: 5,
    name: "YantraPlus Natural Agarbatti (Temple Flower)",
    fullName: "YantraPlus Natural Agarbatti | Temple Flower Incense Sticks | Long Lasting Fragrance for Pooja",
    category: "incense",
    price: 125,
    mrp: null,
    pack: "80 sticks, 9-inch length",
    shortDesc: "80 long 9-inch sticks made from natural temple flowers.",
    description:
      "Made from natural ingredients and temple flowers. Contains 80 long 9-inch agarbatti sticks. Long lasting fragrance for pooja and meditation, creates a peaceful and spiritual atmosphere. Perfect for home, temple and daily use.",
    images: [
      "assets/images/products/product-5-1.svg",
      "assets/images/products/product-5-2.svg",
      "assets/images/products/product-5-3.svg"
    ],
    meeshoUrl: "https://www.meesho.com/yantraplus-natural-agarbatti-temple-flower-incense-sticks-long-lasting-fragrance-for-pooja/p/et0oh5"
  },
  {
    id: 6,
    name: "Kashi Mandir Phool Agarbatti Combo",
    fullName: "Kashi Mandir Phool Agarbatti Combo 200g+100g+100g | Natural Premium Incense Sticks | Long Lasting Fragrance | Daily Pooja Havan Home Mandir",
    category: "incense",
    price: 246,
    mrp: null,
    pack: "200g + 100g + 100g combo",
    shortDesc: "Natural premium incense sticks, temple flower based.",
    description:
      "Natural premium incense sticks made from temple flowers, offering long lasting fragrance for daily pooja, havan and home mandir use. (Name and pack size as listed on Meesho; full marketing description not individually re-fetched — ask us on WhatsApp for more detail before ordering.)",
    images: [
      "assets/images/products/product-6-1.svg",
      "assets/images/products/product-6-2.svg",
      "assets/images/products/product-6-3.svg"
    ],
    meeshoUrl: "https://www.meesho.com/kashi-mandir-phool-agarbatti-combo-200g-100g100g-natural-premium-incense-sticks-long-lasting-fragrance-daily-pooja-havan-home-mandir/p/fnqb59"
  },
  {
    id: 7,
    name: "2-in-1 Dhoop Cone & Dhoop Stick Combo",
    fullName: "2-in-1 Dhoop Cone + Dhoop Stick Combo 100g+100g | Long Lasting Fragrance | Daily Pooja Home Mandir Use",
    category: "incense",
    price: 224,
    mrp: null,
    pack: "100g + 100g combo (cones + sticks)",
    shortDesc: "Dhoop cones and dhoop sticks combo, long lasting fragrance.",
    description:
      "A 2-in-1 combo of dhoop cones and dhoop sticks for daily pooja and home mandir use, with long lasting fragrance. (Name and pack size as listed on Meesho; full marketing description not individually re-fetched — ask us on WhatsApp for more detail before ordering.)",
    images: [
      "assets/images/products/product-7-1.svg",
      "assets/images/products/product-7-2.svg",
      "assets/images/products/product-7-3.svg"
    ],
    meeshoUrl: "https://www.meesho.com/2-in-1-dhoop-cone-dhoop-stick-combo-100g-100g-long-lasting-fragrance-daily-pooja-home-mandir-use/p/evq5s0"
  },
  {
    id: 8,
    name: "Dhoop Cones & Hawan Cups Combo",
    fullName: "Combo Dhoop Cones + Hawan Cups | Loban Chandan | Natural Pooja Samagri | Long Lasting Divine Fragrance | Home Mandir Use",
    category: "incense",
    price: 177,
    mrp: null,
    pack: "Combo pack (dhoop cones + hawan cups)",
    shortDesc: "Loban Chandan fragrance, natural pooja samagri.",
    description:
      "A combo of dhoop cones and hawan cups with Loban Chandan fragrance, natural pooja samagri for home mandir use. (Name and pack size as listed on Meesho; full marketing description not individually re-fetched — ask us on WhatsApp for more detail before ordering.)",
    images: [
      "assets/images/products/product-8-1.svg",
      "assets/images/products/product-8-2.svg",
      "assets/images/products/product-8-3.svg"
    ],
    meeshoUrl: "https://www.meesho.com/combo-dhoop-cones-hawan-cups-loban-chandan-natural-pooja-samagri-long-lasting-divine-fragrance-home-mandir-use/p/eysq1l"
  },
  {
    id: 9,
    name: "Temple Flower Dhoop Cones & Sticks Combo",
    fullName: "Temple Flower Combo Dhoop Cones + Dhoop Sticks | Made from Kashi Temple Flowers | Loban Chandan | Natural Pooja Samagri | Long Lasting Divine Fragrance",
    category: "incense",
    price: 160,
    mrp: null,
    pack: "Combo pack (dhoop cones + dhoop sticks)",
    shortDesc: "Made from Kashi temple flowers, Loban Chandan fragrance.",
    description:
      "A combo of dhoop cones and dhoop sticks made from Kashi temple flowers, with Loban Chandan fragrance and long lasting divine aroma. (Name and pack size as listed on Meesho; full marketing description not individually re-fetched — ask us on WhatsApp for more detail before ordering.)",
    images: [
      "assets/images/products/product-9-1.svg",
      "assets/images/products/product-9-2.svg",
      "assets/images/products/product-9-3.svg"
    ],
    meeshoUrl: "https://www.meesho.com/temple-flower-combo-dhoop-cones-dhoop-sticks-made-from-kashi-temple-flowers-loban-chandan-natural-pooja-samagri-long-lasting-divine-fragrance-yantraplus/p/eysoxf"
  },
  {
    id: 10,
    name: "2-in-1 Dhoop Cone & Agarbatti Combo",
    fullName: "2-in-1 Dhoop Cone + Agarbatti Combo | Strong Long Lasting Fragrance | Daily Pooja Kit | Temple Use",
    category: "incense",
    price: 224,
    mrp: null,
    pack: "2-in-1 combo (dhoop cone + agarbatti)",
    shortDesc: "Strong, long lasting fragrance, daily pooja kit.",
    description:
      "A 2-in-1 daily pooja kit combining dhoop cones and agarbatti, with a strong, long lasting fragrance for temple use. (Name and pack size as listed on Meesho; full marketing description not individually re-fetched — ask us on WhatsApp for more detail before ordering.)",
    images: [
      "assets/images/products/product-10-1.svg",
      "assets/images/products/product-10-2.svg",
      "assets/images/products/product-10-3.svg"
    ],
    meeshoUrl: "https://www.meesho.com/2-in-1-dhoop-cone-agarbatti-combo-strong-long-lasting-fragrance-daily-pooja-kit-temple-use/p/evq4qi"
  },
  {
    id: 11,
    name: "Dhoop Stick Combo Pack 200g",
    fullName: "Dhoop Stick Combo Pack 200g (100g+100g) | Made from Kashi Temple Flowers | Natural Dhoop Sticks | Long Lasting Fragrance | Pooja Meditation Use",
    category: "incense",
    price: 177,
    mrp: null,
    pack: "200g (100g + 100g combo)",
    shortDesc: "Made from Kashi temple flowers, natural dhoop sticks.",
    description:
      "Natural dhoop sticks made from Kashi temple flowers, with long lasting fragrance suited for pooja and meditation use. (Name and pack size as listed on Meesho; full marketing description not individually re-fetched — ask us on WhatsApp for more detail before ordering.)",
    images: [
      "assets/images/products/product-11-1.svg",
      "assets/images/products/product-11-2.svg",
      "assets/images/products/product-11-3.svg"
    ],
    meeshoUrl: "https://www.meesho.com/dhoop-stick-combo-pack-200g-100g-100g-made-from-kashi-temple-flowers-natural-dhoop-sticks-long-lasting-fragrance-pooja-meditation-use-yantraplus/p/eys6aj"
  },
  {
    id: 12,
    name: "Pooja Dhoop Sticks Combo Pack 200g",
    fullName: "Pooja Dhoop Sticks Combo Pack 200g | Natural Agarbatti for Home Mandir Daily Use | Long Lasting Fragrance",
    category: "incense",
    price: 219,
    mrp: null,
    pack: "200g combo pack",
    shortDesc: "Natural agarbatti for home mandir daily use.",
    description:
      "A 200g combo pack of pooja dhoop sticks / natural agarbatti, for daily home mandir use with long lasting fragrance. (Name and pack size as listed on Meesho; full marketing description not individually re-fetched — ask us on WhatsApp for more detail before ordering.)",
    images: [
      "assets/images/products/product-12-1.svg",
      "assets/images/products/product-12-2.svg",
      "assets/images/products/product-12-3.svg"
    ],
    meeshoUrl: "https://www.meesho.com/pooja-dhoop-sticks-combo-pack-200g-natural-agarbatti-for-home-mandir-daily-use-long-lasting-fragrance/p/fhdtsp"
  },
  {
    id: 13,
    name: "Hawan Cup Combo Pack (12 Cups, Loban Chandan)",
    fullName: "Hawan Cup Combo Pack 12 Cups | Loban Chandan Fragrance for Daily Pooja Havan Home Mandir Spiritual Use",
    category: "incense",
    price: 235,
    mrp: null,
    pack: "12 cups combo pack",
    shortDesc: "Loban Chandan fragrance, daily pooja havan use.",
    description:
      "A 12-cup hawan cup combo with Loban Chandan fragrance, for daily pooja, havan and home mandir spiritual use. (Name and pack size as listed on Meesho; full marketing description not individually re-fetched — ask us on WhatsApp for more detail before ordering.)",
    images: [
      "assets/images/products/product-13-1.svg",
      "assets/images/products/product-13-2.svg",
      "assets/images/products/product-13-3.svg"
    ],
    meeshoUrl: "https://www.meesho.com/hawan-cup-combo-pack-12-cups-loban-chandan-fragrance-for-daily-pooja-havan-home-mandir-spiritual-use/p/fhdu7b"
  },
  {
    id: 14,
    name: "Rudraksha & Clear Quartz Bracelet",
    fullName: "Premium Rudraksha & Clear Quartz for Men & Women | Spiritual Healing Bracelet | Meditation & Daily Wear | Unisex",
    category: "bracelets",
    price: 660,
    mrp: null,
    pack: "1 bracelet, Free Size (adjustable)",
    shortDesc: "Natural Rudraksha beads with Clear Quartz, unisex.",
    description:
      "Rudraksha & Clear Quartz spiritual healing bracelet for men & women, suited for meditation and daily wear. (Name and pack size as listed on Meesho; full marketing description not individually re-fetched — ask us on WhatsApp for more detail before ordering.)",
    images: [
      "assets/images/products/product-14-1.svg",
      "assets/images/products/product-14-2.svg",
      "assets/images/products/product-14-3.svg"
    ],
    meeshoUrl: "https://www.meesho.com/premium-rudraksha-clear-quartz-for-men-women-spiritual-healing-bracelet-meditation-daily-wear-unisex/p/ey4x3j"
  },
  {
    id: 15,
    name: "Rudraksha Bracelet Combo (5 Mukhi)",
    fullName: "Rudraksha Bracelet Combo for Men & Women | 5 Mukhi Rudraksha | Spiritual Daily Wear | Unisex",
    category: "bracelets",
    price: 843,
    mrp: null,
    pack: "1 bracelet combo, Free Size (adjustable)",
    shortDesc: "5 Mukhi Rudraksha, spiritual daily wear, unisex.",
    description:
      "A 5 Mukhi Rudraksha bracelet combo for men & women, designed for spiritual daily wear. (Name and pack size as listed on Meesho; full marketing description not individually re-fetched — ask us on WhatsApp for more detail before ordering.)",
    images: [
      "assets/images/products/product-15-1.svg",
      "assets/images/products/product-15-2.svg",
      "assets/images/products/product-15-3.svg"
    ],
    meeshoUrl: "https://www.meesho.com/rudraksha-bracelet-combo-for-men-women-5-mukhi-rudraksha-spiritual-daily-wear-unisex/p/f0my2w"
  },
  {
    id: 16,
    name: "Dhoop Cone Combo Pack 200g",
    fullName: "Dhoop Cone Combo Pack 200g (100g+100g) | Natural Dhoop Cones | Long Lasting Divine Fragrance | Pooja Meditation Home Mandir",
    category: "incense",
    price: 137,
    mrp: null,
    pack: "200g (100g + 100g combo)",
    shortDesc: "Natural dhoop cones, long lasting divine fragrance.",
    description:
      "Natural dhoop cones with long lasting divine fragrance, suited for pooja, meditation and home mandir use. (Name and pack size as listed on Meesho; full marketing description not individually re-fetched — ask us on WhatsApp for more detail before ordering.)",
    images: [
      "assets/images/products/product-16-1.svg",
      "assets/images/products/product-16-2.svg",
      "assets/images/products/product-16-3.svg"
    ],
    meeshoUrl: "https://www.meesho.com/dhoop-cone-combo-pack-200g-100g-100g-natural-dhoop-cones-long-lasting-divine-fragrance-pooja-meditation-home-mandir-yantraplus/p/eyslmz"
  },
  {
    id: 17,
    name: "Natural Agarbatti Combo Pack 200g",
    fullName: "Natural Agarbatti Combo Pack 200g | Pooja Incense Sticks | Temple Flower Fragrance | Long Lasting | 80 Sticks | Home Mandir Daily Use",
    category: "incense",
    price: 159,
    mrp: null,
    pack: "200g, 80 sticks",
    shortDesc: "Temple flower fragrance, 80 sticks, long lasting.",
    description:
      "A 200g pack of natural agarbatti (80 sticks) with temple flower fragrance, long lasting and suited for daily home mandir use. (Name and pack size as listed on Meesho; full marketing description not individually re-fetched — ask us on WhatsApp for more detail before ordering.)",
    images: [
      "assets/images/products/product-17-1.svg",
      "assets/images/products/product-17-2.svg",
      "assets/images/products/product-17-3.svg"
    ],
    meeshoUrl: "https://www.meesho.com/natural-agarbatti-combo-pack-200g-pooja-incense-sticks-temple-flower-fragrance-long-lasting-80-sticks-home-mandir-daily-use/p/et2tmy"
  },
  {
    id: 18,
    name: "Natural Dhoop Stick Combo Pack 100g+100g",
    fullName: "Natural Dhoop Stick Combo Pack 100g+100g | Long Lasting Fragrance for Daily Pooja Home Mandir Meditation",
    category: "incense",
    price: 234,
    mrp: null,
    pack: "100g + 100g combo",
    shortDesc: "Long lasting fragrance for daily pooja & meditation.",
    description:
      "A 100g+100g combo of natural dhoop sticks with long lasting fragrance, for daily pooja, home mandir and meditation use. (Name and pack size as listed on Meesho; full marketing description not individually re-fetched — ask us on WhatsApp for more detail before ordering.)",
    images: [
      "assets/images/products/product-18-1.svg",
      "assets/images/products/product-18-2.svg",
      "assets/images/products/product-18-3.svg"
    ],
    meeshoUrl: "https://www.meesho.com/natural-dhoop-stick-combo-pack-100g-100g-long-lasting-fragrance-for-daily-pooja-home-mandir-meditation/p/fhdu5d"
  },
  {
    id: 19,
    name: "Long Lasting Dhoop Stick Combo Pack",
    fullName: "Long Lasting Dhoop Stick Combo Pack 100g+100g | Spiritual Fragrance for Home Mandir",
    category: "incense",
    price: 220,
    mrp: null,
    pack: "100g + 100g combo",
    shortDesc: "Spiritual fragrance for home mandir, long lasting.",
    description:
      "A 100g+100g dhoop stick combo pack with a spiritual fragrance, long lasting and made for home mandir use. (Name and pack size as listed on Meesho; full marketing description not individually re-fetched — ask us on WhatsApp for more detail before ordering.)",
    images: [
      "assets/images/products/product-19-1.svg",
      "assets/images/products/product-19-2.svg",
      "assets/images/products/product-19-3.svg"
    ],
    meeshoUrl: "https://www.meesho.com/long-lasting-dhoop-stick-combo-pack-100g-100g-spiritual-fragrance-for-home-mandir/p/fhdtys"
  },
  {
    id: 20,
    name: "Hawan Cup & Agarbatti Combo 100g+100g",
    fullName: "Hawan Cup Agarbatti Combo 100g+100g | Natural Pooja Kit | Long Lasting Fragrance | Home Mandir Havan Use",
    category: "incense",
    price: 224,
    mrp: null,
    pack: "100g + 100g combo (cups + agarbatti)",
    shortDesc: "Natural pooja kit, long lasting fragrance.",
    description:
      "A natural pooja kit combining hawan cups and agarbatti, 100g+100g, with long lasting fragrance for home mandir and havan use. (Name and pack size as listed on Meesho; full marketing description not individually re-fetched — ask us on WhatsApp for more detail before ordering.)",
    images: [
      "assets/images/products/product-20-1.svg",
      "assets/images/products/product-20-2.svg",
      "assets/images/products/product-20-3.svg"
    ],
    meeshoUrl: "https://www.meesho.com/hawan-cup-agarbatti-combo-100g-100g-natural-pooja-kit-long-lasting-fragrance-home-mandir-havan-use/p/evq6w7"
  }
];

/* NOTE: Meesho's storefront lists 23 total products. 3 could not be
   retrieved because page 2 of the listing is rendered client-side by
   Meesho's app and isn't reachable by the fetch tool used to build
   this catalog. Add them manually below (same shape as above) once
   you share their details, or ask Claude to try fetching them again. */

/* Categories used across the site for filtering */
const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "incense", label: "Incense & Dhoop" },
  { id: "bracelets", label: "Rudraksha Bracelets" }
];
