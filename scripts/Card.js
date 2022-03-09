export class Card {
  constructor(data, cardSelector) {
    this._text = data.text;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .cloneNode(true);

    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".photos__img").src = this._link;
    this._element.querySelector(".photos__title").textContent = this._text;
    this._element.querySelector(".photos__img").alt = `picture of ${itemTitle}`;

    return this._element;
  }
}

initialCards.forEach((card) => {
    const card = new Card(card, "#card-template");
    const newCard = card.generateCard();
    document.querySelector(".photos__list").append(newCard);
})