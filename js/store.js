"use strict";

class Store {
  constructor(img, name, address, workTime, phone, map) {
    this.img = img;
    this.name = name;
    this.address = address;
    this.workTime = workTime;
    this.phone = phone;
    this.map = map;
  }

  render() {
    const element = document.createElement("div");
    element.innerHTML = `
      <div class="store">
        <figure class="store__img">
          <img src="${this.img}" alt="${this.name}" />
        </figure>

        <!-- info block -->
        <div>
          <!-- address -->
          <div class="store__info">
            <i class="fa-solid fa-location-dot"></i>
            <div>
              <!-- store name -->
              <h3 class="store__title">${this.name}</h3>
              <!-- store address -->
              <h3 class="store__title">${this.address}</h3>
            </div>
          </div>
          <!-- work time -->
          <div class="store__info">
            <i class="fa-regular fa-clock"></i>
            <div>
              <h3 class="store__title">${this.workTime}</h3>
              <span class="store__status">Ochiq</span>
            </div>
          </div>
          <!-- phone -->
          <div class="store__info">
            <i class="fa-solid fa-phone-volume"></i>
            <a href="tel:${this.phone}" class="store__title">${this.phone}</a>
          </div>
          <!-- map -->
          <div class="store__info">
            <i class="fa-solid fa-route"></i>
            <a href="${this.map}" class="store__title store__title_link">Yoʻnalishlar uchun xaritaga qarang</a>
          </div>
        </div>
      </div>
    `;
    return element;
  }
}

let fragment = new DocumentFragment();

const stores = [1, 2, 3];
stores.forEach((item) => {
  const el = new Store(
    "https://picsum.photos/900/650",
    "Store name",
    "Address. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "08:30-17:00",
    "+998558014444",
    "#"
  );
  fragment.append(el.render());
});

document.querySelector(".main .stores-wrapper").append(fragment);
