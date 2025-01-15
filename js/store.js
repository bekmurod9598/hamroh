"use strict";
import { parametrs } from "../helpers/options.js";

class Store {
  constructor(img, name, address, workTime, phone, location, defaultImg) {
    this.img = img;
    this.name = name;
    this.address = address;
    this.workTime = workTime;
    this.phone = phone;
    this.location = location;
    this.defaultImg = defaultImg;
  }

  render() {
    const element = document.createElement("div");
    element.innerHTML = `
      <div class="store">
        <figure class="store__img">
          <img src="${this.img}" alt="${this.name}" />
          <span>${this.defaultImg ? "" : "*Do'konning asl surati emas"}</span>
        </figure>
        <div>
          <div class="store__info">
            <i class="fa-solid fa-location-dot"></i>
            <div>
              <h3 class="store__title">${this.name}</h3>
              <h3 class="store__title">${this.address}</h3>
            </div>
          </div>
          <div class="store__info">
            <i class="fa-regular fa-clock"></i>
            <div>
              <h3 class="store__title">${this.workTime}</h3>
              <span class="store__status">Ochiq</span>
            </div>
          </div>
          <div class="store__info">
            <i class="fa-solid fa-phone-volume"></i>
            <a href="tel:${this.phone}" class="store__title">${this.phone}</a>
          </div>
          <div class="store__info">
            <i class="fa-solid fa-route"></i>
            <a href="${
              this.location
            }" target="_blank" class="store__title store__title_link">Yoʻnalishlar uchun xaritaga qarang</a>
          </div>
        </div>
      </div>
    `;
    return element;
  }
}

const { regions } = parametrs;
let stores = [];

/** FILTER FORM */
const area = document.querySelector(".form #area");
const city = document.querySelector(".form #city");
const submit = document.querySelector(".form #submit");
const clearBtn = document.querySelector(".form #clear-btn"); // Clear button

// Fill area select options
regions.forEach((item) => {
  stores.push(...item.branches);
  const option = document.createElement("option");
  option.value = item.id;
  option.innerText = item.name;
  area.appendChild(option);
});

// Fill city select options (Initially all cities)
function fillCityOptions() {
  // Clear previous city options
  city.innerHTML = "<option value='0'>Shaharni tanlang</option>";

  stores.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.innerText = item.name;
    city.appendChild(option);
  });
}

// Function to update city options based on selected area
function updateCityOptions(areaId) {
  // Clear existing city options
  city.innerHTML = "<option value='0'>Shaharni tanlang</option>";

  // If area is selected, filter cities by that area
  if (areaId !== "0" && areaId !== "") {
    const selectedRegion = regions.find(
      (region) => region.id === parseInt(areaId)
    );
    if (selectedRegion) {
      selectedRegion.branches.forEach((branch) => {
        const option = document.createElement("option");
        option.value = branch.id;
        option.innerText = branch.name;
        city.appendChild(option);
      });
    }
  } else {
    // If no area is selected, show all cities
    fillCityOptions();
  }
}

// State object to hold temporary filter values
const filterState = { areaId: "", cityId: "" };

// Filter stores based on selected area and city
function filterStores(areaId, cityId) {
  return parametrs.regions.reduce((filteredStores, region) => {
    if (areaId && areaId !== "0" && region.id !== parseInt(areaId))
      return filteredStores;

    const filteredBranches = region.branches.filter((branch) => {
      return !cityId || cityId === "0" || branch.id === parseInt(cityId);
    });

    return [...filteredStores, ...filteredBranches];
  }, []);
}

// Apply filters and update view
function applyFilters() {
  const filteredStores = filterStores(filterState.areaId, filterState.cityId);
  currentPage = 1;
  renderPaginationControls(filteredStores.length, itemsPerPage);
  renderData(paginate(filteredStores, currentPage, itemsPerPage));
}

// Event listeners for select inputs to update state
area.addEventListener("change", (e) => {
  filterState.areaId = e.target.value;
  updateCityOptions(filterState.areaId); // Update city options based on selected area
  // applyFilters();
});

city.addEventListener("change", (e) => {
  filterState.cityId = e.target.value;
  // applyFilters();
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  applyFilters();
});

// Clear button event listener to reset the filters
// clearBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   // Reset select inputs
//   area.value = "0";
//   city.value = "0";

//   // Reset filterState
//   filterState.areaId = "";
//   filterState.cityId = "";

//   // Fill city options again if no area is selected
//   fillCityOptions();

//   // Apply filters with empty values
//   applyFilters();
// });

/** PAGINATION */
let currentPage = 1;
const itemsPerPage = 10;

function paginate(array, page, itemsPerPage) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return array.slice(startIndex, endIndex);
}

function renderData(items) {
  const container = document.querySelector(".main .stores-wrapper");
  container.innerHTML = items.length
    ? ""
    : "<p>Hech qanday ma’lumot topilmadi!</p>";

  const fragment = new DocumentFragment();
  items.forEach((item) => {
    const store = new Store(
      item.img ? item.img : "../assets/img/stores/default1.png",
      item.name,
      item.address,
      `${item.workTime.open} - ${item.workTime.close}`,
      "+998558014444",
      item.location,
      item.img ? true : false
    );
    fragment.append(store.render());
  });

  container.append(fragment);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderPaginationControls(totalItems, itemsPerPage) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginationContainer = document.getElementById("pagination-controls");
  paginationContainer.innerHTML = "";

  const prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) currentPage--;
    updatePagination();
  });
  paginationContainer.appendChild(prevButton);

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

  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) currentPage++;
    updatePagination();
  });
  paginationContainer.appendChild(nextButton);
}

function updatePagination() {
  const filteredStores = filterStores(filterState.areaId, filterState.cityId);
  const paginatedItems = paginate(filteredStores, currentPage, itemsPerPage);
  renderData(paginatedItems);
  renderPaginationControls(filteredStores.length, itemsPerPage);
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  filterState.areaId = area.value || "0";
  filterState.cityId = city.value || "0";
  fillCityOptions(); // Initially fill all city options
  applyFilters();
});
