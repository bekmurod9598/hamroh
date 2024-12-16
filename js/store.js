"use strict";
import { parametrs } from "../helpers/options.js";

class Store {
  constructor(img, name, address, workTime, phone, location) {
    this.img = img;
    this.name = name;
    this.address = address;
    this.workTime = workTime;
    this.phone = phone;
    this.location = location;
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
          <!-- location -->
          <div class="store__info">
            <i class="fa-solid fa-route"></i>
            <a href="${this.location}" target="_blank" class="store__title store__title_link">Yoʻnalishlar uchun xaritaga qarang</a>
          </div>
        </div>
      </div>
    `;
    return element;
  }
}

const { regions } = parametrs;
const stores = [];

/** FILTER FORM */
const area = document.querySelector(".form #area");
const city = document.querySelector(".form #city");
const submit = document.querySelector(".form #submit");
const areaFragmet = new DocumentFragment();
const cityFragmet = new DocumentFragment();

regions.forEach((item) => {
  stores.push(...item.branches);
  const option = document.createElement("option");
  option.value = item.id;
  option.innerText = item.name;
  areaFragmet.append(option);
});
area.append(areaFragmet);

stores.forEach((item) => {
  const option = document.createElement("option");
  option.value = item.id;
  option.innerText = item.name;
  cityFragmet.append(option);
});
city.append(cityFragmet);

area.addEventListener("change", (e) => {
  console.log(e.target.value);
});
city.addEventListener("change", (e) => {
  console.log(e.target.value);
});
submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("submit");
});

/** PAGINATION */
// Pagination variables
let currentPage = 1;
const itemsPerPage = 10;

// Function to calculate and display items for the current page
function paginate(array, page, itemsPerPage) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return array.slice(startIndex, endIndex);
}
let fragment = new DocumentFragment();
// Render the paginated data
function renderData(items) {
  const container = document.querySelector(".main .stores-wrapper");
  container.innerHTML = ""; // Clear previous data
  items.forEach((item) => {
    const el = new Store(
      "../assets/img/stores/hamroh.webp",
      item.name,
      item.address,
      `${item.workTime.open} - ${item.workTime.close}`,
      "+998558014444",
      item.location
    );
    fragment.append(el.render());
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  container.append(fragment);
}

// Create pagination controls
function renderPaginationControls(totalItems, itemsPerPage) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginationContainer = document.getElementById("pagination-controls");
  paginationContainer.innerHTML = ""; // Clear previous controls

  // Create previous button
  const prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
    }
  });
  paginationContainer.appendChild(prevButton);

  // Create page number buttons
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.className = currentPage === i ? "active" : "";
    button.addEventListener("click", () => {
      currentPage = i;
      updatePagination();
    });
    paginationContainer.appendChild(button);
  }

  // Create next button
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      updatePagination();
    }
  });
  paginationContainer.appendChild(nextButton);
}

// Update pagination view
function updatePagination() {
  const paginatedItems = paginate(stores, currentPage, itemsPerPage);
  renderData(paginatedItems);
  renderPaginationControls(stores.length, itemsPerPage);
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  updatePagination();
});
