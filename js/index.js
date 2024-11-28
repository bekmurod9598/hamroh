"use strict";

/** SLIDER */
class Slider {
  constructor(img, alt = "", parentSelector) {
    this.img = img;
    this.alt = alt;
  }
  render() {
    const element = document.createElement("div");
    element.classList.add("swiper-slide"); // Slides
    element.innerHTML = `
      <img
        style="width: 100%; object-fit: cover"
        src="${this.img}"
        alt="${this.alt}"
      />
    `;
    return element;
  }
}

let fragment = new DocumentFragment();
const sliders = [1, 2, 3, 4, 5];
sliders.forEach((item) => {
  const el = new Slider(
    `https://picsum.photos/id/${1 + item}/1200/900`,
    "sasa",
    ".swiper .swiper-wrapper"
  );
  fragment.append(el.render());
});
document.querySelector(".swiper-wrapper").append(fragment);

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true, // Loop through slides
  autoplay: {
    delay: 3000, // Auto-slide every 3 seconds
  },
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
      <h3 class="categories__card-title">${this.title}</h3>
    `;
    return element;
  }
}

let categoryFragment = new DocumentFragment();
const categories = [1, 2, 3, 4, 5];
categories.forEach((item) => {
  const el = new Category(
    "https://picsum.photos/900/500",
    "alt",
    "category title"
  );
  categoryFragment.append(el.render());
});

document.querySelector(".main .categories").append(categoryFragment);

/** SHORY SALES */
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

const shortSales = [1, 2, 3];
shortSales.forEach((item) => {
  const el = new ShortSales(
    `https://picsum.photos/id/${452 + item}/900/800`,
    "image alt",
    {
      from: "20.11.2024",
      to: "19.12.2024",
    },
    "Title",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    108 + item
  );
  shortSalesFragment.append(el.render());
});

document.querySelector(".section .short-sales").append(shortSalesFragment);
