"use strict";

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

console.log(pages);

// Create a navbar
const headerNavbar = document.querySelector(".header #nav-list");
const footerNavbar = document.querySelector(".footer #nav-list");

// Created fragment
const headerFragment = new DocumentFragment();
const footerFragment = new DocumentFragment();

if (headerNavbar && footerNavbar) {
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
    headerFragment.append(headerLi);

    // Footer link (independent from header)
    const footerLi = headerLi.cloneNode(true); // Clone header link for footer
    footerFragment.append(footerLi);
  });
}

headerNavbar.append(headerFragment);
footerNavbar.append(footerFragment);
