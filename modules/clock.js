import { country } from "./elements.js";

export class Clock {
  #time = new Date(); //private variable

  //if we need time inn future
  getTime() {
    return this.#time;
  }

  //private method to set time as per the selected country
  #setTime(selector = country.textContent.toLocaleLowerCase()) {
    let utcTimeDiff = this.#time.getTimezoneOffset();

    switch (selector) {
      case "australia":
        this.#time.setMinutes(this.#time.getMinutes() + utcTimeDiff);
        this.#time.setMinutes(this.#time.getMinutes() + 8 * 60);
        break;
      case "canada":
        this.#time.setMinutes(this.#time.getMinutes() + utcTimeDiff);
        this.#time.setMinutes(this.#time.getMinutes() - 6 * 60);
        break;
      case "uk":
        this.#time.setMinutes(this.#time.getMinutes() + utcTimeDiff);
        break;
      case "us":
        this.#time.setMinutes(this.#time.getMinutes() + utcTimeDiff);
        this.#time.setMinutes(this.#time.getMinutes() - 8 * 60);
        break;

      default:
        break;
    }
  }

  //returns the Clock Hours
  getClockHours() {
    this.#setTime();
    return this.#time.getHours();
  }

  //returns the Clock Minutes
  getClockMinutes() {
    this.#setTime();
    return this.#time.getMinutes();
  }

  //returns the Clock Seconds
  getClockSeconds() {
    this.#setTime();
    return this.#time.getSeconds();
  }
}

//This code was my first code to make a module using function
// export const clock = () => {
//   let time = new Date();
//   let utcTimeDiff = time.getTimezoneOffset();

//   switch (country.textContent.toLocaleLowerCase()) {
//     case "australia":
//       time.setMinutes(time.getMinutes() + utcTimeDiff);
//       time.setMinutes(time.getMinutes() + 8 * 60);
//       break;
//     case "canada":
//       time.setMinutes(time.getMinutes() + utcTimeDiff);
//       time.setMinutes(time.getMinutes() - 6 * 60);
//       break;
//     case "uk":
//       time.setMinutes(time.getMinutes() + utcTimeDiff);
//       break;
//     case "us":
//       time.setMinutes(time.getMinutes() + utcTimeDiff);
//       time.setMinutes(time.getMinutes() - 8 * 60);
//       break;

//     default:
//       break;
//   }

//   return time;
// };
