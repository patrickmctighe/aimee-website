import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./home.css";
import "./btn.css"
import { createWork } from "./work";
import { createAbout } from "./about";

import slide1 from "./images/headshot1.jpg";
import slide2 from "./images/slide2.png";
import slide3 from "./images/slide3.png";
import slide4 from "./images/slide4.png";
import slide5 from "./images/slide5.jpg";
import slide6 from "./images/slide6.jpg";
import slide7 from "./images/slide7.png";

const createHome = () => {
  const tabs = document.createElement("div");
  tabs.setAttribute("class","tabs")
  const page = document.querySelector(".con");
  const homeBtn = document.createElement("button");
  homeBtn.setAttribute("class", "btn");
  homeBtn.innerHTML = "HOME";
  const workBtn = document.createElement("button");
  workBtn.setAttribute("class", "btn");
  workBtn.innerHTML = "WORK";
  const aboutBtn = document.createElement("button");
  aboutBtn.setAttribute("class", "btn");
  aboutBtn.innerHTML = "ABOUT";
  page.append(tabs);
  tabs.append(homeBtn, workBtn, aboutBtn);

  workBtn.addEventListener("click", () => {
    page.innerHTML = "";
    createWork();
  });

  aboutBtn.addEventListener("click", () => {
    page.innerHTML = "";
    createAbout();
  });

  const swiperContainer = document.createElement("div");
  swiperContainer.classList.add("swiper");

  const swiperWrapper = document.createElement("div");
  swiperWrapper.classList.add("swiper-wrapper");

  const swiperSlides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

  swiperSlides.forEach((slideContent,index) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.classList.add(`slide-${index}`); 

    const slideImg = document.createElement("img");
    slideImg.setAttribute("class","imgs")
    slideImg.classList.add(`img${index}`)
    slideImg.src = slideContent;

    slide.appendChild(slideImg);
    swiperWrapper.appendChild(slide);
  });

  const swiperPagination = document.createElement("div");
  swiperPagination.classList.add("swiper-pagination");

  const swiperButtonPrev = document.createElement("div");
  swiperButtonPrev.classList.add("swiper-button-prev");

  const swiperButtonNext = document.createElement("div");
  swiperButtonNext.classList.add("swiper-button-next");

  swiperContainer.appendChild(swiperWrapper);
  swiperContainer.appendChild(swiperPagination);
  swiperContainer.appendChild(swiperButtonPrev);
  swiperContainer.appendChild(swiperButtonNext);

  page.appendChild(swiperContainer);

  const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    modules: [Navigation, Pagination],
  });

  swiper.init();
};

export { createHome };
