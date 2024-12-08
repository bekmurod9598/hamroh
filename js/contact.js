"use strict";

const submit = document.querySelector(".form .form__submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Xabaringiz yuborildi");
});

const img = {
  // slider uchun min size
  slider: {
    width: "1280px",
    height: "960px",
    count: { min: 1, max: "optional" },
  },

  // product category
  category: {
    width: "250px",
    height: "140px",
    count: "nechta kategoriya bo'lsa shuncha rasim va nomlari",
  },

  aksiyalar: {
    width: "1280px",
    height: "480px",
    count: { min: 1, max: "optional" },
  },
  
  dokonlar: {
    width: "580px",
    height: "350px",
    count: { min: 1, max: "optional" },
  },
};
