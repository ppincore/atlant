export function resetCards(cardsArray, mainCard, cardSize) {
  cardsArray.forEach((card) => {
    card.style.width = "";
    card.style.height = "";
    card.style.zIndex = "";
  });
  mainCard.style.width = cardSize.main.standart.width;
  mainCard.style.height = cardSize.main.standart.height;
  mainCard.style.zIndex = cardSize.main.standart.zIndex;
}

export function zoomCard(cards, mainCard, cardSize) {
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      card.style.width = cardSize.other.scaled.width;
      card.style.height = cardSize.other.scaled.height;
      card.style.zIndex = cardSize.other.scaled.zIndex;
      if (card !== mainCard) {
        mainCard.style.width = cardSize.main.unScaled.width;
        mainCard.style.height = cardSize.main.unScaled.height;
        mainCard.style.zIndex = cardSize.main.unScaled.zIndex;
      }
    });

    card.addEventListener("mouseleave", function () {
      resetCards(cards, mainCard, cardSize);
    });
  });
}

export const cardSizeVideo = {
  main: {
    standart: {
      width: "465px",
      height: "260px",
      zIndex: "4",
    },
    unScaled: {
      width: "445px",
      height: "240px",
      zIndex: "3",
    },
  },
  other: {
    scaled: {
      width: "465px",
      height: "260px",
      zIndex: "4",
    },
  },
};

export const cardSizePhoto = {
  main: {
    standart: {
      width: "300px",
      height: "330px",
      zIndex: "3",
    },
    unScaled: {
      width: "280px",
      height: "310px",
      zIndex: "3",
    },
  },
  other: {
    scaled: {
      width: "300px",
      height: "330px",
      zIndex: "4",
    },
  },
};
// function resetCards() {
//   galleryCards.forEach((c) => {
//     c.style.width = "";
//     c.style.height = "";
//     c.style.zIndex = "";
//   });

//   // Возвращаем главную карточку в исходное состояние
//   galleryMainCard.style.width = "300px";
//   galleryMainCard.style.height = "330px";
//   galleryMainCard.style.zIndex = "3";
// }

// function resetCards() {
//   galleryCards.forEach((c) => {
//     c.style.width = "";
//     c.style.height = "";
//     c.style.zIndex = "";
//   });

//   // Возвращаем главную карточку в исходное состояние
//   galleryMainCard.style.width = "300px";
//   galleryMainCard.style.height = "330px";
//   galleryMainCard.style.zIndex = "3";
// }

// function zoomGallaryCard(cards, mainCard) {
//   cards.forEach((card) => {
//     card.addEventListener("mouseenter", function () {
//       card.style.width = "300px";
//       card.style.height = "330px";
//       card.style.zIndex = "4";
//       if (card !== mainCard) {
//         mainCard.style.width = "280px";
//         mainCard.style.height = "310px";
//         mainCard.style.zIndex = "3";
//       }
//     });
//     card.addEventListener("mouseleave", function () {
//       resetCards();
//     });
//   });
// }
