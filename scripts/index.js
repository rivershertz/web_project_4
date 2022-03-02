const imageFormContainer = document.querySelector(".popup_new-image");
const profileFormContainer = document.querySelector(".popup_profile");
const imagePopupContainer = document.querySelector(".popup_image-popup");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__subtitle");
const editBtn = document.querySelector(".profile__edit");
const addBtn = document.querySelector(".profile__add");
const profileSaveBtn = document.querySelector(".popup__save_profile");
const imageCreateBtn = document.querySelector(".popup__save_image");
const profileCloseBtn = document.querySelector(".popup__close_profile");
const imageCloseBtn = document.querySelector(".popup__close_image");
const inputName = document.querySelector(".popup__name");
const inputAbout = document.querySelector(".popup__about");
const inputUrl = document.querySelector(".popup__input_url");
const inputTitle = document.querySelector(".popup__input_title");
const popupImageImg = imagePopupContainer.querySelector(
  ".popup__img_image-popup"
);
const popupImageTitle = document.querySelector(".popup__title_image-popup");
const popupImageClose = document.querySelector(".popup__close_image-popup");
const cardTemplate = document.querySelector("#card-template").content;
const photosList = document.querySelector(".photos__list");
const popups = [...document.querySelectorAll(".popup")];

function createCard(itemTitle, itemLink) {
  const cardElement = cardTemplate
  .querySelector(".photos__card")
  .cloneNode(true);
  cardElement.querySelector(".photos__title").textContent = itemTitle;
  const cardImg = cardElement.querySelector(".photos__img");
  cardImg.src = itemLink;
  cardImg.alt = `picture of ${itemTitle}`;
  const likeBtn = cardElement.querySelector(".photos__like");
  const removeBtn = cardElement.querySelector(".photos__remove");
  likeBtn.addEventListener("click", toggleLikeButton);
  removeBtn.addEventListener("click", removeCard);
  cardImg.addEventListener("click", function () {
    popupImageImg.src = itemLink;
    popupImageTitle.textContent = itemTitle;
    cardImg.alt = `picture of ${itemTitle}`;
    openPopup(imagePopupContainer);
  });
  return cardElement;
}

const toggleLikeButton = (evt) => {
  evt.target.classList.toggle("photos__like_active");
};

const removeCard = (evt) => {
  evt.target.closest(".photos__card").remove();
};

function initialCardsUpload() {
  initialCards.forEach(function (item) {
    photosList.append(createCard(item.name, item.link));
  });
}
initialCardsUpload();

function checkEscapeClicked(evt) {
  if (evt.code == "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", checkEscapeClicked);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", checkEscapeClicked);
}

function handleProfileFormOpen() {
  openPopup(profileFormContainer);
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

function handleProfileFormSave(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(profileFormContainer);
}

function handleImageAddFormCreate(evt) {
  evt.preventDefault();
  photosList.prepend(createCard(inputTitle.value, inputUrl.value));
  closePopup(imageFormContainer);
}

const closePopupWithClick = (popupList) => {
  popupList.forEach((popup) => {
    popup.addEventListener("click", (evt) => {
      if (evt.target.matches(".popup")) {
        closePopup(popup);
      }
    });
  });
};
closePopupWithClick(popups);

profileFormContainer.addEventListener("submit", handleProfileFormSave);
imageFormContainer.addEventListener("submit", handleImageAddFormCreate);
editBtn.addEventListener("click", () => openPopup(profileFormContainer));
profileCloseBtn.addEventListener("click", () =>
  closePopup(profileFormContainer)
);
addBtn.addEventListener("click", () => openPopup(imageFormContainer));
imageCloseBtn.addEventListener("click", () => closePopup(imageFormContainer));
popupImageClose.addEventListener("click", () =>
  closePopup(imagePopupContainer)
);
