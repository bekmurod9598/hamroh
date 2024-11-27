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
if (currentPath.endsWith("index.html")) {
  pages.forEach((page) => {
    if (page.url !== "../index.html") {
      page.url = `pages/${page.url}`;
    }
  });
}

// Create a navbar
const navbar = document.querySelector(
  ".header .header__nav-wrapper .nav .nav-list"
);
// Created fragment
const navbarFragment = new DocumentFragment();

if (navbar) {
  pages.forEach((page) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    li.classList.add("nav-list__item");
    link.classList.add("nav-list__item-link");
    link.textContent = page.name;
    link.href = page.url;

    // Setting an active link
    if (
      currentPath.includes(page.url.replace("../", "").replace("pages/", ""))
    ) {
      link.classList.add("active");
    }
    li.append(link);
    navbarFragment.append(li);
  });
}

navbar.append(navbarFragment);
