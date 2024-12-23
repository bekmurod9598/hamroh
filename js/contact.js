"use strict";

const submit = document.querySelector(".form .form__submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Xabaringiz yuborildi");
});
