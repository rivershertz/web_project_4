const imageFormContainer = document.querySelector(".popup-new-image");
const profileFormContainer = document.querySelector(".popup-profile");
const imagePopupContainer = document.querySelector(".image-popup")
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
const popupImageImg = imageFormContainer.querySelector(".image-popup__img");
const popupImageTitle = document.querySelector(".image-popup__title");
const popupImageClose = document.querySelector(".image-popup__close");
const cardTemplate = document.querySelector("#card-template").content;
const photosList = document.querySelector(".photos__list");

function initialCardsUpload () {
  initialCards.forEach(function (item) {
    const cardElement = cardTemplate.querySelector(".photos__card").cloneNode(true);
    const likeBtn = cardElement.querySelector(".photos__like");
    const imageUrl = cardElement.querySelector(".photos__img");
    cardElement.querySelector(".photos__title").textContent = item.name;
    imageUrl.src = item.link;
    imageUrl.alt = `picture of ${item.name}`;
    likeBtn.addEventListener("click", function(evt) {
    evt.target.classList.toggle("photos__like_active");
  });
    const removeBtn = cardElement.querySelector(".photos__remove");
    removeBtn.addEventListener("click", function () {
      const parentCard = removeBtn.closest(".photos__card");
      parentCard.remove();
    });
    imageUrl.addEventListener("click", function() {
      const imageTitle = cardElement.querySelector(".photos__title");
      popupImageImg.src = imageUrl.src;
      popupImageTitle.textContent = imageTitle.textContent;
      openPopup(imagePopupContainer);
    });
    photosList.append(cardElement);
  });
}
initialCardsUpload();

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
}

function closePopup(popupElement) {
  popupElement.classList.toggle("popup_opened");
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
  const cardElement = cardTemplate.querySelector(".photos__card").cloneNode(true);
  const imageTitle = cardElement.querySelector(".photos__title");
  const imageUrl = cardElement.querySelector(".photos__img");
  imageTitle.textContent = inputTitle.value;
  imageUrl.src = inputUrl.value;
  imageUrl.alt = `picture of ${inputTitle}`;
  const likeBtn = cardElement.querySelector(".photos__like");
  likeBtn.addEventListener("click", function(evt) {
    evt.target.classList.toggle("photos__like_active");
  });
  const removeBtn = cardElement.querySelector(".photos__remove");
  removeBtn.addEventListener("click", function () {
    const parentCard = removeBtn.closest(".photos__card");
    parentCard.remove();
  });
  imageUrl.addEventListener("click", function() {
    popupImageImg.src = imageUrl.src;
    popupImageTitle.textContent = imageTitle.textContent;
    popupImageImg.alt = `picture of ${inputTitle}`;
    debugger
    openPopup(imagePopupContainer);
  });
  photosList.prepend(cardElement);
  closePopup(imageFormContainer);
}

profileFormContainer.addEventListener("submit", handleProfileFormSave);
imageFormContainer.addEventListener("submit", handleImageAddFormCreate);
editBtn.addEventListener("click", () => openPopup(profileFormContainer));
profileCloseBtn.addEventListener("click", () => closePopup(profileFormContainer));
addBtn.addEventListener("click", () => openPopup(imageFormContainer));
imageCloseBtn.addEventListener("click", () => closePopup(imageFormContainer));
popupImageClose.addEventListener("click", () => closePopup(imagePopupContainer));