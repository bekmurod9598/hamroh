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
