"use strict";
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
    img: "../assets/img/sales/phone.jpg",
  },
  {
    img: "../assets/img/sales/tools.jpg",
  },
  {
    img: "../assets/img/sales/chegirma.jpg",
  },
];

function renderSales(params) {
  let fragment = new DocumentFragment();
  params.forEach((item, index) => {
    const el = new Sales(
      item.img,
      "image alt",
      {
        from: "20.11.2024",
        to: "19.12.2024",
      },
      "Title",
      "Do‘konlarimizdan 25% chegirma bilan OPPO smartfonlarini xarid qilib, zamon. qwerty",
      108 + index
    );
    fragment.append(el.render());
  });
  const container = document.querySelector("#sales .sales-wrapper");
  container.innerHTML = "";
  container.append(fragment);
}
renderSales(sales);
// LOAD MORE
const loadMore = document.querySelector("#sales #load-more");

loadMore.addEventListener("click", () => {
  sales.push(...sales.slice(0, 3));
  renderSales(sales);
});
