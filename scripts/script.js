initialCardsUpload();
const formContainer = document.querySelector(".popup");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__subtitle");
const editBtn = document.querySelector(".profile__edit");
const saveBtn = document.querySelector(".popup__save");
const closeBtn = document.querySelector(".popup__close");
const inputName = document.querySelector(".popup__name");
const inputAbout = document.querySelector(".popup__about");
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

function handlePopupFormToggle() {
  formContainer.classList.toggle("popup_opened");
}

function handlePopupFormOpen() {
  handlePopupFormToggle()
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

function handleProfileFormSave(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  handlePopupFormToggle()
}

function initialCardsUpload (card) {
  console.dir(document.querySelector('#card-template'))
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".photos__card").cloneNode(true);
  initialCards.forEach(function (item) {
    cardElement.querySelector(".photos__title").textContent = item.name;
    cardElement.querySelector(".photos__img").src = item.link;
    document.querySelector(".photos__list").append(cardElement);
  });
}

function addCardSubmit (title, link) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".photos__card").cloneNode(true);
  cardElement.querySelector(".photos__title").textContent = title;
  cardElement.querySelector(".photos__img").src = link;
  document.querySelector(".photos__list").prepend(cardElement);
};

formContainer.addEventListener("submit", handleProfileFormSave);
editBtn.addEventListener("click", handlePopupFormOpen);
closeBtn.addEventListener("click", handlePopupFormToggle);
