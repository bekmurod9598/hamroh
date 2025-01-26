"use strict";
import { parametrs } from "../helpers/options.js";
import { turncate } from "../helpers/global.js";

/** SLIDER */
class Slider {
  constructor(img, alt = "") {
    this.img = img;
    this.alt = alt;
  }

  render() {
    const element = document.createElement("div");
    element.classList.add("swiper-slide"); // Slides
    element.innerHTML = `
      <picture>
        <source srcset="${this.img.mobileM}" type="image/jpg" media="(max-width: 375px)">
        <source srcset="${this.img.mobileL}" type="image/jpg" media="(max-width: 425px)">
        <source srcset="${this.img.tablet}" type="image/jpg" media="(max-width: 768px)">
        <source srcset="${this.img.laptop}" type="image/jpg" media="(max-width: 1024px)">
        <img src="${this.img.default}" alt="${this.alt}" style="max-width: 100%; height: 100%;">
      </picture>
    `;
    return element;
  }
}

let fragment = new DocumentFragment();
const sliders = [
  {
    img: {
      default: "../assets/img/slider/Fayzli-yakshanba-aksiyasi.jpg",
      laptop: "",
      tablet: "",
      mobileL: "",
      mobileM: "",
    },
    alt: "Fayzli-yakshanba-aksiyasi",
  },
  {
    img: {
      default: "../assets/img/slider/Telefonlar-o'z-narxida-default.jpg",
      laptop: "../assets/img/slider/Telefonlar-o'z-narxida-laptop.jpg",
      tablet: "../assets/img/slider/Telefonlar-o'z-narxida-tablet.jpg",
      mobileL: "../assets/img/slider/Telefonlar-o'z-narxida-mobileL.jpg",
      mobileM: "../assets/img/slider/Telefonlar-o'z-narxida-mobileM.jpg",
    },
    alt: "Fayzli-yakshanba-aksiyasi",
  },
  {
    img: {
      default: "../assets/img/slider/Maishiy-texnikalar-default.jpg",
      laptop: "../assets/img/slider/Maishiy-texnikalarga-laptop.jpg",
      tablet: "../assets/img/slider/Maishiy-texnikalarga-tablet.jpg",
      mobileL: "../assets/img/slider/Maishiy-texnikalarga-mobileL.jpg",
      mobileM: "../assets/img/slider/Maishiy-texnikalarga-mobileM.jpg",
    },
    alt: "Fayzli-yakshanba-aksiyasi",
  },
  {
    img: {
      default: "../assets/img/slider/chegirma.jpg",
      laptop: "",
      tablet: "",
      mobileL: "",
      mobileM: "",
    },
    alt: "40% chegirma",
  },
];

sliders.forEach((item) => {
  const el = new Slider(item.img, item.alt);
  fragment.append(el.render());
});
document.querySelector(".swiper-wrapper").append(fragment);

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true, // Loop through slides
  // autoplay: {
  //   delay: 5000, // Auto-slide every 3 seconds
  // },
  speed: 500,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/** CATEGORIES */
class Category {
  constructor(img, alt = "", title) {
    this.img = img;
    this.alt = alt;
    this.title = title;
  }

  render() {
    const element = document.createElement("div");
    element.classList.add("categories__card");
    element.innerHTML = `
      <figure class="categories__card-img">
        <img loading="lazy" src="${this.img}" alt="${this.alt}" />
      </figure>
      `;
    // <h3 class="categories__card-title">${this.title}</h3>
    return element;
  }
}

let categoryFragment = new DocumentFragment();
const categories = [
  {
    img: "../assets/img/category/Smartfonlar.jpg",
    title: "Smartfonlar",
  },
  {
    img: "../assets/img/category/Televizorlar.jpg",
    title: "Televizorlar",
  },
  {
    img: "../assets/img/category/Mebellar.jpg",
    title: "Mebellar",
  },
  {
    img: "../assets/img/category/Maishiy-texnikalar.jpg",
    title: "Maishiy texnikalar",
  },
  {
    img: "../assets/img/category/Issitgichlar.jpg",
    title: "Issitgichlar",
  },
  {
    img: "../assets/img/category/Avto-jihozlar.jpg",
    title: "Avto jihozlar",
  },
];

categories.forEach((item) => {
  const el = new Category(item.img, item.title, item.title);
  categoryFragment.append(el.render());
});

document.querySelector(".main .categories").append(categoryFragment);

// BEST SELLING
class BestSelling {
  constructor(img, name, details) {
    this.img = img;
    this.name = name;
    this.details = details;
  }

  render() {
    const element = document.createElement("div");
    element.innerHTML = `
      <div class="best-selling-product">
        <div>
          <figure class="best-selling-product__img">
            <img src="${this.img}" loading="lazy" alt="${this.name}">
          </figure>
          <h3 class="best-selling-product__name">
            ${turncate(this.name, 34, "...")}
          </h3>
        </div>
        <button data-product='${JSON.stringify({
          name: this.name,
          img: this.img,
          details: this.details,
        })}' class="best-selling-product__indetail">Batafsil</button>
      </div>
      `;
    return element;
  }
}
let bestSellingFragment = new DocumentFragment();
const bestSellingData = [
  {
    img: "../assets/img/best-selling/Iphone-15.png",
    name: "Smartfon Samsung Galaxy A06 4/128, Qora",
    details: { model: "ops" },
  },
  {
    img: "../assets/img/best-selling/vivo.png",
    name: "Vivo Y19s 6/128GB Black",
    details: {},
  },
  {
    img: "../assets/img/best-selling/kirmoshina.png",
    name: "Kir yuvish mashinasi pol avtomat Vesta",
    details: {},
  },
  {
    img: "../assets/img/best-selling/isitgich.png",
    name: "Issitgich Artel ART OH-13-72",
    details: {},
  },
  {
    img: "../assets/img/best-selling/aniradar.png",
    name: "Radar detektori Neonline X-COP 8800 Wi-Fi",
    details: {},
  },
  {
    img: "../assets/img/best-selling/tv.png",
    name: "Premier PRM 700 FHD LED",
    details: {},
  },
  {
    img: "../assets/img/best-selling/tecno-spark.png",
    name: "Tecno Spark Go 2024 2/64GB Green",
    details: {},
  },
  {
    img: "../assets/img/best-selling/mixer.png",
    name: "Sharbat chiqargich Vltek VT-3653",
    details: {},
  },
  {
    img: "../assets/img/best-selling/gazplita.png",
    name: "Gaz plita Artel Milagro 01-K c GK (Black-Mat)",
    details: {},
  },
  {
    img: "../assets/img/best-selling/pech.png",
    name: "Mini-pech Shivaki MD-4218 E (red&red)",
    details: {},
  },
  {
    img: "../assets/img/best-selling/smartwatch.png",
    name: "Mi Band 6",
    details: {},
  },
  {
    img: "../assets/img/best-selling/xiaomi-redmi.png",
    name: "Xiaomi Redmi 10A EU 3/64GB Gray",
    details: {},
  },
];
bestSellingData.forEach((item) => {
  const el = new BestSelling(item.img, item.name, item.details);
  bestSellingFragment.append(el.render());
});

document
  .querySelector(".section .best-selling-wrap")
  .append(bestSellingFragment);
/** SHORT SALES */
class ShortSales {
  constructor(img, alt = "", validityPeriod, title, description, view) {
    this.img = img;
    this.alt = alt;
    this.validityPeriod = validityPeriod;
    this.title = title;
    this.description = description;
    this.view = view;
  }

  render() {
    const element = document.createElement("article");

    element.classList.add("sales-card");
    element.innerHTML = `
      <!-- img -->
      <figure class="sales-card__figure">
        <img
          class="sales-card__figure-img"
          loading="lazy"
          src="${this.img}"
          alt="${this.alt}"
        />
      </figure>
      <!-- description -->
      <div class="sales-card__info">
        <div>
          <span class="sales-card__datetime"
            >${this.validityPeriod?.from} - ${this.validityPeriod.to}</span
          >
          <h3 class="sales-card__title">
            ${this.title}
          </h3>
          <p class="sales-card__description">
            ${this.description}
          </p>
        </div>

        <div class="sales-card__action">
          <span><i class="fa-regular fa-eye"></i> ${this.view}</span>
          <a href="pages/sales-slug.html">
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `;
    return element;
  }
}

let shortSalesFragment = new DocumentFragment();

const shortSales = [
  {
    title: "“0-0-6” Aksiyasi",
    description:
      "Belgilangan turdagi smartfonlarni 0-0-6 aksiyasi doirasida xarib qiling",
    img: "../assets/img/sales/phone.jpg",
    discountPeriod: {
      from: "18.09.2024",
      to: "25.09.2024",
    },
  },
  {
    title: "Chegirmamisan Chegirma",
    description: "Epa mahsulotlarini 20% lik chegirmada xarid qiling",
    img: "../assets/img/sales/tools.jpg",
    discountPeriod: {
      from: "27.10.2024",
      to: "31.10.2024",
    },
  },
  {
    title: "“Yangi yil shukuxi” aksiyasi",
    description: "Avtomat kir yuvish mashinalari uchun 40% ChEGIRMA",
    img: "../assets/img/sales/chegirma.jpg",
    discountPeriod: {
      from: "18.12.2024",
      to: "31.12.2024",
    },
  },
];
shortSales.forEach((item, index) => {
  const el = new ShortSales(
    item.img,
    item.title,
    item.discountPeriod,
    item.title,
    item.description,
    108 + index
  );
  shortSalesFragment.append(el.render());
});

document.querySelector(".section .short-sales").append(shortSalesFragment);

/** FAQ */
// ACCORDION
const accordion = document.querySelectorAll(".accordion");

accordion.forEach((acc) => {
  acc.addEventListener("click", () => {
    acc.classList.toggle("active");
    const panel = acc.nextElementSibling; // .nextElementSibling - bu acc dan kegin keladigan birinchi ukasi(element) ga murojaat qiladi

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

/** STORE ADDRESS */

// select input
const { regions } = parametrs;

const regionFragment = new DocumentFragment();
regions.forEach((item) => {
  let option = document.createElement("option");
  option.value = item.id;
  option.innerText = item.name;
  regionFragment.append(option);
});
document.querySelector(".store-branches .select-input").append(regionFragment);

// branches card
let currentRegion = 1;
const search = document.querySelector(".store-branches__search-input");
let storeBranches = regions.filter((item) => item.id === 1)[0].branches;

class StoreBranch {
  constructor(name, address, workTime) {
    this.name = name;
    this.address = address;
    this.workTime = workTime;
  }

  render() {
    const element = document.createElement("div");
    element.classList.add("store-branches__item");
    element.innerHTML = `
      <div style="display: flex; gap: 0.75rem; margin-bottom: 12px">
        <i class="fa-solid fa-location-dot"></i>
        <div>
          <h3 class="store-branches__item-title">${this.name}</h3>
          <span class="store-branches__item-subtitle">
            ${this.address}
          </span>
        </div>
      </div>
      <div style="display: flex; gap: 0.75rem">
        <i class="fa-regular fa-clock"></i>
        <div style="width: 100%;">
          <h3 class="store-branches__item-title">
            ${this.workTime.open} - ${this.workTime.close}
            <span>${this.workTime.season}</span>
          </h3>
          <span class="store-branches__item-subtitle">Ochiq</span>
        </div>
      </div>
    `;
    return element;
  }
}

function renderBranches(params) {
  let storeBranchFragment = new DocumentFragment();

  params.forEach((item) => {
    const el = new StoreBranch(item.name, item.address, item.workTime);
    storeBranchFragment.append(el.render());
  });

  document
    .querySelector(".store-branches-wrapper .store-branches #branches")
    .replaceChildren(storeBranchFragment);
}

renderBranches(storeBranches);

// select input
const selectInput = document.querySelector(".store-branches .select-input");
selectInput.addEventListener("change", (e) => {
  currentRegion = +e.target.value;
  storeBranches = regions.filter((item) => item.id == currentRegion)[0]
    .branches;
  originalStoreBranches = [...storeBranches];
  renderBranches(storeBranches);
});

// search filter
let originalStoreBranches = [...storeBranches];
let query = "";
const searchInput = document.querySelector(
  ".store-branches .store-branches__search-input"
);

searchInput.addEventListener("input", (e) => {
  query = e.target.value;

  // Inputni tozalaganda asl massivni qayta tiklash
  if (query.trim() === "") {
    renderBranches(originalStoreBranches); // Asl massivni render qilish
    return;
  }

  // Filtrlash
  let filteredBranches = originalStoreBranches.filter((item) =>
    item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
  renderBranches(filteredBranches);
});

// MODAL
const modal = document.createElement("div");
modal.classList.add("modal-wrap");
modal.innerHTML = `
  <div class="modal">
    <div class="modal__close modal__close_mobile"><i class="fa-solid fa-xmark"></i></div>
    <div class="modal__img"><img src="" alt=""></div>
    <div class="modal__details">
      <div class="modal__close"><i class="fa-solid fa-xmark"></i></div>
      <h3 class="modal__title"></h3>
      <p class="modal__description"></p>
    </div>
  </div>
`;
document.body.append(modal);

const modalClose = modal.querySelector(".modal__close");
modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});

const products = document.querySelectorAll(".best-selling-product");

products.forEach((product) => {
  product.addEventListener("click", (evt) => {
    if (
      evt.target &&
      (evt.target.tagName === "BUTTON" ||
        evt.target.closest(".best-selling-product__img"))
    ) {
      try {
        const productData = JSON.parse(
          product.querySelector("button").getAttribute("data-product")
        );
        modal.querySelector(".modal__img img").src = productData.img;
        modal.querySelector(".modal__title").textContent = productData.name;
        modal.querySelector(".modal__description").textContent =
          "Lorem ipsum dolor sit amet consectetur adipisicing.";
        modal.style.display = "flex";
      } catch (error) {
        console.error("Failed to parse product data:", error);
      }
    }
  });
});
