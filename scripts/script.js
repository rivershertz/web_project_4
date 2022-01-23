const imageFormContainer = document.querySelector(".popup-image");
const profileFormContainer = document.querySelector(".popup-profile");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__subtitle");
const editBtn = document.querySelector(".profile__edit");
const addBtn = document.querySelector(".profile__add");
const profileSaveBtn = document.querySelector(".profile__save");
const imageCreateBtn = document.querySelector(".image__create");
const profileCloseBtn = document.querySelector(".profile__close");
const imageCloseBtn = document.querySelector(".image__close");
const inputName = document.querySelector(".popup__name");
const inputAbout = document.querySelector(".popup__about");
const inputUrl = document.querySelector(".image__url");
const inputTitle = document.querySelector(".image__title");
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

function initialCardsUpload () {
  initialCards.forEach(function (item) {
    const cardTemplate = document.querySelector("#card-template").content;
    const cardElement = cardTemplate.querySelector(".photos__card").cloneNode(true);
    cardElement.querySelector(".photos__title").textContent = item.name;
    cardElement.querySelector(".photos__img").src = item.link;
    const likeBtn = cardElement.querySelector(".photos__like");
    likeBtn.addEventListener("click", function(evt) {
    evt.target.classList.toggle("photos__like_active");
  });
    const removeBtn = cardElement.querySelector(".photos__remove");
    removeBtn.addEventListener("click", function () {
      const parentCard = removeBtn.closest(".photos__card");
      parentCard.remove();
    });
    document.querySelector(".photos__list").append(cardElement);
  });
}
initialCardsUpload();


function handleProfileFormToggle() {
  profileFormContainer.classList.toggle("popup_opened");
}

function handleImageAddFormToggle() {
  imageFormContainer.classList.toggle("popup_opened");
}

function handleProfileFormOpen() {
  handleProfileFormToggle()
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

function handleProfileFormSave(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  handleProfileFormToggle()
}

function handleImageAddFormCreate(evt) {
  evt.preventDefault();
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".photos__card").cloneNode(true);
  const imageTitle = cardElement.querySelector(".photos__title");
  let imageUrl = cardElement.querySelector(".photos__img");
  imageTitle.textContent = inputTitle.value;
  imageUrl.src = inputUrl.value;
  const likeBtn = cardElement.querySelector(".photos__like");
  likeBtn.addEventListener("click", function(evt) {
    evt.target.classList.toggle("photos__like_active");
  });
  const removeBtn = cardElement.querySelector(".photos__remove");
  removeBtn.addEventListener("click", function () {
    const parentCard = removeBtn.closest(".photos__card");
    parentCard.remove();
  });
  document.querySelector(".photos__list").prepend(cardElement);
  handleImageAddFormToggle();
}

profileFormContainer.addEventListener("submit", handleProfileFormSave);
imageFormContainer.addEventListener("submit", handleImageAddFormCreate);
editBtn.addEventListener("click", handleProfileFormOpen);
profileCloseBtn.addEventListener("click", handleProfileFormToggle);
addBtn.addEventListener("click", handleImageAddFormToggle);
imageCloseBtn.addEventListener("click", handleImageAddFormToggle);




