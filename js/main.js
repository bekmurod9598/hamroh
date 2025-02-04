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
