(function () {
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  const products = [
    {
      slug: "rolex-datejust-slate",
      brand: "Rolex",
      name: "Datejust 36 Slate Dial",
      category: "watches",
      line: "Classic steel bracelet / 2021 set",
      price: 11800,
      compareAt: 13400,
      image: "assets/images/rolex-datejust-slate.jpg",
      fallback: "assets/placeholders/portrait.svg",
      badge: "Just in",
      availability: "Ready to ship",
      description:
        "A quietly luxurious 36 mm Datejust with a slate sunburst dial, crisp fluted bezel, and bracelet finish that moves effortlessly between tailoring and denim.",
      details: [
        "Automatic movement with in-house inspection complete",
        "Box and papers included with authentication notes",
        "Insured priority delivery and presentation-grade packaging",
      ],
      tags: ["authenticated", "collector edit", "everyday icon"],
      featured: true,
      signature: false,
      gallery: [
        { tone: "hero", label: "Primary view" },
        { tone: "detail", label: "Dial detail" },
        { tone: "material", label: "Bracelet finish" },
      ],
    },
    {
      slug: "cartier-tank-must-onyx",
      brand: "Cartier",
      name: "Tank Must Onyx Dial",
      category: "watches",
      line: "Large model / leather strap",
      price: 6400,
      image: "assets/images/cartier-tank-must-onyx.jpg",
      fallback: "assets/placeholders/portrait.svg",
      badge: "Collector edit",
      availability: "Ready to ship",
      description:
        "An elegant Tank presentation with glossy onyx face, warm case shine, and slim proportions designed to sit close and refined on the wrist.",
      details: [
        "New calfskin strap fitted before release",
        "Service inspection completed",
        "Boutique presentation and insured dispatch",
      ],
      tags: ["formal", "icon", "ready to wear"],
      featured: false,
      signature: false,
      gallery: [
        { tone: "hero", label: "Primary view" },
        { tone: "detail", label: "Case detail" },
        { tone: "studio", label: "Studio angle" },
      ],
    },
    {
      slug: "loro-piana-cashmere-overcoat",
      brand: "Loro Piana",
      name: "Double Cashmere Overcoat",
      category: "clothing",
      line: "Soft camel / full-length drape",
      price: 4200,
      compareAt: 5900,
      image: "assets/images/loro-piana-cashmere-overcoat.jpg",
      fallback: "assets/placeholders/portrait.svg",
      badge: "Signature",
      availability: "Ready to ship",
      description:
        "A softly structured cashmere overcoat with a long line, hidden closure, and a calm editorial drape for winter layers with real presence.",
      details: [
        "Cashmere shell with full lining",
        "Protected garment delivery",
        "Condition report included with purchase",
      ],
      tags: ["tailoring", "cashmere", "signature"],
      featured: true,
      signature: true,
      gallery: [
        { tone: "hero", label: "Silhouette" },
        { tone: "detail", label: "Shoulder line" },
        { tone: "material", label: "Fabric focus" },
      ],
    },
    {
      slug: "saint-laurent-atelier-blazer",
      brand: "Saint Laurent",
      name: "Atelier Wool Blazer",
      category: "clothing",
      line: "Charcoal grain / structured shoulder",
      price: 1980,
      image: "assets/images/saint-laurent-atelier-blazer.jpg",
      fallback: "assets/placeholders/portrait.svg",
      badge: "Low stock",
      availability: "Low stock",
      description:
        "A slim blazer with strong lapel stance, soft wool grain, and a silhouette designed to work over fine knitwear or silk shirting.",
      details: [
        "Peak lapel tailoring cloth",
        "Dry-cleaned and prepared",
        "Condition verified in-house",
      ],
      tags: ["evening", "tailored", "charcoal"],
      featured: false,
      signature: false,
      gallery: [
        { tone: "hero", label: "Front view" },
        { tone: "detail", label: "Lapels" },
        { tone: "studio", label: "Studio angle" },
      ],
    },
    {
      slug: "tom-ford-suede-jodhpur",
      brand: "Tom Ford",
      name: "Suede Jodhpur Boot",
      category: "shoes",
      line: "Espresso suede / polished harness",
      price: 1280,
      image: "assets/images/tom-ford-suede-jodhpur.jpg",
      fallback: "assets/placeholders/portrait.svg",
      badge: "Tailored pick",
      availability: "Ready to ship",
      description:
        "A refined boot with sculpted last, soft tonal depth, narrow ankle line, and the kind of finish that sharpens evening layers immediately.",
      details: [
        "Italian suede upper",
        "Leather sole with original dust bags",
        "Specialist refresh completed",
      ],
      tags: ["boot", "suede", "tailoring"],
      featured: true,
      signature: false,
      gallery: [
        { tone: "hero", label: "Profile" },
        { tone: "detail", label: "Harness detail" },
        { tone: "material", label: "Suede focus" },
      ],
    },
    {
      slug: "louis-vuitton-runner-tide",
      brand: "Louis Vuitton",
      name: "Runner Tide Sneaker",
      category: "shoes",
      line: "Stone leather / tonal mesh",
      price: 1120,
      image: "assets/images/louis-vuitton-runner-tide.jpg",
      fallback: "assets/placeholders/portrait.svg",
      badge: "Travel edit",
      availability: "Ready to ship",
      description:
        "A low-profile luxury runner built around tone and proportion, with layered leather panels, soft technical mesh, and a polished neutral sole.",
      details: [
        "Leather and mesh upper",
        "Rubber outsole with professional refresh",
        "Travel-ready neutral palette",
      ],
      tags: ["sneaker", "neutral", "travel"],
      featured: false,
      signature: false,
      gallery: [
        { tone: "hero", label: "Profile" },
        { tone: "detail", label: "Construction" },
        { tone: "studio", label: "Studio angle" },
      ],
    },
    {
      slug: "le-labo-santal-collector",
      brand: "Le Labo",
      name: "Santal Collector Bottle",
      category: "fragrances",
      line: "100 ml / city reserve edition",
      price: 420,
      image: "assets/images/le-labo-santal-collector.jpg",
      fallback: "assets/placeholders/portrait.svg",
      badge: "Giftable",
      availability: "Ready to ship",
      description:
        "An archive bottle of smoky sandalwood softened by iris and leather facets, finished in collector-size presentation for long rotation wear.",
      details: [
        "Factory sealed collector bottle",
        "Gift-wrap ready",
        "Stored in controlled archive conditions",
      ],
      tags: ["signature scent", "collector", "giftable"],
      featured: true,
      signature: false,
      gallery: [
        { tone: "hero", label: "Bottle view" },
        { tone: "detail", label: "Label detail" },
        { tone: "material", label: "Glass finish" },
      ],
    },
    {
      slug: "byredo-night-veils-set",
      brand: "Byredo",
      name: "Night Veils Discovery Set",
      category: "fragrances",
      line: "Five extrait miniatures",
      price: 240,
      image: "assets/images/byredo-night-veils-set.jpg",
      fallback: "assets/placeholders/portrait.svg",
      badge: "Evening set",
      availability: "Ready to ship",
      description:
        "A discovery set of concentrated extrait compositions with rose, oud, incense, and amber notes designed for private wear and gifting.",
      details: [
        "Five extrait vials",
        "Collector sleeve included",
        "Ideal premium travel format",
      ],
      tags: ["set", "evening", "travel-ready"],
      featured: false,
      signature: false,
      gallery: [
        { tone: "hero", label: "Bottle view" },
        { tone: "detail", label: "Set detail" },
        { tone: "studio", label: "Studio angle" },
      ],
    },
    {
      slug: "bottega-weekend-holdall",
      brand: "Bottega Veneta",
      name: "Intrecciato Weekend Holdall",
      category: "accessories",
      line: "Deep espresso woven leather",
      price: 3650,
      image: "assets/images/bottega-weekend-holdall.jpg",
      fallback: "assets/placeholders/portrait.svg",
      badge: "Travel icon",
      availability: "Ready to ship",
      description:
        "A supple holdall with woven leather body, refined hardware, and a spacious interior sized for a two-day rotation without visual bulk.",
      details: [
        "Woven leather exterior",
        "Shoulder strap included",
        "Protective dust cover and insured shipping",
      ],
      tags: ["travel", "leather", "carry"],
      featured: true,
      signature: false,
      gallery: [
        { tone: "hero", label: "Primary view" },
        { tone: "detail", label: "Leather focus" },
        { tone: "material", label: "Texture study" },
      ],
    },
    {
      slug: "prada-saffiano-pouch",
      brand: "Prada",
      name: "Saffiano Travel Pouch",
      category: "accessories",
      line: "Slate saffiano / zip top",
      price: 840,
      image: "assets/images/prada-saffiano-pouch.jpg",
      fallback: "assets/placeholders/portrait.svg",
      badge: "Carry edit",
      availability: "Low stock",
      description:
        "Structured saffiano leather, subtle hardware, and a flat silhouette give this pouch a clean travel role with minimal visual weight.",
      details: [
        "Leather wrist strap",
        "Zip closure",
        "Slim laptop-compatible form",
      ],
      tags: ["travel", "document carry", "clean lines"],
      featured: false,
      signature: false,
      gallery: [
        { tone: "hero", label: "Primary view" },
        { tone: "detail", label: "Zip detail" },
        { tone: "studio", label: "Studio angle" },
      ],
    },
    {
      slug: "flight-edit-bundle",
      brand: "Atelier Archive",
      name: "Flight Edit Bundle",
      category: "bundles",
      line: "Travel scent, carry good, and soft sneaker pairing",
      price: 1480,
      compareAt: 1720,
      image: "assets/images/flight-edit-bundle.jpg",
      fallback: "assets/placeholders/portrait.svg",
      badge: "Exclusive drop",
      availability: "Exclusive drop",
      description:
        "A private bundle combining a neutral luxury sneaker, discovery scent set, and compact saffiano pouch for effortless carry-on styling.",
      details: [
        "Three-piece curated set",
        "Priority packaging",
        "Exclusive bundle pricing",
      ],
      tags: ["exclusive", "travel", "bundle"],
      featured: true,
      signature: false,
      gallery: [
        { tone: "hero", label: "Bundle view" },
        { tone: "detail", label: "Component detail" },
        { tone: "studio", label: "Studio angle" },
      ],
    },
    {
      slug: "evening-collector-set",
      brand: "Atelier Archive",
      name: "Evening Collector Set",
      category: "bundles",
      line: "Dress watch, fragrance, and tailored outerwear pairing",
      price: 10200,
      compareAt: 11620,
      image: "assets/images/evening-collector-set.jpg",
      fallback: "assets/placeholders/portrait.svg",
      badge: "By request",
      availability: "By request",
      description:
        "A signature bundle pairing formal watch geometry, dark extrait fragrance, and tailored outerwear to create a complete after-hours luxury mood.",
      details: [
        "Reserved appointment purchase",
        "White-glove delivery",
        "Detailed sourcing notes",
      ],
      tags: ["signature", "private purchase", "evening"],
      featured: false,
      signature: false,
      gallery: [
        { tone: "hero", label: "Bundle view" },
        { tone: "detail", label: "Set detail" },
        { tone: "material", label: "Material focus" },
      ],
    },
  ];

  const categories = [
    {
      slug: "watches",
      name: "Watches",
      eyebrow: "Collector timepieces",
      description: "Quiet statement pieces, precise complications, and everyday heirlooms.",
      href: "collections.html?category=watches",
      image: "assets/images/category-watches.jpg",
      fallback: "assets/placeholders/landscape.svg",
      classes: "category-panel--wide",
    },
    {
      slug: "clothing",
      name: "Clothing",
      eyebrow: "Tailored layers",
      description: "Soft structure, elevated fabrics, and refined silhouettes with resale perspective.",
      href: "collections.html?category=clothing",
      image: "assets/images/category-clothing.jpg",
      fallback: "assets/placeholders/landscape.svg",
      classes: "category-panel--tall",
    },
    {
      slug: "shoes",
      name: "Shoes",
      eyebrow: "Grounded luxury",
      description: "Curated leather, suede, and sport-led pairs chosen for shape and finish.",
      href: "collections.html?category=shoes",
      image: "assets/images/category-shoes.jpg",
      fallback: "assets/placeholders/landscape.svg",
      classes: "category-panel--third",
    },
    {
      slug: "fragrances",
      name: "Fragrances",
      eyebrow: "Private scent edit",
      description: "Collector bottles, discovery sets, and rare concentrations with modern depth.",
      href: "collections.html?category=fragrances",
      image: "assets/images/category-fragrances.jpg",
      fallback: "assets/placeholders/landscape.svg",
      classes: "category-panel--third",
    },
    {
      slug: "accessories",
      name: "Accessories",
      eyebrow: "Travel and carry goods",
      description: "Soft leather goods, statement bags, and considered finishing pieces.",
      href: "collections.html?category=accessories",
      image: "assets/images/category-accessories.jpg",
      fallback: "assets/placeholders/landscape.svg",
      classes: "category-panel--third",
    },
    {
      slug: "bundles",
      name: "Bundles",
      eyebrow: "Exclusive pairings",
      description: "Private capsule combinations built around gifting, travel, and immediate wardrobe depth.",
      href: "collections.html?category=bundles",
      image: "assets/images/category-bundles.jpg",
      fallback: "assets/placeholders/landscape.svg",
      classes: "category-panel--full",
    },
  ];

  const CART_KEY = "atelier-archive-static-cart";

  function qs(selector, scope) {
    return (scope || document).querySelector(selector);
  }

  function qsa(selector, scope) {
    return Array.from((scope || document).querySelectorAll(selector));
  }

  function money(value) {
    return currency.format(value);
  }

  function getProduct(slug) {
    return products.find((product) => product.slug === slug) || products[0];
  }

  function getCart() {
    try {
      const parsed = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  function setCart(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    updateCartCount();
  }

  function addToCart(slug, quantity) {
    const cart = getCart();
    const existing = cart.find((item) => item.slug === slug);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ slug, quantity });
    }

    setCart(cart);
  }

  function updateCartItem(slug, quantity) {
    const cart = getCart()
      .map((item) => (item.slug === slug ? { slug, quantity } : item))
      .filter((item) => item.quantity > 0);

    setCart(cart);
  }

  function removeCartItem(slug) {
    setCart(getCart().filter((item) => item.slug !== slug));
  }

  function updateCartCount() {
    const count = getCart().reduce((sum, item) => sum + item.quantity, 0);
    qsa("[data-cart-count]").forEach((node) => {
      node.textContent = String(count);
    });
  }

  function createProductCard(product) {
    return `
      <article class="product-card" data-reveal>
        <a class="product-card__link clickable" href="product.html?product=${product.slug}" data-cursor-label="View">
          <div class="product-card__media" data-tilt>
            <img src="${product.image}" alt="${product.name}" data-fallback="${product.fallback}" />
          </div>
          <div class="product-card__copy">
            <div class="product-card__top">
              <span class="badge">${product.badge}</span>
              <span class="badge">${product.availability}</span>
            </div>
            <p class="product-card__brand">${product.brand}</p>
            <div class="product-card__row">
              <div>
                <h3 class="product-card__title">${product.name}</h3>
                <p class="product-card__line">${product.line}</p>
              </div>
              <strong class="price">${money(product.price)}</strong>
            </div>
          </div>
        </a>
      </article>
    `;
  }

  function renderFeatured() {
    const mount = qs("[data-render='featured']");
    if (!mount) return;
    mount.innerHTML = products
      .filter((product) => product.featured)
      .slice(0, 4)
      .map(createProductCard)
      .join("");
  }

  function renderCategories() {
    const mount = qs("[data-render='categories']");
    if (!mount) return;

    mount.innerHTML = categories
      .map((category) => {
        const count = products.filter((product) => product.category === category.slug).length;
        return `
          <a class="category-panel ${category.classes} clickable" href="${category.href}" data-cursor-label="Browse" data-reveal>
            <div class="category-panel__media">
              <img src="${category.image}" alt="${category.name}" data-fallback="${category.fallback}" />
              <div class="category-panel__overlay"></div>
            </div>
            <div class="category-panel__content">
              <p class="category-panel__label">${category.eyebrow}</p>
              <h3 class="category-panel__title">${category.name}</h3>
              <p class="category-panel__text">${category.description}</p>
              <span class="category-panel__count">${count} pieces</span>
            </div>
          </a>
        `;
      })
      .join("");
  }

  function renderCollection() {
    const mount = qs("[data-render='collection']");
    if (!mount) return;

    const params = new URLSearchParams(window.location.search);
    const input = qs("#collection-search");
    const sort = qs("#collection-sort");
    const filterButtons = qsa("[data-filter]");
    let activeCategory = params.get("category") || "all";

    function applyFilter() {
      const query = (input ? input.value : "").trim().toLowerCase();
      const sortValue = sort ? sort.value : "featured";

      filterButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.filter === activeCategory);
      });

      const result = products
        .filter((product) => activeCategory === "all" || product.category === activeCategory)
        .filter((product) => {
          if (!query) return true;
          return (
            `${product.brand} ${product.name} ${product.line} ${product.category} ${product.tags.join(" ")}`
              .toLowerCase()
              .includes(query)
          );
        })
        .sort((left, right) => {
          if (sortValue === "price-high") return right.price - left.price;
          if (sortValue === "price-low") return left.price - right.price;
          if (sortValue === "latest") return Number(right.badge === "Just in") - Number(left.badge === "Just in");
          return Number(right.featured) - Number(left.featured);
        });

      mount.innerHTML = result.length
        ? result.map(createProductCard).join("")
        : `
            <div class="empty-state" data-reveal>
              <h2>Nothing matched that edit.</h2>
              <p>Try a broader search or switch categories. The archive stays selective, so narrow filters can empty the floor quickly.</p>
            </div>
          `;

      const count = qs("[data-collection-count]");
      if (count) count.textContent = `${result.length} curated results`;
      revealVisible();
      setupTilt();
    }

    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        activeCategory = button.dataset.filter || "all";
        applyFilter();
      });
    });

    if (input) input.addEventListener("input", applyFilter);
    if (sort) sort.addEventListener("change", applyFilter);

    applyFilter();
  }

  function renderProductPage() {
    const root = qs("[data-product-page]");
    if (!root) return;

    const params = new URLSearchParams(window.location.search);
    const product = getProduct(params.get("product"));
    const related = products
      .filter((entry) => entry.slug !== product.slug && entry.category === product.category)
      .slice(0, 3);

    document.title = `${product.name} | Atelier Archive`;

    qs("[data-product-kicker]").textContent = product.category;
    qs("[data-product-brand]").textContent = product.brand;
    qs("[data-product-title]").textContent = product.name;
    qs("[data-product-line]").textContent = product.line;
    qs("[data-product-price]").textContent = money(product.price);
    qs("[data-product-description]").textContent = product.description;
    qs("[data-product-image]").src = product.image;
    qs("[data-product-image]").alt = product.name;
    qs("[data-product-image]").dataset.fallback = product.fallback;
    qs("[data-product-main]").dataset.tone = product.gallery[0].tone;

    const compare = qs("[data-product-compare]");
    if (product.compareAt) {
      compare.textContent = money(product.compareAt);
      compare.hidden = false;
    } else {
      compare.hidden = true;
    }

    const tags = qs("[data-product-tags]");
    tags.innerHTML = `
      <span class="info-pill">${product.availability}</span>
      ${product.tags.map((tag) => `<span>${tag}</span>`).join("")}
    `;

    qs("[data-product-details]").innerHTML = product.details
      .map(
        (detail) => `
          <div class="detail-list__item">
            <span class="detail-list__dot"></span>
            <span>${detail}</span>
          </div>
        `,
      )
      .join("");

    const thumbs = qs("[data-product-thumbs]");
    thumbs.innerHTML = product.gallery
      .map(
        (item, index) => `
          <button class="thumb-card clickable ${index === 0 ? "is-active" : ""}" type="button" data-tone="${item.tone}" data-cursor-label="View">
            <div class="thumb-card__media">
              <img src="${product.image}" alt="${product.name} ${item.label}" data-fallback="${product.fallback}" />
            </div>
            <div class="thumb-card__label">${item.label}</div>
          </button>
        `,
      )
      .join("");

    qsa(".thumb-card", thumbs).forEach((button) => {
      button.addEventListener("click", function () {
        qsa(".thumb-card", thumbs).forEach((entry) => entry.classList.remove("is-active"));
        button.classList.add("is-active");
        qs("[data-product-main]").dataset.tone = button.dataset.tone || "hero";
      });
    });

    const relatedMount = qs("[data-render='related']");
    relatedMount.innerHTML = related.map(createProductCard).join("");

    const qty = qs("[data-qty-value]");
    let quantity = 1;

    function syncQty() {
      qty.textContent = String(quantity);
    }

    qs("[data-qty-minus]").addEventListener("click", function () {
      quantity = Math.max(1, quantity - 1);
      syncQty();
    });

    qs("[data-qty-plus]").addEventListener("click", function () {
      quantity += 1;
      syncQty();
    });

    qs("[data-add-to-cart]").addEventListener("click", function () {
      addToCart(product.slug, quantity);
      this.textContent = "Added to bag";
      setTimeout(() => {
        this.textContent = "Add to bag";
      }, 1400);
    });

    revealVisible();
    setupTilt();
  }

  function renderCartPage() {
    const root = qs("[data-cart-page]");
    if (!root) return;

    const mount = qs("[data-cart-items]");
    const summary = qs("[data-cart-summary]");
    const items = getCart();

    if (!items.length) {
      mount.innerHTML = `
        <div class="empty-state" data-reveal>
          <h2>Your bag is empty.</h2>
          <p>The archive is ready when you are. Start with one standout piece, keep the floor clean, and build the bag from there.</p>
          <div class="hero-actions" style="justify-content:center; margin-top:28px;">
            <a class="button button--primary clickable" href="collections.html" data-cursor-label="Shop">Browse the archive</a>
            <a class="button button--secondary clickable" href="index.html" data-cursor-label="Home">Return home</a>
          </div>
        </div>
      `;
      summary.innerHTML = `
        <h2 class="cart-title" style="font-size:3rem;">Review with clarity.</h2>
        <p class="muted-copy">Add pieces from the product page and they’ll appear here with editable quantity controls.</p>
      `;
      revealVisible();
      return;
    }

    const rows = items
      .map((entry) => {
        const product = getProduct(entry.slug);
        return { product, quantity: entry.quantity, total: product.price * entry.quantity };
      })
      .filter((row) => row.product);

    const subtotal = rows.reduce((sum, row) => sum + row.total, 0);

    mount.innerHTML = rows
      .map(
        ({ product, quantity }) => `
          <article class="cart-item" data-reveal>
            <div class="cart-item__media">
              <img src="${product.image}" alt="${product.name}" data-fallback="${product.fallback}" />
            </div>
            <div class="cart-item__copy">
              <div>
                <p class="meta-kicker">${product.brand}</p>
                <h3 class="cart-item__title">${product.name}</h3>
                <p class="muted-copy">${product.line}</p>
                <div class="pill-row" style="margin-top:16px;">
                  <span>${product.availability}</span>
                  <span>${product.category}</span>
                </div>
              </div>
              <div class="toolbar__row">
                <div>
                  <strong class="price">${money(product.price)}</strong>
                  <div class="qty" style="margin-top:12px;">
                    <button class="clickable" type="button" data-cart-minus="${product.slug}" data-cursor-label="Down">−</button>
                    <span>${quantity}</span>
                    <button class="clickable" type="button" data-cart-plus="${product.slug}" data-cursor-label="Up">+</button>
                  </div>
                </div>
                <button class="button button--ghost clickable" type="button" data-remove="${product.slug}" data-cursor-label="Remove">Remove</button>
              </div>
            </div>
          </article>
        `,
      )
      .join("");

    summary.innerHTML = `
      <h2 class="cart-title" style="font-size:3rem;">Review with clarity.</h2>
      <div class="cart-summary__rows">
        <div class="cart-summary__row"><span>Subtotal</span><strong>${money(subtotal)}</strong></div>
        <div class="cart-summary__row"><span>Insured shipping</span><strong>Calculated</strong></div>
        <div class="cart-summary__row"><span>Returns</span><strong>Eligible items only</strong></div>
      </div>
      <p class="muted-copy">Every order receives insured dispatch, authentication context where applicable, and presentation-grade packaging.</p>
      <div class="hero-actions" style="margin-top:24px;">
        <button class="button button--primary clickable" type="button" data-cursor-label="Checkout">Proceed to checkout</button>
        <a class="button button--secondary clickable" href="collections.html" data-cursor-label="Continue">Continue shopping</a>
      </div>
    `;

    qsa("[data-cart-minus]").forEach((button) => {
      button.addEventListener("click", function () {
        const slug = button.dataset.cartMinus;
        const cart = getCart();
        const current = cart.find((item) => item.slug === slug);
        updateCartItem(slug, Math.max(1, (current ? current.quantity : 1) - 1));
        renderCartPage();
      });
    });

    qsa("[data-cart-plus]").forEach((button) => {
      button.addEventListener("click", function () {
        const slug = button.dataset.cartPlus;
        const cart = getCart();
        const current = cart.find((item) => item.slug === slug);
        updateCartItem(slug, (current ? current.quantity : 0) + 1);
        renderCartPage();
      });
    });

    qsa("[data-remove]").forEach((button) => {
      button.addEventListener("click", function () {
        removeCartItem(button.dataset.remove);
        renderCartPage();
      });
    });

    revealVisible();
  }

  function setupLoader() {
    const loader = qs("[data-loader]");
    if (!loader) return;

    if (sessionStorage.getItem("atelier-loader-seen")) {
      loader.classList.add("is-hidden");
      return;
    }

    setTimeout(() => {
      loader.classList.add("is-hidden");
      sessionStorage.setItem("atelier-loader-seen", "1");
    }, 1200);
  }

  function setupCursor() {
    const shell = qs("[data-cursor-shell]");
    if (!shell) return;
    if (!window.matchMedia("(pointer:fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    document.body.classList.add("cursor-enhanced");
    shell.classList.add("is-enabled");
    const dot = qs(".cursor-dot", shell);
    const label = qs(".cursor-dot span", shell);
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let targetScale = 0.92;
    let currentScale = targetScale;
    let rafId = 0;

    const animate = () => {
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      currentScale += (targetScale - currentScale) * 0.18;

      dot.style.left = `${currentX}px`;
      dot.style.top = `${currentY}px`;
      dot.style.transform = `translate3d(-50%, -50%, 0) scale(${currentScale})`;

      if (
        Math.abs(targetX - currentX) > 0.08 ||
        Math.abs(targetY - currentY) > 0.08 ||
        Math.abs(targetScale - currentScale) > 0.01
      ) {
        rafId = window.requestAnimationFrame(animate);
      } else {
        currentX = targetX;
        currentY = targetY;
        currentScale = targetScale;
        dot.style.left = `${currentX}px`;
        dot.style.top = `${currentY}px`;
        dot.style.transform = `translate3d(-50%, -50%, 0) scale(${currentScale})`;
        rafId = 0;
      }
    };

    const queueFrame = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(animate);
      }
    };

    const updateCursorTarget = (event) => {
      if (!(event.target instanceof Element)) {
        dot.classList.remove("is-active");
        label.textContent = "";
        targetScale = 0.92;
        return;
      }

      const target = event.target.closest("[data-cursor-label], a, button, .clickable");

      if (!target) {
        dot.classList.remove("is-active");
        label.textContent = "";
        targetScale = 0.92;
        return;
      }

      dot.classList.add("is-active");
      label.textContent = target.dataset.cursorLabel || "View";
      targetScale = 1;
    };

    window.addEventListener("pointermove", (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      dot.classList.add("is-visible");
      updateCursorTarget(event);
      queueFrame();
    });

    window.addEventListener("pointerover", updateCursorTarget);

    window.addEventListener("pointerleave", () => {
      dot.classList.remove("is-visible", "is-active");
      label.textContent = "";
      targetScale = 0.92;
      queueFrame();
    });

    window.addEventListener("blur", () => {
      dot.classList.remove("is-visible", "is-active");
      label.textContent = "";
      targetScale = 0.92;
    });
  }

  function setupImageFallbacks() {
    qsa("img[data-fallback]").forEach((img) => {
      if (img.dataset.fallbackBound) return;
      img.dataset.fallbackBound = "1";

      const fallback = img.dataset.fallback;

      img.addEventListener("error", function () {
        if (!fallback || img.src.endsWith(fallback)) return;
        img.src = fallback;
      });

      if (img.complete && img.naturalWidth === 0 && fallback && !img.src.endsWith(fallback)) {
        img.src = fallback;
      }
    });
  }

  function revealVisible() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    qsa("[data-reveal]").forEach((node) => {
      if (!node.classList.contains("is-visible")) observer.observe(node);
    });

    window.setTimeout(() => {
      qsa("[data-reveal]").forEach((node) => node.classList.add("is-visible"));
    }, 700);
  }

  function setupParallax() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nodes = qsa("[data-parallax]");
    if (!nodes.length) return;

    const update = () => {
      const viewport = window.innerHeight;
      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        const speed = Number(node.dataset.parallax || 16);
        const offset = ((rect.top - viewport / 2) / viewport) * speed;
        node.style.transform = `translateY(${offset}px)`;
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function setupTilt() {
    if (!window.matchMedia("(pointer:fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    qsa("[data-tilt]").forEach((node) => {
      if (node.dataset.tiltBound) return;
      node.dataset.tiltBound = "1";

      node.addEventListener("pointermove", (event) => {
        const rect = node.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        const rotateY = (px - 0.5) * 10;
        const rotateX = (0.5 - py) * 10;
        node.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      node.addEventListener("pointerleave", () => {
        node.style.transform = "";
      });
    });
  }

  function markActiveNav() {
    const page = document.body.dataset.page;
    qsa("[data-nav]").forEach((link) => {
      link.classList.toggle("is-active", link.dataset.nav === page);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupLoader();
    setupCursor();
    updateCartCount();
    markActiveNav();
    renderCategories();
    renderFeatured();
    renderCollection();
    renderProductPage();
    renderCartPage();
    revealVisible();
    setupParallax();
    setupTilt();
    setupImageFallbacks();
  });
})();
