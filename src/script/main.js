import "../styles/style.css";
import "../styles/globals.css";
import "../styles/style.css";
import "../fonts/fonts.css";
import "../styles/header.css";
import "../styles/heroSection.css";
import "../styles/servicesSection.css";
import "../styles/tourSection.css";
import "../styles/gallary.css";
import "../styles/constructionPlanning.css";
import "../styles/videoInterview.css";
import "../styles/turnKeyService.css";
import "../styles/teamSection.css";
import "../styles/managerSection.css";
import "../styles/legalSupportSection.css";
import "../styles/timer.css";
import "../styles/homeOffer.css";
import "../styles/footer.css";
import "../styles/backgrounds.css"


import { setHeaderOpacityOnScroll } from "./setHeaderOpacityOnScroll";
import {
  resetCards,
  zoomCard,
  cardSizeVideo,
  cardSizePhoto,
} from "./cardScale";
// import { smoothScroll } from "./smoothScroll";

const headerElem = document.querySelector(".header");
const galleryCards = document.querySelectorAll(".gallery__cities-card");
const galleryMainCard = document.getElementById("gallery__cities-card3");
const videoGallaryCards = document.querySelectorAll(".video__gallary-card");
const videoGallaryMainCard = document.getElementById("video__gallary-card2");
const sections = document.querySelectorAll(".page__section");
const state = {
  currentSectionIndex: 0
};

function initCards(cards, mainCard, cardConfig){
  resetCards(cards, mainCard, cardConfig);
  zoomCard(cards, mainCard, cardConfig);
}

window.addEventListener("scroll", () => {
  setHeaderOpacityOnScroll(headerElem, "#524F4C");
});

document.addEventListener("DOMContentLoaded", function () {
  initCards(videoGallaryCards, videoGallaryMainCard, cardSizeVideo);
  initCards(galleryCards, galleryMainCard, cardSizePhoto);
});


  

  // window.addEventListener("wheel", (e) => {
  //   smoothScroll(e.deltaY, sections,state);
  // });

let endDate = new Date();
endDate.setDate(endDate.getDate() + 1); // Добавляем 1 день
endDate.setHours(endDate.getHours() + 6); // Добавляем 6 часов
endDate.setMinutes(endDate.getMinutes() + 5); // Добавляем 5 минут

// Проверяем, есть ли сохраненное время в localStorage
let savedEndTime = localStorage.getItem("timerEndTime");
if (savedEndTime) {
  endDate = new Date(savedEndTime);
} else {
  localStorage.setItem("timerEndTime", endDate.toISOString());
}

function updateTimer() {
  const now = new Date();
  const timeLeft = endDate - now;

  if (timeLeft <= 0) {
    // Если таймер завершился, устанавливаем новую дату окончания
    endDate = new Date();
    endDate.setDate(endDate.getDate() + 1); // Добавляем 1 день
    endDate.setHours(endDate.getHours() + 6); // Добавляем 6 часов
    endDate.setMinutes(endDate.getMinutes() + 5); // Добавляем 5 минут
    localStorage.setItem("timerEndTime", endDate.toISOString());

    // Обновляем отображение таймера
    document.getElementById("days").textContent = "0";
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";

    // Обновляем шкалу для каждого круга
    document
      .querySelectorAll(".timer-circle")[0]
      .style.setProperty("--progress", "0%");
    document
      .querySelectorAll(".timer-circle")[1]
      .style.setProperty("--progress", "0%");
    document
      .querySelectorAll(".timer-circle")[2]
      .style.setProperty("--progress", "0%");
    document
      .querySelectorAll(".timer-circle")[3]
      .style.setProperty("--progress", "0%");
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Обновляем шкалу для каждого круга
  const totalDuration = 1 * 24 * 60 * 60 + 6 * 60 * 60 + 5 * 60; // Общая длительность в секундах
  const elapsedDuration = totalDuration - Math.floor(timeLeft / 1000); // Прошедшее время в секундах

  const daysProgress = (days / 1) * 100;
  const hoursProgress = (hours / 24) * 100;
  const minutesProgress = (minutes / 60) * 100;
  const secondsProgress = (seconds / 60) * 100;

  document
    .querySelectorAll(".timer-circle")[0]
    .style.setProperty("--progress", `${daysProgress}%`);
  document
    .querySelectorAll(".timer-circle")[1]
    .style.setProperty("--progress", `${hoursProgress}%`);
  document
    .querySelectorAll(".timer-circle")[2]
    .style.setProperty("--progress", `${minutesProgress}%`);
  document
    .querySelectorAll(".timer-circle")[3]
    .style.setProperty("--progress", `${secondsProgress}%`);
}

setInterval(updateTimer, 1000);
updateTimer();



