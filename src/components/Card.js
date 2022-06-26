import { data } from "autoprefixer";

export default class Card {
  constructor(data, templateSelector, handleCardClick, handleCardRemove) {
    this._text = data.name;
    this._link = data.link;
    this._id = data.id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardRemove = handleCardRemove;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".photos__card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    const imageTitle = this._element.querySelector(".photos__title");
    const imageElement = this._element.querySelector(".photos__img");
    imageElement.src = this._link;
    imageElement.alt = `picture of ${this._text}`;
    imageTitle.textContent = this._text;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    const likeButton = this._element.querySelector(".photos__like");
    const removeButton = this._element.querySelector(".photos__remove");
    const imageElement = this._element.querySelector(".photos__img");
    likeButton.addEventListener("click", this._toggleLikeButton);
    removeButton.addEventListener("click", () => {
      this._handleCardRemove(this._id)});
    imageElement.addEventListener("click", () => {
      this._handleCardClick(this._text, this._link);
    });
  }

  _toggleLikeButton = () => {
    this._element
      .querySelector(".photos__like")
      .classList.toggle("photos__like_active");
  };

  removeCard = () => {
    this._element.remove();
    this._element = null;
  };
}
