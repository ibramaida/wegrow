const gap = 32;

const carousel = document.querySelector(".carousel-wrapper");
const content = document.querySelector(".carousel");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", (e) => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.opacity = "1";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.opacity = "0";
  }
});
prev.addEventListener("click", (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.opacity = "0";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.opacity = "1";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", (e) => (width = carousel.offsetWidth));

// indicators

const carouselItems = document.querySelectorAll(".carousel-item");

const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const item4 = document.querySelector(".item4");
const item5 = document.querySelector(".item5");
const item6 = document.querySelector(".item6");

const item1Indicator = document.querySelector(".item1-indicator");
const item2Indicator = document.querySelector(".item2-indicator");
const item3Indicator = document.querySelector(".item3-indicator");
const item4Indicator = document.querySelector(".item4-indicator");
const item5Indicator = document.querySelector(".item5-indicator");
const item6Indicator = document.querySelector(".item6-indicator");

const options = {
  root: null,
  threshold: 1,
  rootMargin: "0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    // console.log(entry.target);
    if (entry.target == item1) {
      item1Indicator.classList.add("active");
    } else {
      item1Indicator.classList.remove("active");
    }
    if (entry.target == item2) {
      item2Indicator.classList.add("active");
    } else {
      item2Indicator.classList.remove("active");
    }
    if (entry.target == item3) {
      item3Indicator.classList.add("active");
    } else {
      item3Indicator.classList.remove("active");
    }
    if (entry.target == item4) {
      item4Indicator.classList.add("active");
    } else {
      item4Indicator.classList.remove("active");
    }
    if (entry.target == item5) {
      item5Indicator.classList.add("active");
    } else {
      item5Indicator.classList.remove("active");
    }
    if (entry.target == item6) {
      item6Indicator.classList.add("active");
    } else {
      item6Indicator.classList.remove("active");
    }
  });
}, options);

carouselItems.forEach((item) => {
  observer.observe(item);
});
