export default class Card {
  constructor(
    data,
    templateSelector,
    handleCardClick,
    handleCardRemove,
    userId
  ) {
    this._userId = userId;
    this._text = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardRemove = handleCardRemove;
    this._ownerId = data.owner._id;
    this._element = this._getTemplate();
    this._removeButton = this._element.querySelector(".photos__remove");
    this._data = data;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".photos__card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    const imageTitle = this._element.querySelector(".photos__title");
    const imageElement = this._element.querySelector(".photos__img");
    const imageLikes = this._element.querySelector(".photos__like-counter");
    imageElement.src = this._link;
    imageElement.alt = `picture of ${this._text}`;
    imageTitle.textContent = this._text;
    imageLikes.textContent = this._likes.length;
    if (this._userId !== this._ownerId) {
      this._removeButton.style.display = "none";
    }
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    const likeButton = this._element.querySelector(".photos__like");
    const imageElement = this._element.querySelector(".photos__img");
    likeButton.addEventListener("click", this._toggleLikeButton);
    this._removeButton.addEventListener("click", () => {
      this._handleCardRemove(this._id);
    });
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
