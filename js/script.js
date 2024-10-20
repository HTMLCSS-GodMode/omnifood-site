"use strict";

//set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//////////////////////////////////

//Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// close mobile navigation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

//////////////////////////
//Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) document.body.classList.add("sticky");
    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);
