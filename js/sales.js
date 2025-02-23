"use strict";
/*
import { turncate } from "../helpers/global.js";
class Sales {
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
            ${turncate(this.description, 74, "...")}
          </p>
        </div>

        <div class="sales-card__action">
          <span><i class="fa-regular fa-eye"></i> ${this.view}</span>
          <a href="sales-slug.html">
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `;
    return element;
  }
}

const sales = [
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
  //
  {
    title: "“Yangi yil shukuxi” aksiyasi",
    description: "Avtomat kir yuvish mashinalari uchun 40% ChEGIRMA",
    img: "../assets/img/sales/chegirma.jpg",
    discountPeriod: {
      from: "18.12.2024",
      to: "31.12.2024",
    },
  },
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
];

function renderSales(params) {
  let fragment = new DocumentFragment();
  params.forEach((item, index) => {
    const el = new Sales(
      item.img,
      item.title,
      item.discountPeriod,
      item.title,
      item.description,
      108 + index
    );
    fragment.append(el.render());
  });
  const container = document.querySelector("#sales .sales-wrapper");
  container.innerHTML = "";
  container.append(fragment);
}
renderSales(sales);
*/

// LOAD MORE
/*
const loadMore = document.querySelector("#sales #load-more");

loadMore.addEventListener("click", () => {
  sales.push(...sales.slice(0, 6));
  renderSales(sales);
});
*/
