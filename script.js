"use strict";
import {
  analogHour,
  analogMinute,
  analogSecond,
  digitalHour,
  digitalMinute,
  digitalSecond,
  digitalAmpm,
  country,
  countryList,
} from "./modules/elements.js";

import { Clock } from "./modules/clock.js";

countryList.addEventListener("click", (event) => {
  for (let i = 0; i < 5; i++) {
    if (event.target.parentNode.children[i].classList[1]) {
      event.target.parentNode.children[i].classList.remove("active");
    } else if (event.target.parentNode.children[i] == event.target) {
      event.target.classList.add("active");
      country.textContent = event.target.textContent;
    }
  }
});

const analogClock = () => {
  const time = new Clock();

  let hh = time.getClockHours();
  let mm = time.getClockMinutes();
  let ss = time.getClockSeconds();

  analogHour.style.transform = `rotateZ(${hh * 30 + mm / 12}deg)`;
  analogMinute.style.transform = `rotateZ(${mm * 6}deg)`;
  analogSecond.style.transform = `rotateZ(${ss * 6}deg)`;
};

const digitalClock = () => {
  let time = new Clock();

  let hh = time.getClockHours();
  let mm = time.getClockMinutes();
  let ss = time.getClockSeconds();

  if (hh > 12) {
    hh -= 12;
  } else if (hh == 0) {
    hh = 12;
  }

  digitalHour.textContent = `${hh <= 9 ? "0" + hh : hh}:`;
  digitalMinute.textContent = `${mm <= 9 ? "0" + mm : mm}:`;
  digitalSecond.textContent = `${ss <= 9 ? "0" + ss : ss} `;
  digitalAmpm.textContent = `${hh >= 12 ? "pm" : "am"}`;
};

setInterval(analogClock, 1000);
setInterval(digitalClock, 1000);
