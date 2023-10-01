"use strict";

//Active buttonToUp
const buttonToUp = document.querySelector(".button-to-up");

document.addEventListener("scroll", (event) => {
  if (window.scrollY !== 0) {
    buttonToUp.classList.add("active");
  } else {
    buttonToUp.classList.remove("active");
  }
});
