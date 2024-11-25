"use strict";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true, // Loop through slides
  autoplay: {
    delay: 3000, // Auto-slide every 3 seconds
  },
  speed: 500,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
