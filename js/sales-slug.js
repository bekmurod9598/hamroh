"use strict";

// Boshlanish va tugash vaqtlarini belgilang (ISO formatda yozing)
const startDate = "2024-11-28T00:00:00Z"; // UTC format
const endDate = "2024-12-31T23:59:59Z"; // UTC format

function getTime(startTime, endTime) {
  const now = new Date(); // Hozirgi vaqt
  const start = new Date(startTime); // Boshlanish UTC vaqti
  const end = new Date(endTime); // Tugash UTC vaqti

  const localNow = now.getTime(); // Foydalanuvchi lokal vaqti
  const localStart = start.getTime(); // Boshlanish lokal vaqtga o'tkaziladi
  const localEnd = end.getTime(); // Tugash lokal vaqtga o'tkaziladi

  if (localNow < localStart) {
    return {
      total: localStart - localNow,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      beforeStart: true, // Aksiya hali boshlanmagan
    };
  }

  const total = localEnd - localNow,
    days = Math.floor(total / (1000 * 60 * 60 * 24)),
    hours = Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((total / (1000 * 60)) % 60),
    seconds = Math.floor((total / 1000) % 60);

  return {
    total: total,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    beforeStart: false, // Aksiya davom etmoqda
  };
}

function getZero(num) {
  if (num >= 0 && num < 10) {
    return "0" + num;
  } else return num;
}

function setClock(selector, startTime, endTime) {
  const timer = document.querySelector(selector),
    days = timer.querySelector("#days"),
    hours = timer.querySelector("#hours"),
    minutes = timer.querySelector("#minutes"),
    seconds = timer.querySelector("#seconds"),
    timeInterval = setInterval(updateClock, 1000);

  const remainingDays = document.querySelector(".slug #remaining-days"),
    saleTimerTitle = document.querySelector(".slug #saleTimerTitle");
  updateClock();

  function updateClock() {
    const time = getTime(startTime, endTime);

    if (time.beforeStart) {
      // Aksiya hali boshlanmagan bo'lsa
      remainingDays.innerHTML = "x kun bor";
      saleTimerTitle.innerHTML = "Aksiya boshlanishiga oz vaqt qoldi";
      days.innerHTML = "00";
      hours.innerHTML = "00";
      minutes.innerHTML = "00";
      seconds.innerHTML = "00";
      return;
    }
    if (3 < time.days && time.days < 8) {
      remainingDays.classList.add("warning");
    } else if (time.days < 4) {
      if (remainingDays.classList.contains("warning")) {
        remainingDays.classList.remove("warning");
      }
      remainingDays.classList.add("danger");
    }

    remainingDays.innerHTML = `${time.days} kun qoldi`;
    saleTimerTitle.textContent = "Aksiya tugashiga oz vaqt qoldi";
    days.innerHTML = getZero(time.days);
    hours.innerHTML = getZero(time.hours);
    minutes.innerHTML = getZero(time.minutes);
    seconds.innerHTML = getZero(time.seconds);

    if (time.total <= 0) {
      // Aksiya tugagan bo'lsa
      remainingDays.innerHTML = "tugadi";
      clearInterval(timeInterval);
      saleTimerTitle.textContent = "Aksiya vaqti tugadi";
      days.innerHTML = "00";
      hours.innerHTML = "00";
      minutes.innerHTML = "00";
      seconds.innerHTML = "00";
    }
  }
}

// Timerni ishga tushirish
setClock(".timer", startDate, endDate);
