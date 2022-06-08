import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  open(name, link) {
    const imageElement = this._popup.querySelector('.popup__img_image-popup');
    const caption = this._popup.querySelector('.popup__title_image-popup');

    imageElement.src = link;
    imageElement.alt = `picture of ${name}`;
    caption.textContent = name;
    
    super.open();
  }
}