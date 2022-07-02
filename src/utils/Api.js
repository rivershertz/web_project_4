import {reaquringRequest} from '../components/utils.js'

export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return reaquringRequest(`${this._baseUrl}/cards`, {
      headers: this._headers,
    });
  }

  getUserInfo() {
    return reaquringRequest(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    });
  }

  setUserInfo(name, about) {
    return reaquringRequest(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    });
  }

  setUserAvatar(link) {
    return reaquringRequest(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link
      }),
    });
  }

  createCard({imageName, link}) {
    return reaquringRequest(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: imageName,
        link: link,
      }),
    });
  }

  getLikes(cardId) {
    return reaquringRequest(`${this._baseUrl}/cards/${cardId}`, {
        headers: this._headers
    })
  }

  deleteCard(cardId) {
    return reaquringRequest(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers
    });
  }

  addLike(cardId) {
    return reaquringRequest(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers
    });
  }

  removeLike(cardId) {
    return reaquringRequest(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers
    });
  }
  
}
