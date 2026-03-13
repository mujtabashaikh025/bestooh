// =========== DATA ===========
const products = [
  { id: 1, name: 'AOT', fandom: 'AOT', price: 140, original: null, emoji: '🔥', badge: 'NEW', type: 'tee', specs: ['Unique Artwork', 'Hand-drawn design', 'Heavyweight Cotton'], sizes: ['M', 'L', 'XL'], description: 'A masterpiece from our original art collection.', images: { front: 'Products/product-1.jpg' } },
  { id: 2, name: 'BAKI', fandom: 'Baki', price: 140, original: null, emoji: '🤖', badge: 'HOT', type: 'tee', specs: ['Premium Print', 'Vibrant Colors', 'Oversized Fit'], sizes: ['S', 'M', 'L', 'XL'], description: 'Neon-infused street style.', images: { front: 'Products/product-2.jpg' } },
  { id: 3, name: 'DEMON SLAYER', fandom: 'Demon Slayer', price: 140, original: null, emoji: '👕', badge: null, type: 'tee', specs: ['Minimalist Back Detail', 'Breathable Fabric'], sizes: ['S', 'M', 'L', 'XL'], description: 'The fundamental streetwear base.', images: { front: 'Products/product-3.jpg' } },
  { id: 4, name: 'JJK', fandom: 'JJK', price: 140, original: null, emoji: '👕', badge: null, type: 'tee', specs: ['Chest Logo Print', 'Signature Fit'], sizes: ['S', 'M', 'L', 'XL'], description: 'Essential every-day wear.', images: { front: 'Products/product-4.jpg' } },
  { id: 5, name: 'Core Classic Tee (White Edition)', fandom: 'Bestooh', price: 140, original: null, emoji: '👕', badge: 'SALE', type: 'tee', specs: ['Crisp White Cotton', 'Premium Finish'], sizes: ['S', 'M', 'L', 'XL'], description: 'Clean and sharp appearance.', images: { front: 'Products/product-5.jpg' } },
  { id: 6, name: 'Post-Industrial Back Print', fandom: 'Bestooh', price: 140, original: null, emoji: '🖼️', badge: null, type: 'accessory', specs: ['Abstract Art', 'High Contrast'], sizes: [], description: 'Art-focused street gear.', images: { front: 'Products/product-6.jpg' } },
  { id: 7, name: 'Post-Industrial Front Print', fandom: 'Bestooh', price: 140, original: null, emoji: '🖼️', badge: null, type: 'accessory', specs: ['Front Graphics', 'Modern Design'], sizes: [], description: 'Making a statement.', images: { front: 'Products/product-7.jpg' } },
  { id: 8, name: 'Street Culture Print VII', fandom: 'Bestooh', price: 140, original: null, emoji: '📸', badge: null, type: 'accessory', specs: ['Photography-based Art', 'Special Ink'], sizes: [], description: 'The urban aesthetic captured.', images: { front: 'Products/product-8.jpg' } },
  { id: 9, name: 'Street Culture VII Portrait', fandom: 'Bestooh', price: 140, original: null, emoji: '📸', badge: null, type: 'accessory', specs: ['Portrait Layout', 'Premium Texture'], sizes: [], description: 'Gallery-worthy streetwear.', images: { front: 'Products/product-9.jpg' } },
  { id: 10, name: 'Storie Edition Hoodie II', fandom: 'Bestooh', price: 140, original: null, emoji: '🧥', badge: 'LIMITED', type: 'hoodie', specs: ['Warm Fleece Inner', 'Iconic Silhouette'], sizes: ['M', 'L', 'XL'], description: 'Classic comfort merged with local art.', images: { front: 'Products/product-10.jpg' } },
  { id: 11, name: 'Storie Edition Hoodie XXI', fandom: 'Bestooh', price: 140, original: null, emoji: '🧥', badge: null, type: 'hoodie', specs: ['Reflective Elements', 'Heavy Fabric'], sizes: ['S', 'M', 'L'], description: 'Bold design for the midnight streets.', images: { front: 'Products/product-11.jpg' } },
  { id: 12, name: 'Storie Edition XXI (Front Profile)', fandom: 'Bestooh', price: 140, original: null, emoji: '🧥', badge: null, type: 'hoodie', specs: ['Minimal Frontage', 'Durable Zips'], sizes: ['S', 'M', 'L'], description: 'Sleek and versatile.', images: { front: 'Products/product-12.jpg' } },
  { id: 13, name: 'Storie Edition Hoodie XXII', fandom: 'Bestooh', price: 140, original: null, emoji: '🧥', badge: null, type: 'hoodie', specs: ['Gradient Textures', 'Deep Pockets'], sizes: ['M', 'L', 'XL'], description: 'Texture-play at its finest.', images: { front: 'Products/product-13.jpg' } },
  { id: 14, name: 'Storie Edition XXII (Front Profile)', fandom: 'Bestooh', price: 140, original: null, emoji: '🧥', badge: null, type: 'hoodie', specs: ['Clean Aesthetic', 'Reinforced Cuffs'], sizes: ['M', 'L', 'XL'], description: 'Built for durability.', images: { front: 'Products/product-14.jpg' } },
  { id: 15, name: 'Legacy Hoodie 226', fandom: 'Bestooh', price: 140, original: null, emoji: '🧥', badge: 'RARE', type: 'hoodie', specs: ['Numbered Drop', 'Exclusive Colorway'], sizes: ['L', 'XL'], description: 'A unique piece of our legacy.', images: { front: 'Products/product-15.jpg' } },
  { id: 16, name: 'Storie Edition Hoodie XXIII', fandom: 'Bestooh', price: 140, original: null, emoji: '🧥', badge: null, type: 'hoodie', specs: ['Bold Typography', 'Comfort Fit'], sizes: ['S', 'M', 'L', 'XL'], description: 'Speak without saying a word.', images: { front: 'Products/product-16.jpg' } },
  { id: 17, name: 'Storie Edition XXIII (Front Profile)', fandom: 'Bestooh', price: 140, original: null, emoji: '🧥', badge: null, type: 'hoodie', specs: ['Front Pocket Graphics', 'Soft Blend'], sizes: ['S', 'M', 'L', 'XL'], description: 'Urban comfort redefined.', images: { front: 'Products/product-17.jpg' } },
  { id: 18, name: 'Storie Edition Hoodie XXVI', fandom: 'Bestooh', price: 140, original: null, emoji: '🧥', badge: null, type: 'hoodie', specs: ['Signature Red Details', 'Premium Hood'], sizes: ['M', 'L'], description: 'Intensity in every stitch.', images: { front: 'Products/product-18.jpg' } },
  { id: 19, name: 'Storie Edition Hoodie XXVII', fandom: 'Bestooh', price: 140, original: null, emoji: '🧥', badge: null, type: 'hoodie', specs: ['Handpicked Fabrics', 'Street Cut'], sizes: ['S', 'M', 'L', 'XL'], description: 'Raw and unrefined style.', images: { front: 'Products/product-19.jpg' } },
  { id: 20, name: 'Storie Edition XXVII (Front Profile)', fandom: 'Bestooh', price: 140, original: null, emoji: '🧥', badge: null, type: 'hoodie', specs: ['Versatile Layering', 'Clean Finish'], sizes: ['S', 'M', 'L', 'XL'], description: 'The ultimate layering piece.', images: { front: 'Products/product-20.jpg' } },
  { id: 21, name: 'Storie Edition Hoodie XXVIII', fandom: 'Bestooh', price: 140, original: null, emoji: '🧥', badge: null, type: 'hoodie', specs: ['Large Back Art', 'Loose Fit'], sizes: ['M', 'L', 'XL', 'XXL'], description: 'Maximum presence.', images: { front: 'Products/product-21.jpg' } },
  { id: 22, name: 'Storie Edition XXVIII (Front Profile)', fandom: 'Bestooh', price: 140, original: null, emoji: '🧥', badge: null, type: 'hoodie', specs: ['Chest Print', 'Heavy Ribbing'], sizes: ['M', 'L', 'XL', 'XXL'], description: 'Solid foundational gear.', images: { front: 'Products/product-22.jpg' } },
  { id: 23, name: 'Storie Edition Hoodie XXIX', fandom: 'Bestooh', price: 140, original: null, emoji: '🧥', badge: null, type: 'hoodie', specs: ['Mixed Media Print', 'Unique Cuffs'], sizes: ['S', 'M', 'L'], description: 'Where art meets action.', images: { front: 'Products/product-23.jpg' } },
  { id: 24, name: 'Storie Edition XXIX (Portrait View)', fandom: 'Bestooh', price: 140, original: null, emoji: '🧥', badge: null, type: 'hoodie', specs: ['Close-up Detail Print', 'Rich Ink'], sizes: ['S', 'M', 'L'], description: 'Every detail matters.', images: { front: 'Products/product-24.jpg' } },
  { id: 25, name: 'Storie Edition Hoodie XXX', fandom: 'Bestooh', price: 140, original: null, emoji: '🧥', badge: 'ARCHIVE', type: 'hoodie', specs: ['Collector Item', 'Refined Fit'], sizes: ['M', 'L', 'XL'], description: 'The milestone XXX edition.', images: { front: 'Products/product-25.jpg' } },
  { id: 26, name: 'Storie Edition XXX (Front Profile)', fandom: 'Bestooh', price: 140, original: null, emoji: '🧥', badge: 'ARCHIVE', type: 'hoodie', specs: ['Front Pocket Logo', 'Premium Ribs'], sizes: ['M', 'L', 'XL'], description: 'A symbol of our journey.', images: { front: 'Products/product-26.jpg' } },
  { id: 27, name: 'Storie Edition XXX (Back Detail)', fandom: 'Bestooh', price: 140, original: null, emoji: '🧥', badge: null, type: 'hoodie', specs: ['Full Back Mural', 'High Definition'], sizes: ['S', 'M', 'L', 'XL'], description: 'Wear the story on your back.', images: { front: 'Products/product-27.jpg' } },
  { id: 28, name: 'Genesis Story Hoodie XXXI', fandom: 'Bestooh', price: 140, original: null, emoji: '🧥', badge: 'HOT', type: 'hoodie', specs: ['Original Story Print', 'Luxury Fleece'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], description: 'The next chapter starts here.', images: { front: 'Products/product-28.jpg' } },
];

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('bestooh_cart')) || [];
let currentProduct = null;

// =========== RENDER PRODUCTS ===========
function renderProductCard(p, onclick_fn) {
  const hasImages = p.images && (p.images.front || p.images.back);
  const frontImg = hasImages ? `<img src="${p.images.front}" alt="${p.name} - Front" class="product-img-front" onerror="this.style.display='none';this.parentElement.innerHTML='<span style=font-size:80px>${p.emoji}</span>'">` : `<span style="font-size:80px">${p.emoji}</span>`;
  const backImg = hasImages && p.images.back ? `<img src="${p.images.back}" alt="${p.name} - Back" class="product-img-back" onerror="this.style.display='none';this.parentElement.innerHTML='<span style=font-size:80px>${p.emoji}</span>'">` : '';

  return `
<div class="product-card" onclick="${onclick_fn}(${p.id})">
  <div class="product-img-wrap" style="background:${p.color ? p.color + '22' : '#1a1a1a'}">
    ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
    ${frontImg}
    ${backImg}
  </div>
  <div class="product-info">
    <div class="product-fandom">${p.fandom}</div>
    <div class="product-name">${p.name}</div>
    <div class="product-footer">
      <div class="product-price">
        AED ${p.price}
        ${p.original ? `<span class="original">AED ${p.original}</span>` : ''}
      </div>
      <button class="add-btn" onclick="event.stopPropagation(); quickAdd(${p.id})">+</button>
    </div>
  </div>
</div>
`;
}

function renderHomeProducts() {
  const el = document.getElementById('home-products');
  el.innerHTML = products.slice(0, 4).map(p => renderProductCard(p, 'openProduct')).join('');
}

function renderShopProducts(filter = 'all') {
  const el = document.getElementById('shop-products');
  const filtered = filter === 'all' ? products : products.filter(p => p.type === filter);
  el.innerHTML = filtered.map(p => renderProductCard(p, 'openProduct')).join('');
}

function filterProducts(type, btn) {
  document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderShopProducts(type);
}

// =========== PRODUCT DETAIL ===========
function openProduct(id) {
  currentProduct = products.find(p => p.id === id);
  if (!currentProduct) return;

  // Set main image
  const mainImgEl = document.getElementById('detail-main-emoji');
  if (currentProduct.images && currentProduct.images.front) {
    mainImgEl.innerHTML = `<img src="${currentProduct.images.front}" alt="${currentProduct.name}" onerror="this.style.display='none';this.parentElement.innerHTML='<span>${currentProduct.emoji}</span>'">`;
  } else {
    mainImgEl.innerHTML = `<span>${currentProduct.emoji}</span>`;
  }

  document.getElementById('detail-fandom').textContent = currentProduct.fandom;
  document.getElementById('detail-name').textContent = currentProduct.name;
  document.getElementById('detail-price').textContent = `AED ${currentProduct.price}.00`;

  document.getElementById('detail-specs').innerHTML = currentProduct.specs
    .map(s => `<div class="detail-spec">${s}</div>`).join('');

  const sizesWrap = document.getElementById('detail-sizes-wrap');
  const sizesEl = document.getElementById('detail-sizes');
  if (currentProduct.sizes && currentProduct.sizes.length > 0) {
    sizesWrap.style.display = 'block';
    sizesEl.innerHTML = currentProduct.sizes.map((s, i) =>
      `<button class="size-btn ${i === 1 ? 'active' : ''}" onclick="selectSize(this)">${s}</button>`
    ).join('');
  } else {
    sizesWrap.style.display = 'none';
  }

  // Create thumbnails - cycle through front/back or just duplicate
  const thumbs = document.getElementById('detail-thumbs');
  const thumbImages = [];
  if (currentProduct.images) {
    if (currentProduct.images.front) thumbImages.push(currentProduct.images.front);
    if (currentProduct.images.back) thumbImages.push(currentProduct.images.back);
    // Fill remaining slots with duplicates if needed
    while (thumbImages.length < 4) {
      thumbImages.push(thumbImages[thumbImages.length % thumbImages.length]);
    }
  } else {
    // Fallback to emoji
    thumbImages.push(null, null, null, null);
  }

  document.getElementById('detail-thumbs').innerHTML = thumbImages.map((img, i) =>
    img ? `<div class="detail-thumb ${i === 0 ? 'active' : ' '}" onclick="changeDetailImage('${img}', this)">
  <img src="${img}" alt="View ${i + 1}" onerror="this.style.display='none';this.parentElement.innerHTML='${currentProduct.emoji}'">
</div>` :
      `<div class="detail-thumb ${i === 0 ? 'active' : ' '}" onclick="changeDetailImage(null, this)">
  ${currentProduct.emoji}
</div>`
  ).join('');

  const related = products.filter(p => p.id !== id).slice(0, 3);
  document.getElementById('related-products').innerHTML = related.map(p => renderProductCard(p, 'openProduct')).join('');

  document.getElementById('detail-add-btn').onclick = () => addToCart(currentProduct.id);

  showPage('detail');
}

function changeDetailImage(imgSrc, thumbEl) {
  const mainEl = document.getElementById('detail-main-emoji');
  if (imgSrc) {
    mainEl.innerHTML = `<img src="${imgSrc}" alt="Product View" onerror="this.style.display='none';this.parentElement.innerHTML='<span>${currentProduct.emoji}</span>'">`;
  } else {
    mainEl.innerHTML = `<span>${currentProduct.emoji}</span>`;
  }

  // Update active state
  document.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
}

function selectSize(btn) {
  btn.closest('.sizes').querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// =========== CART ===========
function quickAdd(id) {
  addToCart(id);
}

function addToCart(id) {
  const p = products.find(x => x.id === id);
  const existing = cart.find(x => x.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...p, qty: 1 });
  }
  updateCartUI();
  saveCart();
  showToast(`${p.name.substring(0, 20)}... added!`);
}

function saveCart() {
  localStorage.setItem('bestooh_cart', JSON.stringify(cart));
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  updateCartUI();
  saveCart();
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  updateCartUI();
  saveCart();
  renderCart();
}

function updateCartUI() {
  const total = cart.reduce((s, x) => s + x.qty, 0);
  const cartBadge = document.getElementById('cart-count');
  if (cartBadge) cartBadge.textContent = total;
}

function renderCart() {
  const list = document.getElementById('cart-items-list');
  const empty = document.getElementById('cart-empty');

  if (cart.length === 0) {
    list.innerHTML = '';
    empty.classList.add('visible');
    updateSummary(0);
    return;
  }

  empty.classList.remove('visible');
  list.innerHTML = cart.map(item => {
    const itemImg = item.images && item.images.front
      ? `<img src="${item.images.front}" alt="${item.name}" onerror="this.style.display='none';this.parentElement.innerHTML='${item.emoji}'">`
      : item.emoji;
    return `
<div class="cart-item">
  <div class="cart-item-img">
    ${itemImg}
  </div>
  <div>
    <div class="cart-item-name">${item.name}</div>
    <div class="cart-item-variant">${item.fandom}</div>
    ${item.original ? `<div class="cart-item-original">Was AED ${item.original}</div>` : ''}
  </div>
  <div class="qty-control">
    <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
    <div class="qty-value">${item.qty}</div>
    <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
  </div>
  <div style="display:flex;align-items:center;gap:12px">
    <div class="cart-item-price">AED ${(item.price * item.qty).toFixed(2)}</div>
    <button class="cart-remove" onclick="removeFromCart(${item.id})">✕</button>
  </div>
</div>
`}).join('');

  const subtotal = cart.reduce((s, x) => s + x.price * x.qty, 0);
  updateSummary(subtotal);
}

function updateSummary(subtotal) {
  const shipping = subtotal > 0 ? 101 : 0;
  const tax = subtotal * 0.05;
  const discount = subtotal > 300 ? 29.09 : 0;
  const total = subtotal + shipping + tax - discount;

  document.getElementById('sum-subtotal').textContent = `AED ${subtotal.toFixed(2)}`;
  document.getElementById('sum-shipping').textContent = `AED ${shipping.toFixed(2)}`;
  document.getElementById('sum-tax').textContent = `AED ${tax.toFixed(2)}`;
  document.getElementById('sum-total').textContent = `AED ${total.toFixed(2)}`;

  const discRow = document.getElementById('sum-discount-row');
  if (discount > 0) {
    discRow.style.display = 'flex';
    document.getElementById('sum-discount').textContent = `-AED ${discount.toFixed(2)}`;
  } else {
    discRow.style.display = 'none';
  }
}

// =========== TOAST ===========
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = '✓ ' + msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// =========== NAVIGATION ===========
function showPage(page) {
  // If we are on a different file, navigate to it
  const pageFiles = {
    home: 'index.html',
    shop: 'shop.html',
    about: 'about.html',
    cart: 'cart.html',
    detail: 'shop.html'
  };

  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  const targetFile = pageFiles[page];

  if (currentFile !== targetFile && !(currentFile === 'index.html' && targetFile === 'index.html')) {
    window.location.href = targetFile + (page === 'detail' ? '?open=' + currentProduct.id : '');
    return;
  }

  // Handle SPA-like switching if we are on the same page
  const pageMap = { home: 'page-home', shop: 'page-shop', detail: 'page-detail', about: 'page-about', cart: 'page-cart' };
  const navMap = { home: 'nav-home', shop: 'nav-shop', about: 'nav-about', cart: null, detail: 'nav-shop' };

  const targetPageEl = document.getElementById(pageMap[page]);
  if (!targetPageEl) return;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  targetPageEl.classList.add('active');
  if (navMap[page]) {
    const navEl = document.getElementById(navMap[page]);
    if (navEl) navEl.classList.add('active');
  }

  if (page === 'cart') renderCart();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openCategory(category) {
  filterByCategory(category);
}

function filterByCategory(category) {
  if (!category) {
    renderShopProducts('all');
    showPage('shop');
    return;
  }

  const el = document.getElementById('shop-products');
  // Filter by fandom or name
  const filtered = products.filter(p =>
    p.fandom.toLowerCase() === category.toLowerCase() ||
    p.name.toLowerCase().includes(category.toLowerCase())
  );

  if (filtered.length > 0) {
    el.innerHTML = filtered.map(p => renderProductCard(p, 'openProduct')).join('');
  } else {
    el.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--muted);">No products found in "${category}" yet.</div>`;
  }

  // Reset filter tabs on shop page
  document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
  const allTab = document.querySelector('.filter-tab');
  if (allTab) allTab.classList.add('active');

  showPage('shop');
}

// =========== INIT ===========
function init() {
  const homeProducts = document.getElementById('home-products');
  if (homeProducts) renderHomeProducts();

  const shopProducts = document.getElementById('shop-products');
  if (shopProducts) renderShopProducts();

  const cartItems = document.getElementById('cart-items-list');
  if (cartItems) renderCart();

  updateCartUI();

  // Check for deep links (e.g., opening a product detail on page load)
  const urlParams = new URLSearchParams(window.location.search);
  const openId = urlParams.get('open');
  if (openId) {
    openProduct(parseInt(openId));
  }
}

init();
