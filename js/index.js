"use strict";

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
const sliders = [
  {
    img: "../assets/img/slider/Fayzli-yakshanba-aksiyasi.jpg",
    alt: "Fayzli-yakshanba-aksiyasi",
  },
  {
    img: "../assets/img/slider/Fayzli-yakshanba-aksiyasi.jpg",
    alt: "Fayzli-yakshanba-aksiyasi",
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
    img: "../assets/img/sales/phone.jpg",
  },
  {
    img: "../assets/img/sales/tools.jpg",
  },
  {
    img: "../assets/img/sales/washing-machine.jpg",
  },
];
shortSales.forEach((item, index) => {
  const el = new ShortSales(
    item.img,
    "image alt",
    {
      from: "20.11.2024",
      to: "19.12.2024",
    },
    "Title",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    108 + index
  );
  shortSalesFragment.append(el.render());
});

document.querySelector(".section .short-sales").append(shortSalesFragment);

/** STORE ADDRESS */

// select input
const regions = [
  {
    id: 1,
    name: "Farg‘ona",
    branches: [
      {
        id: 11,
        name: "Qo‘qon",
        address: "Qo‘qon shaxar, Turkiston ko‘chasi 130-uy",
        location:
          "https://maps.google.com/maps?q=40.532350,70.942634&ll=40.532350,70.942634&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
      {
        id: 12,
        name: "Marg‘ilon",
        address: "Marg‘ilon shaxar, B.Marg‘iloniy ko‘chasi 107-uy",
        location:
          "https://maps.google.com/maps?q=40.477006,71.723744&ll=40.477006,71.723744&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
      {
        id: 13,
        name: "Oltiariq",
        address: "Oltiariq tumani, Amir Temur ko‘chasi 18-uy",
        location:
          "https://maps.google.com/maps?q=40.393350,71.482817&ll=40.393350,71.482817&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
      {
        id: 14,
        name: "Qo‘shtepa",
        address: "Qo‘shtepa tumani, Namuna ko‘chasi 2-uy",
        location:
          "https://maps.google.com/maps?q=40.454531,71.661507&ll=40.454531,71.661507&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
    ],
  },
  {
    id: 2,
    name: "Toshkent",
    branches: [
      {
        id: 21,
        name: "Olmaliq",
        address: "Olmaliq shaxar, Amir Timur ko‘chasi 31-A dom",
        location:
          "https://maps.google.com/maps?q=40.849288,69.601751&ll=40.849288,69.601751&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
      {
        id: 22,
        name: "Yangiyo‘l",
        address: "Yangiyo‘l shaxar, O.Kuchkorov ko‘chasi 2-uy",
        location:
          "https://maps.google.com/maps?q=41.109726,69.065083&ll=41.109726,69.065083&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
      {
        id: 23,
        name: "Parkent",
        address: "Parkent tumani, Alisher Navoiy shox ko‘chasi 37-uy",
        location:
          "https://maps.google.com/maps?q=41.293496,69.681131&ll=41.293496,69.681131&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
    ],
  },
  {
    id: 3,
    name: "Samarqand",
    branches: [
      {
        id: 31,
        name: "Urgut",
        address: "Urgut tumani, Navoiyshox ko‘chasi 144-uy",
        location:
          "https://maps.google.com/maps?q=39.407948,67.244049&ll=39.407948,67.244049&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
      {
        id: 32,
        name: "Kattaqo‘rg‘on",
        address: "Kattaqo‘rg‘on tumani, Mustaqillik ko‘chasi 36-uy",
        location:
          "https://maps.google.com/maps?q=39.990464,66.234813&ll=39.990464,66.234813&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
      {
        id: 33,
        name: "Chelak",
        address: "Chelak shaxri, Toshkent ko‘chasi 1-uy",
        location:
          "https://maps.google.com/maps?q=39.920341,66.859491&ll=39.920341,66.859491&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
      {
        id: 34,
        name: "Bulung‘ur",
        address: "Bulung‘ur shaxarchasi, O‘zbekiston ko‘chasi 4-uy",
        location:
          "https://maps.google.com/maps?q=39.761698,67.277815&ll=39.761698,67.277815&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
      {
        id: 35,
        name: "Paxtachi",
        address:
          "Paxtachi tumani, Ziyovuddin shaxarchasi Amir Temur ko‘chasi 25-uy",
        location:
          "https://maps.google.com/maps?q=40.032153,65.662805&ll=40.032153,65.662805&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
    ],
  },
  {
    id: 4,
    name: "Namangan",
    branches: [
      {
        id: 41,
        name: "Namangan",
        address: "Namangan shaxar Boburshox ko‘chasi 21-uy",
        location:
          "https://maps.google.com/maps?q=40.974978,71.718943&ll=40.974978,71.718943&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
    ],
  },
  {
    id: 5,
    name: "Buxoro",
    branches: [
      {
        id: 51,
        name: "G‘ijdivon",
        address: "G‘ijdivon tumani Yusuf Xamadoniy ko‘chasi 190-uy",
        location:
          "https://maps.google.com/maps?q=40.093193,64.670273&ll=40.093193,64.670273&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
    ],
  },
  {
    id: 6,
    name: "Surxondaryo",
    branches: [
      {
        id: 61,
        name: "Denov",
        address: "Denov shaxar, Sharof rashidov ko‘sachi 182/4-uy",
        location:
          "https://maps.google.com/maps?q=38.278949,67.895979&ll=38.278949,67.895979&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
      {
        id: 62,
        name: "Sho‘rchi",
        address: "Sho‘rchi tumani, Mustaqillik ko‘chasi 129-uy",
        location:
          "https://maps.google.com/maps?q=37.998944,67.790933&ll=37.998944,67.790933&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
    ],
  },
  {
    id: 7,
    name: "Qashqadaryo",
    branches: [
      {
        id: 71,
        name: "Chiroqchi",
        address: "Chiroqchi tumani, Mustaqillik ko‘chasi 5-uy",
        location:
          "https://maps.google.com/maps?q=39.032131,66.570291&ll=39.032131,66.570291&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
      {
        id: 72,
        name: "Koson",
        address: "Koson tumani, Mustaqillik shox ko‘chasi",
        location:
          "https://maps.google.com/maps?q=39.041247,65.585832&ll=39.041247,65.585832&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
      {
        id: 73,
        name: "Shaxrisabz",
        address: "Shaxrisabz shaxar, Ipak yo‘li ko‘chasi",
        location:
          "https://maps.google.com/maps?q=39.069228,66.835206&ll=39.069228,66.835206&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
    ],
  },
  {
    id: 8,
    name: "Navoiy",
    branches: [
      {
        id: 81,
        name: "Xatirchi",
        address: "Xatirchi tuman mustaqillik ko‘chasi 78-uy",
        location:
          "https://maps.google.com/maps?q=40.030902,65.964341&ll=40.030902,65.964341&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
    ],
  },
  {
    id: 9,
    name: "Xorazm",
    branches: [
      {
        id: 91,
        name: "Xazorasp",
        address: "Xazorasp tumani A.Navoiy ko‘chasi 110-uy",
        location:
          "https://maps.google.com/maps?q=41.310854,61.092979&ll=41.310854,61.092979&z=16",
        workTime: {
          open: "08:30",
          close: "17-00",
          season: "Qishgi mavsum",
        },
      },
    ],
  },
];

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
