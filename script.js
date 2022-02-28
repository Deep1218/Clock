let analogHour = document.querySelector(".analog-clock .hour");
let analogMinute = document.querySelector(".analog-clock .minute");
let analogSecond = document.querySelector(".analog-clock .second");

let digitalHour = document.querySelector(".digital-clock .hour");
let digitalMinute = document.querySelector(".digital-clock .minute");
let digitalSecond = document.querySelector(".digital-clock .second");
let digitalAmpm = document.querySelector(".digital-clock .AmPm");

let country = document.querySelector(".selected-country");
let countryList = document.querySelector(".conutry-name");

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
  let time = new Date();
  let utcTimeDiff = time.getTimezoneOffset();

  switch (country.textContent.toLocaleLowerCase()) {
    case "australia":
      time.setMinutes(time.getMinutes() + utcTimeDiff);
      time.setMinutes(time.getMinutes() + 8 * 60);
      break;
    case "canada":
      time.setMinutes(time.getMinutes() + utcTimeDiff);
      time.setMinutes(time.getMinutes() - 6 * 60);
      break;
    case "uk":
      time.setMinutes(time.getMinutes() + utcTimeDiff);
      //   time.setMinutes(time.getMinutes() + 0 * 60);
      break;
    case "us":
      time.setMinutes(time.getMinutes() + utcTimeDiff);
      time.setMinutes(time.getMinutes() - 8 * 60);
      break;

    default:
      break;
  }
  let hh = time.getHours();
  let mm = time.getMinutes();
  let ss = time.getSeconds();

  //   console.log(hh + mm / 12);
  //   console.log(hh);nine
  analogHour.style.transform = `rotateZ(${hh * 30 + mm / 12}deg)`;
  analogMinute.style.transform = `rotateZ(${mm * 6}deg)`;
  analogSecond.style.transform = `rotateZ(${ss * 6}deg)`;
  //   console.log(analogHour);
};
const digitalClock = () => {
  let time = new Date();
  let utcTimeDiff = time.getTimezoneOffset();

  switch (country.textContent.toLocaleLowerCase()) {
    case "australia":
      time.setMinutes(time.getMinutes() + utcTimeDiff);
      time.setMinutes(time.getMinutes() + 8 * 60);
      break;
    case "canada":
      time.setMinutes(time.getMinutes() + utcTimeDiff);
      time.setMinutes(time.getMinutes() - 6 * 60);
      break;
    case "uk":
      time.setMinutes(time.getMinutes() + utcTimeDiff);
      //   time.setMinutes(time.getMinutes() + 0 * 60);
      break;
    case "us":
      time.setMinutes(time.getMinutes() + utcTimeDiff);
      time.setMinutes(time.getMinutes() - 8 * 60);
      break;

    default:
      break;
  }
  let hh = time.getHours();
  let mm = time.getMinutes();
  let ss = time.getSeconds();

  let ampm = hh >= 12 ? "pm" : "am";

  if (hh > 12) {
    hh -= 12;
  } else if (hh == 0) {
    hh = 12;
  }
  //   console.log(`Hours: ${hh}`);
  //   console.log(`Minute: ${mm}`);
  //   console.log(`seconds: ${ss}`);
  //   console.log(`Am/Pm: ${ampm}`);

  digitalHour.textContent = `${hh}:`;
  digitalMinute.textContent = `${mm}:`;
  digitalSecond.textContent = `${ss} `;
  digitalAmpm.textContent = `${ampm}`;
};

setInterval(analogClock, 1000);
setInterval(digitalClock, 1000);
