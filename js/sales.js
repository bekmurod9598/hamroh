"use strict";

const salesCard = document.createElement("div");
const salesWrap = document.querySelector(".sales-wrapper");

class Sales {
  constructor(
    img,
    alt = "",
    validityPeriod,
    title,
    description,
    view,
    parentSelector
  ) {
    this.img = img;
    this.alt = alt;
    this.validityPeriod = validityPeriod;
    this.title = title;
    this.description = description;
    this.view = view;
    this.parent = document.querySelector(parentSelector);
  }

  render() {
    const element = document.createElement("article");

    element.innerHTML = `
      <article class="sales-card">
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
                <a href="./sales-slug.html">
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </article>
    `;
    this.parent.append(element);
  }
}

new Sales(
  "https://picsum.photos/900/800",
  "image",
  {
    from: "20.11.2024",
    to: "19.12.2024",
  },
  "Title",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  108,
  '#sales .sales-wrapper'
).render();
new Sales(
  "https://picsum.photos/900/800",
  "image",
  {
    from: "20.11.2024",
    to: "19.12.2024",
  },
  "Title",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  108,
  '#sales .sales-wrapper'
).render();
new Sales(
  "https://picsum.photos/900/800",
  "image",
  {
    from: "20.11.2024",
    to: "19.12.2024",
  },
  "Title",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  108,
  '#sales .sales-wrapper'
).render();
