"use strict";
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
    `;
    return element;
  }
}

let fragment = new DocumentFragment();

const sales = [1, 2, 3, 4, 5, 6];
sales.forEach((item) => {
  const el = new Sales(
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
  fragment.append(el.render());
});

document.querySelector("#sales .sales-wrapper").append(fragment);
