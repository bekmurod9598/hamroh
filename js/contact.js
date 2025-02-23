"use strict";

const submit = document.querySelector(".form .form__submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Xabaringiz yuborildi");
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
