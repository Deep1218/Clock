const colck = () => {
  let time = new Date();
  let hh = time.getHours();
  let mm = time.getMinutes();
  let ss = time.getSeconds();
  let ampm = hh >= 12 ? "pm" : "am";

  if (hh > 12) {
    hh -= 12;
  } else if (hh == 0) {
    hh = 12;
  }
  digitalHour.textContent = `${hh}:`;
  digitalMinute.textContent = `${mm}:`;
  digitalSecond.textContent = `${ss} `;
  digitalAmpm.textContent = ` ${ampm}`;

  analogHour.style.transform = `rotateZ(${hh * 30 + mm / 12}deg)`;
  analogMinute.style.transform = `rotateZ(${mm * 6}deg)`;
  analogSecond.style.transform = `rotateZ(${ss * 6}deg)`;
};
