"use strict";
import {parametrs} from "../helpers/options.js";

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
      <img
        src="${this.img}"
        alt="${this.alt}"
      />
    `;
        return element;
    }
}

let fragment = new DocumentFragment();
const sliders = [{
    img: "../assets/img/slider/Fayzli-yakshanba-aksiyasi.jpg", alt: "Fayzli-yakshanba-aksiyasi",
}, {
    img: "../assets/img/slider/Fayzli-yakshanba-aksiyasi.jpg", alt: "Fayzli-yakshanba-aksiyasi",
},];

sliders.forEach((item) => {
    const el = new Slider(item.img, item.alt);
    fragment.append(el.render());
});
document.querySelector(".swiper-wrapper").append(fragment);

const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true, // Loop through slides
    autoplay: {
        delay: 3000, // Auto-slide every 3 seconds
    }, speed: 500,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev",
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
const categories = [{
    img: "../assets/img/category/Smartfonlar.jpg", title: "Smartfonlar",
}, {
    img: "../assets/img/category/Televizorlar.jpg", title: "Televizorlar",
}, {
    img: "../assets/img/category/Mebellar.jpg", title: "Mebellar",
}, {
    img: "../assets/img/category/Maishiy-texnikalar.jpg", title: "Maishiy texnikalar",
}, {
    img: "../assets/img/category/Issitgichlar.jpg", title: "Issitgichlar",
}, {
    img: "../assets/img/category/Avto-jihozlar.jpg", title: "Avto jihozlar",
},];

categories.forEach((item) => {
    const el = new Category(item.img, item.title, item.title);
    categoryFragment.append(el.render());
});

document.querySelector(".main .categories").append(categoryFragment);

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

const shortSales = [{
    img: "../assets/img/sales/chegirma.jpg",
}, {
    img: "../assets/img/sales/phone.jpg",
}, {
    img: "../assets/img/sales/tools.jpg",
},];
shortSales.forEach((item, index) => {
    const el = new ShortSales(item.img, "image alt", {
        from: "20.11.2024", to: "19.12.2024",
    }, "Title", "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 108 + index);
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
const {regions} = parametrs;

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
    storeBranches = regions.filter((item) => item.id == currentRegion)[0].branches;
    originalStoreBranches = [...storeBranches];
    renderBranches(storeBranches);
});

// search filter
let originalStoreBranches = [...storeBranches];
let query = "";
const searchInput = document.querySelector(".store-branches .store-branches__search-input");

searchInput.addEventListener("input", (e) => {
    query = e.target.value;

    // Inputni tozalaganda asl massivni qayta tiklash
    if (query.trim() === "") {
        renderBranches(originalStoreBranches); // Asl massivni render qilish
        return;
    }

    // Filtrlash
    let filteredBranches = originalStoreBranches.filter((item) => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    renderBranches(filteredBranches);
});
