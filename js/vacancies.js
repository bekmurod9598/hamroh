"use strict";

class Vacancy {
  constructor(title, weekDay, workTime, salary) {
    this.title = title;
    this.weekDay = weekDay;
    this.workTime = workTime;
    this.salary = salary;
  }
  render() {
    const element = document.createElement("div");
    element.innerHTML = `
      <div class="vacancy">
        <h3 class="vacancy__title">${this.title}</h3>
        <div class="devider"></div>
        <!-- work time -->
        <div class="vacancy__calendar">
          <span>
            <i class="fa-solid fa-calendar-days"></i>
            ${this.weekDay}
          </span>
          <span>
            <i class="fa-regular fa-clock"></i>
            ${this.workTime}
          </span>
        </div>
        <!-- salary -->
        <a class="vacancy__salary" href="vacancies-slug.html">
          <span>
            <i class="fa-solid fa-money-bill-wave"></i>
            ${this.salary}
          </span>
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    `;
    return element;
  }
}

const fragment = new DocumentFragment();
const arr = [1, 2, 3, 4, 5, 6];

arr.forEach((item) => {
  const el = new Vacancy(
    "Sotuv menejer",
    "monday-friday",
    "07:00-19:00",
    "5000000-12000000"
  );
  fragment.append(el.render());
});

document.querySelector(".vacancies-wrapper").append(fragment);
