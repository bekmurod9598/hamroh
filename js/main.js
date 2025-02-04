"use strict";

/*
// Dynamic navbar
const pages = [
  {
    name: "Biz haqimizda",
    url: "../index.html",
  },
  {
    name: "Aksiyalar",
    url: "sales.html",
  },
  {
    name: "Do'konlar",
    url: "stores.html",
  },
  {
    name: "Vakansiyalar",
    url: "vacancies.html",
  },
  {
    name: "Aloqa",
    url: "contact.html",
  },
];

// Check if the current page is `index.html' or another file
const currentPath = window.location.pathname;

// Validate URLs if `index.html`
if (currentPath.endsWith("index.html") || currentPath === "/") {
  pages.forEach((page) => {
    if (page.url !== "../index.html") {
      page.url = `pages/${page.url}`;
    }
  });
}

// Create a navbar
const headerNavbar = document.querySelector(".header #nav-list");
const footerNavbar = document.querySelector(".footer #nav-list");
const sidebarList = document.querySelector(".header #sidebarList");

// Created fragment
const headerFragment = new DocumentFragment();
const footerFragment = new DocumentFragment();
const siderbarFragment = new DocumentFragment();


if (headerNavbar && footerNavbar && sidebarList) {
  pages.forEach((page) => {
    const headerLi = document.createElement("li");
    const link = document.createElement("a");
    headerLi.classList.add("nav-list__item");
    link.classList.add("nav-list__item-link");
    link.textContent = page.name;
    link.href = page.url;

    // Setting an active link
    if (
      currentPath.includes(page.url.replace("../", "").replace("pages/", ""))
    ) {
      link.classList.add("active");
    }
    headerLi.append(link);
    // headerFragment.append(headerLi);

    // Footer link (independent from header)
    const footerLi = headerLi.cloneNode(true); // Clone header link for footer
    footerFragment.append(footerLi);

    const sidebarLi = headerLi.cloneNode(true);
    siderbarFragment.append(sidebarLi);
  });
}

headerNavbar.append(headerFragment);
footerNavbar.append(footerFragment);
sidebarList.append(siderbarFragment);
*/

const sidebar = document.querySelector(".header .sidebar");
const burgerBtn = document.querySelector("#burger");
const hideBtn = document.querySelector(".sidebar .sidebar__hide-btn");

burgerBtn.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  sidebar.classList.add("active");
});

hideBtn.addEventListener("click", () => {
  document.body.style.overflow = "visible";
  sidebar.classList.remove("active");
});

let isOpenLocale = false;
const localeBtn = document.querySelector(".header__lang");
const localeList = document.querySelector(".locale-list");
const localeListItem = document.querySelectorAll(
  ".locale-list .locale-list__item"
);

localeBtn.addEventListener("click", () => {
  localeList.classList.toggle("active");
});
localeListItem.forEach((item) => {
  item.addEventListener("click", () => {
    localeList.classList.toggle("active");
  });
});

const phoneInput = document.getElementById("phonemask");

phoneInput.addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, ""); // Faqat raqamlarni oladi
  // Raqam +998 bilan boshlanishi kerak
  if (!value.startsWith("998")) {
    value = "998" + value;
  }

  let formatted = "+998 ";

  if (value.length > 3) {
    formatted += value.substring(3, 5); // 99
  }
  if (value.length > 5) {
    formatted += value.substring(5, 8); // 999
  }
  if (value.length > 8) {
    formatted += value.substring(8, 10); // 99
  }
  if (value.length > 10) {
    formatted += value.substring(10, 12); // 99
  }

  e.target.value = formatted;
  console.log(formatted);
});
