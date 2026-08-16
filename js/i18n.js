/* ============================================================
   I18N.JS — Hindi / English language toggle
   ------------------------------------------------------------
   Scope (deliberately limited — see chat summary for why):
   - Translates site "chrome": navigation, footer, buttons, form
     labels, headings, and checkout/payment flow text.
   - Does NOT translate product names/descriptions (sourced
     verbatim from Meesho — translating them risks changing the
     real product data) or the body text of policy pages / FAQ
     answers (legal/policy text needs human review before
     publishing in Hindi to avoid misrepresenting terms).
   - Persists choice in localStorage so it holds across pages.
   - Loaded BEFORE main.js on every page so header/footer can call t().
   ============================================================ */

const I18N = {
  en: {
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About Us",
    "nav.contact": "Contact Us",
    "nav.faq": "FAQ",
    "search.placeholder": "Search for products...",
    "search.aria": "Search products",
    "hero.title": "YantraPlus — Pooja & Spiritual Essentials",
    "hero.subtitle": "Incense sticks, dhoop and Rudraksha bracelets for your home mandir.",
    "hero.cta": "Shop Now",
    "section.shopByCategory": "Shop by Category",
    "category.incense": "Incense & Dhoop",
    "category.bracelets": "Rudraksha Bracelets",
    "section.featured": "Featured Products",
    "link.viewAll": "View All →",
    "section.whyShop": "Why Shop With YantraPlus?",
    "value.shipping.title": "Shipped Across India",
    "value.shipping.desc": "Message us to confirm delivery to your pincode",
    "value.payments.title": "Secure UPI Payments",
    "value.payments.desc": "Pay directly through your own UPI app",
    "value.verified.title": "Manually Verified Orders",
    "value.verified.desc": "Every payment checked by hand before dispatch",
    "value.support.title": "WhatsApp Support",
    "value.support.desc": "Reach us directly for any order query",
    "btn.buyNow": "Buy Now",
    "btn.askWhatsapp": "Ask on WhatsApp",
    "product.description": "Product Description",
    "product.pack": "Pack",
    "product.related": "You May Also Like",
    "product.notFound": "Product not found.",
    "product.browseAll": "Browse All Products",
    "trust.securePayment": "Secure UPI Payment",
    "trust.verifiedOrders": "Manually Verified Orders",
    "products.searchPlaceholder": "Search within products...",
    "products.resultsCount": "products found",
    "products.noResults": "No products matched your search. Try a different keyword or category.",
    "filter.all": "All",
    "footer.quickLinks": "Quick Links",
    "footer.policies": "Policies",
    "footer.getInTouch": "Get In Touch",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms & Conditions",
    "footer.shipping": "Shipping Policy",
    "footer.returns": "Return & Refund Policy",
    "footer.whatsappOnly": "Message us on WhatsApp — button on every page",
    "footer.rights": "All rights reserved.",
    "checkout.title": "Checkout",
    "checkout.quantity": "Quantity",
    "checkout.continueToDetails": "Continue to Delivery Details",
    "checkout.deliveryDetails": "Delivery Details",
    "checkout.fullName": "Full Name",
    "checkout.mobile": "Mobile Number",
    "checkout.address": "Full Delivery Address",
    "checkout.city": "City",
    "checkout.state": "State",
    "checkout.pincode": "Pincode",
    "checkout.continueToPayment": "Continue to Payment",
    "checkout.back": "← Back",
    "checkout.orderSummary": "Order Summary",
    "checkout.orderId": "Order ID",
    "checkout.deliverTo": "Deliver to",
    "checkout.subtotal": "Subtotal",
    "checkout.shipping": "Shipping",
    "checkout.free": "FREE",
    "checkout.total": "Total",
    "checkout.payVia": "Pay via UPI",
    "checkout.scanOrPay": "Scan the QR or pay to the UPI ID above using any UPI app.",
    "checkout.sendScreenshot": "Send Payment Screenshot on WhatsApp",
    "checkout.manualNote": "Your order is confirmed only after we manually verify your payment. This is not an automatic payment system.",
    "contact.getInTouch": "Get In Touch",
    "contact.sendMessage": "Send Us a Message",
    "contact.fullName": "Full Name",
    "contact.yourPhone": "Your Phone/WhatsApp Number",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.sendWhatsapp": "Send via WhatsApp",
    "contact.chatWhatsapp": "Chat on WhatsApp",
    "faq.stillQuestions": "Still have questions?",
    "faq.contactSupport": "Contact Support",
    "lang.toggleLabel": "हिंदी"
  },
  hi: {
    "nav.home": "होम",
    "nav.products": "उत्पाद",
    "nav.about": "हमारे बारे में",
    "nav.contact": "संपर्क करें",
    "nav.faq": "सामान्य प्रश्न",
    "search.placeholder": "उत्पाद खोजें...",
    "search.aria": "उत्पाद खोजें",
    "hero.title": "यंत्रप्लस — पूजा और आध्यात्मिक सामग्री",
    "hero.subtitle": "आपके घर के मंदिर के लिए अगरबत्ती, धूप और रुद्राक्ष कंगन।",
    "hero.cta": "अभी खरीदें",
    "section.shopByCategory": "श्रेणी अनुसार खरीदें",
    "category.incense": "अगरबत्ती और धूप",
    "category.bracelets": "रुद्राक्ष कंगन",
    "section.featured": "विशेष उत्पाद",
    "link.viewAll": "सभी देखें →",
    "section.whyShop": "यंत्रप्लस से क्यों खरीदें?",
    "value.shipping.title": "पूरे भारत में डिलीवरी",
    "value.shipping.desc": "अपने पिनकोड पर डिलीवरी की पुष्टि के लिए हमें संदेश भेजें",
    "value.payments.title": "सुरक्षित UPI भुगतान",
    "value.payments.desc": "अपने ही UPI ऐप से सीधे भुगतान करें",
    "value.verified.title": "मैन्युअल रूप से सत्यापित ऑर्डर",
    "value.verified.desc": "भेजने से पहले हर भुगतान की स्वयं जांच की जाती है",
    "value.support.title": "व्हाट्सऐप सहायता",
    "value.support.desc": "किसी भी ऑर्डर संबंधी प्रश्न के लिए सीधे हमसे संपर्क करें",
    "btn.buyNow": "अभी खरीदें",
    "btn.askWhatsapp": "व्हाट्सऐप पर पूछें",
    "product.description": "उत्पाद विवरण",
    "product.pack": "पैक",
    "product.related": "आपको यह भी पसंद आ सकता है",
    "product.notFound": "उत्पाद नहीं मिला।",
    "product.browseAll": "सभी उत्पाद देखें",
    "trust.securePayment": "सुरक्षित UPI भुगतान",
    "trust.verifiedOrders": "मैन्युअल रूप से सत्यापित ऑर्डर",
    "products.searchPlaceholder": "उत्पादों में खोजें...",
    "products.resultsCount": "उत्पाद मिले",
    "products.noResults": "आपकी खोज से कोई उत्पाद मेल नहीं खाया। कोई अलग शब्द या श्रेणी आज़माएं।",
    "filter.all": "सभी",
    "footer.quickLinks": "त्वरित लिंक",
    "footer.policies": "नीतियां",
    "footer.getInTouch": "संपर्क करें",
    "footer.privacy": "गोपनीयता नीति",
    "footer.terms": "नियम एवं शर्तें",
    "footer.shipping": "शिपिंग नीति",
    "footer.returns": "वापसी और धनवापसी नीति",
    "footer.whatsappOnly": "हमें व्हाट्सऐप पर संदेश भेजें — हर पेज पर बटन उपलब्ध है",
    "footer.rights": "सर्वाधिकार सुरक्षित।",
    "checkout.title": "चेकआउट",
    "checkout.quantity": "मात्रा",
    "checkout.continueToDetails": "डिलीवरी विवरण जारी रखें",
    "checkout.deliveryDetails": "डिलीवरी विवरण",
    "checkout.fullName": "पूरा नाम",
    "checkout.mobile": "मोबाइल नंबर",
    "checkout.address": "पूरा डिलीवरी पता",
    "checkout.city": "शहर",
    "checkout.state": "राज्य",
    "checkout.pincode": "पिनकोड",
    "checkout.continueToPayment": "भुगतान जारी रखें",
    "checkout.back": "← वापस",
    "checkout.orderSummary": "ऑर्डर सारांश",
    "checkout.orderId": "ऑर्डर आईडी",
    "checkout.deliverTo": "डिलीवरी पता",
    "checkout.subtotal": "उप-योग",
    "checkout.shipping": "शिपिंग",
    "checkout.free": "मुफ़्त",
    "checkout.total": "कुल",
    "checkout.payVia": "UPI से भुगतान करें",
    "checkout.scanOrPay": "किसी भी UPI ऐप से ऊपर दिए QR को स्कैन करें या UPI ID पर भुगतान करें।",
    "checkout.sendScreenshot": "भुगतान स्क्रीनशॉट व्हाट्सऐप पर भेजें",
    "checkout.manualNote": "आपका भुगतान मैन्युअल रूप से सत्यापित होने के बाद ही ऑर्डर की पुष्टि होगी। यह एक स्वचालित भुगतान प्रणाली नहीं है।",
    "contact.getInTouch": "संपर्क करें",
    "contact.sendMessage": "हमें संदेश भेजें",
    "contact.fullName": "पूरा नाम",
    "contact.yourPhone": "आपका फ़ोन/व्हाट्सऐप नंबर",
    "contact.subject": "विषय",
    "contact.message": "संदेश",
    "contact.sendWhatsapp": "व्हाट्सऐप से भेजें",
    "contact.chatWhatsapp": "व्हाट्सऐप पर चैट करें",
    "faq.stillQuestions": "अभी भी प्रश्न हैं?",
    "faq.contactSupport": "सहायता से संपर्क करें",
    "lang.toggleLabel": "English"
  }
};

/* Current language state, read from localStorage (default English) */
function getLang() {
  return localStorage.getItem('yp_lang') === 'hi' ? 'hi' : 'en';
}

/* Translate a key for the CURRENT language, falling back to English,
   then to the key itself if truly missing (never shows blank text). */
function t(key) {
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
}

/* Apply translations to any static HTML element carrying data-i18n
   (text content) or data-i18n-placeholder (input/textarea placeholder). */
function applyTranslations() {
  const lang = getLang();
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
}

/* Switch language, persist it, and notify the rest of the page
   (header/footer/product grids etc.) so they can re-render their
   own JS-generated text in the new language. */
function setLang(lang) {
  localStorage.setItem('yp_lang', lang === 'hi' ? 'hi' : 'en');
  applyTranslations();
  document.dispatchEvent(new CustomEvent('yp:langchange'));
}

document.addEventListener('DOMContentLoaded', applyTranslations);
