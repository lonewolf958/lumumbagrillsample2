/* =========================================================================
   LUMUMBA GRILL — DIGITAL MENU
   All menu content lives in MENU_DATA below. To update prices or items,
   edit this array only — the page renders itself from this data.
   Prices are in Tanzanian Shillings (TSh) as printed on the source menu.
   m(name, price, description) — description is optional.
   ========================================================================= */

const m = (name, price, desc) => (desc ? { name, price, desc } : { name, price });
const CM = "with Chips or Mash";

const MENU_DATA = [

  {
    id: "starters",
    name: "Starters",

    note: "Please allow 30 minutes for your food to be prepared.",
    items: [
      m("Prawn Cocktail", 14000),
      m("Chicken Wings Chinese Style", 8000),
      m("Drums of Heaven", 8000),
      m("Chicken Lollipop", 12000),
      m("Chicken Wings Pousine", 8000),
      m("Chicken Wings Pilipili", 8000),
      m("Fish Fingers", 13000),
      m("Nundu Masala", 7000),
      m("Mishkaki Masala", 7000)
    ]
  },

  {
    id: "specials",
    name: "Lumumba Specials",
    items: [
      m("Lumumba Mandi for 2", 23000),
      m("Lumumba Mandi for 4", 42000),
      m("Garageza for 2", 23000),
      m("Garageza for 4", 42000),
      m("Beef Vuruga Teriyaki", 15000),
      m("Prawns Calamari Mix", 17000),
      m("Wings Vuruga", 10000),
      m("Moroccan Chicken Rice (half chicken)", 14000),
      m("Seafood Vuruga", 20000),
      m("Lumumba Seafood Plate for 2", 30000, "Served with 2 of: veg rice, mash potatoes or chips."),
      m("Lumumba Seafood Plate for 4", 60000, "Served with 2 of: veg rice, mash potatoes or chips.")
    ]
  },

  {
    id: "barbecue",
    name: "Barbecue",
    items: [
      m("Sekela Chicken", 10000, "with Chips"),
      m("Gajjar Chicken", 10000, "with Chips"),
      m("Tandoor Chicken", 11000, "with Chips"),
      m("Lumumba Special Chicken", 10000, "with Chips"),
      m("Black Pepper Chicken", 10000, "with Chips"),
      m("Kuku Zero", 10000, "with Chips"),
      m("Lemon Chicken", 10000, "with Chips"),
      m("Malai Chicken", 10000, "with Chips"),
      m("Karanga Chicken", 10000, "with Chips"),
      m("Mishkaki Plate", 7000),
      m("Nundu Plate", 7000),
      m("Fish Mishkaki", 6000),
      m("Firigisi, Maini Plate", 6000),
      m("Reshmi Kebab Chicken", 8000),
      m("Beef Seekh Kebab", 9000),
      m("Chicken Tikka Boti Plate", 8000),
      m("Malai Boti Plate", 8000),
      m("Prawns BBQ Jumbo", 20000),
      m("Calamari BBQ", 18000),
      m("Mishkaki Kidebe", 7000),
      m("Nundu Kidebe", 7000),
      m("Ndizi Choma", 2000)
    ]
  },

  {
    id: "sizzler",
    name: "Sizzler",
    items: [
      m("Chicken Sizzler", 15000),
      m("Beef Sizzler", 16000),
      m("Prawns Sizzler", 16000),
      m("Calamari Sizzler", 16000),
      m("Mix Prawns, Calamari", 17000),
      m("Firigisi / Maini Sizzler", 11000)
    ]
  },

  {
    id: "chicken-bone",
    name: "Chicken Bone",
    items: [
      m("Chicken Pousine", 13000, CM),
      m("Chicken Pilipili", 12000, CM),
      m("Lumumba Fried Chicken", 11000, CM),
      m("Lumumba Special Whole Chicken", 23000, "served with Rice"),
      m("Kuku Kidebe", 10000)
    ]
  },

  {
    id: "boneless-chicken",
    name: "Boneless Chicken",
    items: [
      m("Chicken BBQ Steak", 15000, CM),
      m("Chicken Pepper Steak", 15000, CM),
      m("Chicken Garlic Steak", 15000, CM),
      m("Chicken Mushroom Steak", 15000, CM),
      m("Crunchy Chicken", 15000, CM),
      m("Crispy Chicken", 15000, CM),
      m("Chicken Escalope", 15000, CM),
      m("Mixed Veg Chicken (Gravy)", 15000),
      m("Kadai Chicken (Gravy)", 13000),
      m("Chicken Tikka Masala (Gravy)", 13000),
      m("Jeera Chicken (Gravy)", 13000),
      m("Tawa Chicken (Gravy)", 13000),
      m("Chicken Patiala (Gravy)", 13000),
      m("Butter Chicken (Gravy)", 13000),
      m("Chicken Masala (Gravy)", 13000),
      m("Chicken in Oyster Sauce (Gravy/Dry)", 13000),
      m("Mongolian Chicken (Gravy/Dry)", 13000),
      m("Chicken in Black Bean Sauce (Gravy/Dry)", 13000),
      m("Chilly Chicken (Gravy/Dry)", 13000),
      m("Shizwan Chicken (Gravy/Dry)", 13000),
      m("Chicken in Creamy Sauce", 13000)
    ]
  },

  {
    id: "beef",
    name: "Beef",
    items: [
      m("Beef BBQ Steak", 15000, CM),
      m("Beef Pepper Steak", 15000, CM),
      m("Beef Garlic", 15000, CM),
      m("Beef Mushroom Steak", 15000, CM),
      m("T-Bone Steak (250g)", 15000, CM),
      m("T-Bone Steak (500g)", 23000, CM),
      m("Beef Chilly", 13000),
      m("Mongolian Beef", 13000),
      m("Beef Teriyaki", 13000),
      m("Beef in Oyster Sauce", 13000),
      m("Beef in Manchurian", 13000),
      m("Beef in Shizwan", 13000),
      m("Beef in Black Bean Sauce", 13000),
      m("Beef Laaziz", 13000),
      m("Beef Escalope", 13000),
      m("Beef Gosh", 14000)
    ]
  },

  {
    id: "prawns",
    name: "Prawns",
    items: [
      m("In-Garlic Prawns (Dry)", 15000),
      m("Garlic Prawns (Gravy)", 15000),
      m("Fried Prawns", 15000),
      m("Prawns Pilipili", 15000),
      m("Prawns Pousine", 15000),
      m("Crispy Prawns", 15000),
      m("Black Pepper Prawns", 15000),
      m("Prawns Manchurian", 15000),
      m("Prawns in Oyster Sauce", 15000),
      m("Shizwan Prawns (Gravy)", 15000),
      m("Prawns Masala (Gravy)", 15000),
      m("Prawns Tawa (Gravy)", 15000),
      m("Butter Prawns (Gravy)", 15000),
      m("Prawns Jeera (Gravy)", 15000),
      m("Mixed Veg Prawns", 17000),
      m("Prawns Laaziz", 15000),
      m("Chilly Prawns", 15000),
      m("Prawns Calamari Mix", 17000),
      m("Prawns Sizzler", 18000),
      m("Prawns Tikka Masala", 15000),
      m("Prawns Makhanwala", 15000)
    ]
  },

  {
    id: "calamari",
    name: "Calamari",
    items: [
      m("Prawns Calamari Mix", 17000),
      m("Garlic Calamari", 15000),
      m("Crispy Calamari", 15000),
      m("Fried Calamari", 15000),
      m("Calamari Pilipili", 15000),
      m("Chilly Calamari (Gravy/Dry)", 15000),
      m("Manchurian Calamari (Gravy/Dry)", 15000),
      m("Calamari in Oyster Sauce (Gravy/Dry)", 15000),
      m("Butter Calamari (Gravy)", 15000),
      m("Shizwan Calamari", 15000),
      m("In-Garlic Calamari", 15000),
      m("Calamari Masala (Gravy)", 15000),
      m("Mix Veg. Calamari (Gravy)", 15000),
      m("Calamari Laaziz", 15000)
    ]
  },

  {
    id: "fish",
    name: "Fish",
    items: [
      m("Changu Choma", 14000),
      m("Fried Changu", 14000),
      m("Changu Pousine", 16000),
      m("Changu Masala", 17000),
      m("Changu Mchemsho", 17000),
      m("Butter Changu", 17000),
      m("Changu Pilipili", 16000),
      m("Lemon Changu", 14000),
      m("Jeera Fish Masala", 14000),
      m("Tawa Fish Masala", 14000),
      m("Fish Tikka Masala", 14000),
      m("Chilly Fish", 14000),
      m("Fish Fillet Barbeque", 14000),
      m("Fish Pilipili", 14000),
      m("King Fish", 14000),
      m("King Fish Pilipili", 15000),
      m("King Fish Pousine", 15000),
      m("King Fish BBQ", 14000),
      m("Fish Manchurian", 14000),
      m("Fish Escalope", 14000),
      m("Fish Fingers", 14000)
    ]
  },

  {
    id: "makange",
    name: "Makange",
    items: [
      m("Mbuzi Makange", 15000),
      m("Kuku Kienyeji Makange", 20000),
      m("Firigisi / Maini Makange", 10000),
      m("Samaki Makange", 17000),
      m("Kuku Makange", 15000)
    ]
  },

  {
    id: "vitu-amazing",
    name: "Vitu Amazing",
    items: [
      m("Firigisi / Maini Rice", 10000),
      m("Roast Maini", 8000),
      m("Roast Kuku Kienyeji", 20000),
      m("Roast Mbuzi", 15000),
      m("Honey Wings", 9000)
    ]
  },

  {
    id: "foil",
    name: "Foil",
    items: [
      m("Foil Mbuzi (half Kg)", 18000),
      m("Foil Kuku (half Kg)", 12000),
      m("Foil Samaki", 18000),
      m("Foil Kuku Kienyeji", 20000)
    ]
  },

  {
    id: "vegetables",
    name: "Vegetables",
    items: [
      m("Mixed Vegetables Masala", 8000),
      m("Vegetable Qoorma", 8000),
      m("Vegetable Makhanwala", 8000),
      m("Crispy Vegetable", 8000),
      m("Manchurian Vegetable", 9000),
      m("Shizwan Vegetable", 9000),
      m("Paneer Masala", 9000),
      m("Paneer Makhanwala", 9000),
      m("Chilly Paneer", 9000),
      m("Paneer Tikka Masala", 9000)
    ]
  },

  {
    id: "rice",
    name: "Rice",
    items: [
      m("Chicken Fried Rice", 8000),
      m("Beef Fried Rice", 9000),
      m("Vegetable Fried Rice", 5000),
      m("Steamed Rice", 4000),
      m("Mixed Fried Rice", 9000),
      m("Egg Fried Rice", 5000),
      m("Shizwan Chicken Fried Rice", 9000),
      m("Shizwan Vegetable Rice", 6000),
      m("Seafood Rice", 10000),
      m("Shizwan Seafood Rice", 11000),
      m("Moroccan Chicken Rice (half chicken)", 14000)
    ]
  },

  {
    id: "pizza",
    name: "Pizza",
    items: [
      m("Margherita Pizza", 12000, "Cheese, tomato, sauce"),
      m("Chicken Pizza", 14000, "Cheese, tomato, sauce"),
      m("Sausage Pizza", 14000, "Cheese, tomato, sauce"),
      m("Vegetable Pizza", 13000),
      m("Lumumba Grill Pizza", 17000, "Sauce, chicken, sausage, minced beef, cheese"),
      m("Pepperoni Pizza", 15000),
      m("Seafood Pizza", 17000, "Cheese, prawns, calamari, sauce"),
      m("BBQ Chicken Pizza", 15000, "Chicken, pepper, onion, sauce, cheese"),
      m("BBQ Chicken Pizza", 15000, "Chicken, BBQ sauce, onion, cheese"),
      m("Chicken Tikka Pizza", 15000, "Green pepper, onion, chicken, sauce, cheese"),
      m("Hawaii Pizza", 15000, "Pineapple, salami, sauce, cheese"),
      m("Minced Beef Pizza", 15000, "Minced beef, sauce, cheese"),
      m("Vegetable Lovers Pizza", 15000, "Sauce, green pepper, onion, mushroom, olives, carrot, cheese")
    ]
  },

  {
    id: "burger-wraps",
    name: "Burgers & Wraps",
    items: [
      m("Chicken Burger", 8000),
      m("Beef Burger", 8000),
      m("Vegetable Burger", 7000),
      m("Lumumba Burger", 12000),
      m("Chicken Sandwich", 8000),
      m("Beef Sandwich", 8000),
      m("Vegetable Sandwich", 8000),
      m("Lumumba Special Sandwich", 12000),
      m("Chicken Shawarma", 6000),
      m("Beef Shawarma", 8000)
    ]
  },

  {
    id: "pasta",
    name: "Pasta",
    items: [
      m("Chicken Pasta Red Sauce", 14000),
      m("Chicken Pasta White Sauce", 14000),
      m("Seafood Pasta Red Sauce", 16000),
      m("Seafood Pasta White Sauce", 16000),
      m("Beef Pasta Red Sauce", 12000),
      m("Beef Pasta White Sauce", 12000)
    ]
  },

  {
    id: "soup",
    name: "Soup",
    items: [
      m("Chicken Hot & Sour Soup", 8000),
      m("Seafood Hot & Sour Soup", 10000),
      m("Chicken Creamy Soup", 8000),
      m("Seafood Creamy Soup", 10000),
      m("Pweza Soup", 10000)
    ]
  },

  {
    id: "chips",
    name: "Chips",
    items: [
      m("Plain Chips", 3000),
      m("Shizwan Chips", 4000),
      m("Manchurian Chips", 4000),
      m("Chilly Chips", 4000),
      m("Masala Chips", 3000),
      m("Chips Rashidi", 4000),
      m("Mash Potato", 4000)
    ]
  },

  {
    id: "naan",
    name: "Naan",
    items: [
      m("Chapati", 1000),
      m("Butter Naan", 2000),
      m("Garlic Naan", 2000),
      m("Plain Naan", 2000),
      m("Cheese Naan", 4000),
      m("Garlic Cheese Naan", 4000),
      m("Stuff Naan", 3000),
      m("Roti Naan", 2000)
    ]
  }
];


/* ---------- Helpers ---------- */

function formatPrice(n) {
  return "TSh " + n.toLocaleString("en-US") + "/=";
}

function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

/* ---------- Render category navigation ---------- */

function renderNav() {
  const nav = document.getElementById("category-nav");
  MENU_DATA.forEach((cat) => {
    const btn = el("button", "nav-pill");
    btn.type = "button";
    btn.textContent = cat.name;
    btn.dataset.target = cat.id;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", "false");
    btn.addEventListener("click", () => {
      const target = document.getElementById(cat.id);
      if (!target) return;
      const headerOffset = document.querySelector(".category-nav").offsetHeight + 12;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    });
    nav.appendChild(btn);
  });
}

/* ---------- Render menu sections ---------- */

function renderMenu() {
  const main = document.getElementById("menu-content");

  MENU_DATA.forEach((cat) => {
    const section = el("section", "category-section");
    section.id = cat.id;
    section.setAttribute("aria-labelledby", cat.id + "-heading");

    const heading = el("h2", "category-heading");
    heading.id = cat.id + "-heading";
    heading.textContent = cat.name;
    section.appendChild(heading);

    if (cat.note) {
      section.appendChild(el("p", "category-note", cat.note));
    }

    const list = el("div", "item-list");

    cat.items.forEach((item) => {
      const row = el("article", "menu-item");

      const info = el("div", "menu-item-info");
      info.appendChild(el("h3", "menu-item-name", item.name));
      if (item.desc) {
        info.appendChild(el("p", "menu-item-desc", item.desc));
      }
      row.appendChild(info);

      if (cat.sizeLabels) {
        const priceWrap = el("div", "menu-item-price menu-item-price--dual");
        const small = el("div", "price-option");
        small.innerHTML =
          '<span class="price-option-label">' +
          cat.sizeLabels[0] +
          '</span><span class="price-option-value">' +
          formatPrice(item.small) +
          "</span>";
        const large = el("div", "price-option");
        large.innerHTML =
          '<span class="price-option-label">' +
          cat.sizeLabels[1] +
          '</span><span class="price-option-value">' +
          formatPrice(item.large) +
          "</span>";
        priceWrap.appendChild(small);
        priceWrap.appendChild(large);
        row.appendChild(priceWrap);
      } else {
        const price = el("div", "menu-item-price", formatPrice(item.price));
        row.appendChild(price);
      }

      list.appendChild(row);
    });

    section.appendChild(list);
    main.appendChild(section);
  });
}

/* ---------- Active category highlighting on scroll ---------- */

function setupActiveTracking() {
  const pills = Array.from(document.querySelectorAll(".nav-pill"));
  const sections = MENU_DATA.map((c) => document.getElementById(c.id));
  const navEl = document.querySelector(".category-nav");

  function setActive(id) {
    pills.forEach((p) => {
      const isActive = p.dataset.target === id;
      p.classList.toggle("active", isActive);
      p.setAttribute("aria-selected", isActive ? "true" : "false");
      if (isActive) {
        p.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      root: null,
      rootMargin: `-${navEl.offsetHeight + 20}px 0px -70% 0px`,
      threshold: 0,
    }
  );

  sections.forEach((s) => s && observer.observe(s));

  // Set initial active state
  if (sections[0]) setActive(sections[0].id);
}

/* ---------- Init ---------- */

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderMenu();
  setupActiveTracking();

  document.getElementById("year").textContent = new Date().getFullYear();
});