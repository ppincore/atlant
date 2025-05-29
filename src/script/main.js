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
const headerElem = document.querySelector(".header");
const galleryCards = document.querySelectorAll(".gallery__cities-card");
const galleryMainCard = document.getElementById("gallery__cities-card3");

const videoGallaryCards = document.querySelectorAll(".video__gallary-card");
const videoGallaryMainCard = document.getElementById("video__gallary-card2");

function setHeaderOpacityOnScroll(header) {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  header.style.backgroundColor = scrolled ? "#524F4C" : "transparent";
}

function resetVideoCards(videoGallaryCards, videoGallaryMainCard) {
  videoGallaryCards.forEach((c) => {
    c.style.width = "";
    c.style.height = "";
    c.style.zIndex = "";
  });

  // Возвращаем главную карточку в исходное состояние
  videoGallaryMainCard.style.width = "385px";
  videoGallaryMainCard.style.height = "207px";
  videoGallaryMainCard.style.zIndex = "3";
}

function zoomVideoGallaryCard(cards, mainCard) {
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      card.style.width = "385px";
      card.style.height = "207px";
      card.style.zIndex = "4";
      if (card !== mainCard) {
        mainCard.style.width = "385px";
        mainCard.style.height = "207px";
        mainCard.style.zIndex = "3";
      }
    });
    card.addEventListener("mouseleave", function () {
      resetVideoCards(cards, mainCard);
    });
  });
}

function resetCards() {
  galleryCards.forEach((c) => {
    c.style.width = "";
    c.style.height = "";
    c.style.zIndex = "";
  });

  // Возвращаем главную карточку в исходное состояние
  galleryMainCard.style.width = "300px";
  galleryMainCard.style.height = "330px";
  galleryMainCard.style.zIndex = "3";
}

function zoomGallaryCard(cards, mainCard) {
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      card.style.width = "300px";
      card.style.height = "330px";
      card.style.zIndex = "4";
      if (card !== mainCard) {
        mainCard.style.width = "280px";
        mainCard.style.height = "310px";
        mainCard.style.zIndex = "3";
      }
    });
    card.addEventListener("mouseleave", function () {
      resetCards();
    });
  });
}

window.addEventListener("scroll", () => {
  setHeaderOpacityOnScroll(headerElem);
});

document.addEventListener("DOMContentLoaded", function () {
  resetCards();
  resetVideoCards(videoGallaryCards, videoGallaryMainCard);
  zoomVideoGallaryCard(
    videoGallaryCards,
    videoGallaryCards,
    videoGallaryMainCard
  );
  zoomGallaryCard(galleryCards, galleryMainCard);
});

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
    document.getElementById("days").textContent = "0";
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";
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
