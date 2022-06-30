export default class Card {
  constructor(
    data,
    templateSelector,
    handleCardClick,
    handleCardRemove,
    handleLikes,
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
    this._handleLikes = handleLikes;
    this._ownerId = data.owner._id;
    this._element = this._getTemplate();
    this._removeButton = this._element.querySelector(".photos__remove");
    this._likesCounter = this._element.querySelector(".photos__like-counter");
    this._isLiked = this._likes.some((user) => user._id === this._userId)
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
    imageElement.src = this._link;
    imageElement.alt = `picture of ${this._text}`;
    imageTitle.textContent = this._text;
    this._likesCounter.textContent = this._likes.length;
    if (this._userId !== this._ownerId) {
      this._removeButton.style.display = "none";
    }
    this._renderLikes();
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    const likeButton = this._element.querySelector(".photos__like");
    const imageElement = this._element.querySelector(".photos__img");
    likeButton.addEventListener("click", () => this._handleLikes(this._id));
    this._removeButton.addEventListener("click", () => this._handleCardRemove(this._id));
    imageElement.addEventListener("click", () => {
      this._handleCardClick(this._text, this._link);
    });
  }

  likeStatus() {
    return this._likes.some((user) => {user.id === this._userId})
  }

  removeCard = () => {
    this._element.remove();
    this._element = null;
  };

  updateLikes(likes) {
    this._likes = likes; 
    this._renderLikes(); 
  }
  
  _renderLikes() {
    this._likesCounter.textContent = this._likes.length;
    this._element
    .querySelector(".photos__like")
    .classList.add("photos__like_active");
    // if(!this._isLiked) {
    //   this._element
    // .querySelector(".photos__like")
    // .classList.remove("photos__like_active");
    // } else {
    //   console.log(this._isLiked)
    //   this._element
    // .querySelector(".photos__like")
    // .classList.add("photos__like_active");
    // }
  }
 }




