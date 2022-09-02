"use strict";

const mainNav = document.querySelector(".nav__links");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnCloseModal = document.querySelector(".btn--close-modal");

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => {
  return btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////
// Page Navigation

// const navLinks = document.querySelectorAll(".nav__link");
// navLinks.forEach((currentLink) => {
//   currentLink.addEventListener("click", function (e) {
//     e.preventDefault();

//     const id = currentLink.getAttribute("href");
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

mainNav.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

/////////////////////////////////////
// Tabbed component

const tabContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");
// console.log(tabs);
// console.log(tabContainer);
// console.log(tabsContent);

// event deligation | closest method
tabContainer.addEventListener("click", function (e) {
  const clickedButton = e.target.closest("button");
  // console.log(clickedButton);

  // outside button + inside tabs container => clickedButton->null
  if (clickedButton === null) return;

  // activate button
  tabs.forEach((currTab) => {
    currTab.classList.remove("operations__tab--active");
  });
  clickedButton.classList.add("operations__tab--active");

  // activate content
  const currnetTabNumber = clickedButton.dataset.tab;
  tabsContent.forEach((currContent) => {
    currContent.classList.remove("operations__content--active");
  });
  document
    .querySelector(`.operations__content--${currnetTabNumber}`)
    .classList.add("operations__content--active");
});

/////////////////////////////////////
// Nav fade animation

const hoverHandler = function (e, opacity) {
  if (e.target.classList.contains("nav__link")) {
    const currLink = e.target;
    const otherLinks = currLink
      .closest(".nav__links")
      .querySelectorAll(".nav__link");

    otherLinks.forEach((link) => {
      if (link !== currLink) {
        link.style.opacity = opacity;
      }
    });
  }
};
mainNav.addEventListener("mouseover", function (e) {
  hoverHandler(e, 0.6);
});

mainNav.addEventListener("mouseout", function (e) {
  hoverHandler(e, 1);
});

/////////////////////////////////////
// Sticky nav :

// const nav = document.querySelector('.nav')
// const section1 = document.querySelector("#section--1");
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll',function(e){
//   // console.log(window.scrollY)
//   if(window.scrollY > initialCoords.top){
//     nav.classList.add('sticky')
//   }else{
//     nav.classList.remove('sticky')
//   }
// })

// Intersection Observer API
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
function sticky(entries) {
  const entry = entries[0];
  // console.log(entry);
  if (entry.isIntersecting === false) {
    // when header is not in viewport
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
const options = {
  root: null, // viewport
  threshold: 0, //
  rootMargin: `-${navHeight}px`,
};
const observer = new IntersectionObserver(sticky, options);
observer.observe(header);

/////////////////////////////////////
// Reveal On scroll

const allSections = document.querySelectorAll(".section");
// console.log(allSections);
function revealSection(entries, observer) {
  const entry = entries[0];
  const current_viewportSection = entry.target;
  if (entry.isIntersecting === false) {
    return;
  }

  current_viewportSection.classList.remove("section--hidden");
  observer.unobserve(current_viewportSection);
}
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});

/////////////////////////////////////
// lazy loading (imgs)

const lazyImgs = document.querySelectorAll("img[data-src]");
const imgObserverFunc = function (entries, observer) {
  const currImg_entry = entries[0];
  const current_viewportImg = currImg_entry.target;

  if (currImg_entry.isIntersecting) {
    current_viewportImg.src = current_viewportImg.dataset.src;

    // when full img load thn remove 'lazy-img' class
    current_viewportImg.addEventListener("load", function () {
      current_viewportImg.classList.remove("lazy-img");
    });

    observer.unobserve(current_viewportImg);
  }
};
const lazyImgObserver = new IntersectionObserver(imgObserverFunc, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});
lazyImgs.forEach(function (img) {
  lazyImgObserver.observe(img);
});

/////////////////////////////////////
// slider
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const maxSlide = slides.length;
const leftBtn = document.querySelector(".slider__btn--left");
const rightBtn = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");
let currSlide = 0;
// console.log(slider);
// console.log(slides);

// set all slides in one line
slides.forEach((slide, index) => {
  return (slide.style.transform = `translateX(${100 * index}%)`);
});

// set Curernt slide
function setCurrSlide(currSlide) {
  slides.forEach((slide, index) => {
    return (slide.style.transform = `translateX(${
      100 * (index - currSlide)
    }%)`);
  });
}

// next slide
rightBtn.addEventListener("click", function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  // slides.forEach((slide, index) => {
  //   return (slide.style.transform = `translateX(${100 * (index-currSlide)}%)`)
  // });
  setCurrSlide(currSlide);
  activateDot(currSlide);
});

// previous slide
leftBtn.addEventListener("click", function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  // slides.forEach((slide,index)=>{
  //   return (slide.style.transform = `translateX(${100 * (index-currSlide)}%)`)
  // })
  setCurrSlide(currSlide);
  activateDot(currSlide);
});

// create dots
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

createDots()
setCurrSlide(0);
activateDot(0);