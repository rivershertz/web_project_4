!function(){"use strict";var e={d:function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}};e.d({},{JB:function(){return l},BV:function(){return L},O_:function(){return q}});class t{constructor(e,t){this._currentForm=t,this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._inputs=Array.from(this._currentForm.querySelectorAll(this._inputSelector)),this._submitButton=this._currentForm.querySelector(this._submitButtonSelector)}_showInputError(e,t,o){const n=e.querySelector(".".concat(t.id,"-input-error"));t.classList.add(this._inputErrorClass),n.textContent=o,n.classList.add(this._errorClass)}_hideInputError(e,t){const o=e.querySelector(".".concat(t.id,"-input-error"));t.classList.remove(this._inputErrorClass),o.textContent="",o.classList.remove(this._errorClass)}_toggleInputError(e,t){t.validity.valid?this._hideInputError(e,t):this._showInputError(e,t,t.validationMessage)}_hasInvalidInput(){return this._inputs.some((e=>!e.validity.valid))}toggleSubmitButton(){this._hasInvalidInput()?(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0):(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1)}_setEventListeners(e){this._inputs.forEach((t=>{t.addEventListener("input",(()=>{this._toggleInputError(e,t),this.toggleSubmitButton()}))}))}enableValidation(){this._currentForm.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners(this._currentForm)}}function o(e){e.classList.add("popup_opened"),document.addEventListener("keydown",r)}function n(e){document.removeEventListener("keydown",r),e.classList.remove("popup_opened")}const r=e=>{"Escape"===e.code&&n(document.querySelector(".popup_opened"))};function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}class s{constructor(e,t){i(this,"_toggleLikeButton",(()=>{this._element.querySelector(".photos__like").classList.toggle("photos__like_active")})),i(this,"_removeCard",(()=>{this._element.remove(),this._element=null})),i(this,"_openImgPopup",(()=>{L.src=this._link,L.alt="picture of ".concat(this._text),q.textContent=this._text,o(l)})),this._text=e.name,this._link=e.link,this._templateSelector=t}_getTemplate(){return document.querySelector(this._templateSelector).content.querySelector(".photos__card").cloneNode(!0)}generateCard(){this._element=this._getTemplate();const e=this._element.querySelector(".photos__img");return e.src=this._link,this._element.querySelector(".photos__title").textContent=this._text,e.alt="picture of ".concat(this._text),this._setEventListeners(),this._element}_setEventListeners(){this._element.querySelector(".photos__like").addEventListener("click",this._toggleLikeButton),this._element.querySelector(".photos__remove").addEventListener("click",this._removeCard),this._element.querySelector(".photos__img").addEventListener("click",this._openImgPopup)}}const u={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},l=document.querySelector(".popup_image-popup"),c=document.querySelector(".popup_new-image"),p=document.querySelector(".popup_profile"),a=document.querySelector(".profile__name"),_=document.querySelector(".profile__subtitle"),d=document.querySelector(".profile__edit"),m=document.querySelector(".profile__add"),h=document.querySelector(".popup__close_profile"),v=document.querySelector(".popup__close_image"),y=document.querySelector(".popup__name"),S=document.querySelector(".popup__about"),g=document.querySelector(".popup__input_url"),b=document.querySelector(".popup__input_title"),f=document.querySelector(".popup__close_image-popup"),E=[...document.querySelectorAll(".popup")],L=document.querySelector(".popup__img_image-popup"),q=document.querySelector(".popup__title_image-popup"),k=document.querySelector(".photos__list"),C=c.querySelector(".popup__form");function B(e){const t=new s(e,"#card-template").generateCard();k.prepend(t)}p.addEventListener("submit",(function(e){e.preventDefault(),a.textContent=y.value,_.textContent=S.value,n(p)})),c.addEventListener("submit",(function(e){e.preventDefault(),B({name:b.value,link:g.value}),n(c),C.reset(),x.toggleSubmitButton()})),d.addEventListener("click",(()=>{w.toggleSubmitButton(),y.value=a.textContent,S.value=_.textContent,o(p)})),h.addEventListener("click",(()=>n(p))),m.addEventListener("click",(()=>{x.toggleSubmitButton(),o(c)})),v.addEventListener("click",(()=>n(c))),f.addEventListener("click",(()=>n(l))),[{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"},{name:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"}].forEach((e=>{B(e)})),E.forEach((e=>{e.addEventListener("mousedown",(t=>{t.target.matches(".popup")&&n(e)}))}));const x=new t(u,c);x.enableValidation();const w=new t(u,p);w.enableValidation()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxFQUFtQjFDLGlCQUFpQixTQUFTLElBQzNDUSxFQUFXNkIsS0FFYkksRUFBVXpDLGlCQUFpQixTQUFTLEtBQ2xDMEQsRUFBc0I5RCxxQkFDdEJRLEVBQVVnQyxNQUVaTyxFQUFpQjNDLGlCQUFpQixTQUFTLElBQ3pDUSxFQUFXNEIsS0FFYlksRUFBZ0JoRCxpQkFBaUIsU0FBUyxJQUN4Q1EsRUFBV2UsS0RwRlEsQ0FDakIsQ0FDRUMsS0FBTSxpQkFDTkMsS0FBTSxnREFFUixDQUNFRCxLQUFNLHdCQUNOQyxLQUFNLG1EQUVSLENBQ0VELEtBQU0sVUFDTkMsS0FBTSxtREFFUixDQUNFRCxLQUFNLGlCQUNOQyxLQUFNLDBEQUVSLENBQ0VELEtBQU0sY0FDTkMsS0FBTSx1REFFUixDQUNFRCxLQUFNLGtCQUNOQyxLQUFNLHFEQ3VFQzFCLFNBQVNzRCxJQUNwQkQsRUFBV0MsTUFHV0osRUg3RVpsRCxTQUFTTSxJQUNqQkEsRUFBTUwsaUJBQWlCLGFBQWNVLElBQy9CQSxFQUFJa0QsT0FBT0MsUUFBUSxXQUNyQnJELEVBQVdILFNHNEVuQixNQUFNcUQsRUFBd0IsSUFBSXRHLEVBQ2hDK0UsRUFDQUMsR0FFRnNCLEVBQXNCekQsbUJBRXRCLE1BQU0wRCxFQUF1QixJQUFJdkcsRUFDL0IrRSxFQUNBRSxHQUVGc0IsRUFBcUIxRCxtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl9wcm9qZWN0XzQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfNC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvY29tcG9uZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF80Ly4vc3JjL2NvbXBvbmVudHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0XzQvLi9zcmMvcGFnZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm0pIHtcclxuICAgIHRoaXMuX2N1cnJlbnRGb3JtID0gZm9ybTtcclxuICAgIHRoaXMuX2Zvcm1TZWxlY3RvciA9IHNldHRpbmdzLmZvcm1TZWxlY3RvcjtcclxuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcclxuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xyXG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9pbnB1dHMgPSBBcnJheS5mcm9tKHRoaXMuX2N1cnJlbnRGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcikpO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uID0gdGhpcy5fY3VycmVudEZvcm0ucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBfc2hvd0lucHV0RXJyb3IoZm9ybSwgaW5wdXQsIGVycm9yTWVzc2FnZSkge1xyXG4gICAgY29uc3QgZXJyb3IgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0LmlkfS1pbnB1dC1lcnJvcmApO1xyXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3IudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XHJcbiAgICBlcnJvci5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgX2hpZGVJbnB1dEVycm9yKGZvcm0sIGlucHV0KSB7XHJcbiAgICBjb25zdCBlcnJvciA9IGZvcm0ucXVlcnlTZWxlY3RvcihgLiR7aW5wdXQuaWR9LWlucHV0LWVycm9yYCk7XHJcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBlcnJvci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgX3RvZ2dsZUlucHV0RXJyb3IoZm9ybSwgaW5wdXQpIHtcclxuICAgIGlmICghaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoZm9ybSwgaW5wdXQsIGlucHV0LnZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGZvcm0sIGlucHV0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9oYXNJbnZhbGlkSW5wdXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5wdXRzLnNvbWUoKGlucHV0KSA9PiB7IFxyXG4gICAgICByZXR1cm4gIWlucHV0LnZhbGlkaXR5LnZhbGlkOyBcclxuICAgIH0pOyBcclxuICB9XHJcblxyXG4gIHRvZ2dsZVN1Ym1pdEJ1dHRvbigpIHtcclxuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQoKSkge1xyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycyhmb3JtKSB7XHJcbiAgICB0aGlzLl9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLl90b2dnbGVJbnB1dEVycm9yKGZvcm0sIGlucHV0KTtcclxuICAgICAgICB0aGlzLnRvZ2dsZVN1Ym1pdEJ1dHRvbigpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX2N1cnJlbnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycyh0aGlzLl9jdXJyZW50Rm9ybSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCB7IGNsb3NlUG9wdXAsIGNsb3NlQnlFc2NhcGUsIG9wZW5Qb3B1cCwgYWRkUmVtb3RlQ2xpY2tMaXN0ZW5lcnMgfTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gb3BlblBvcHVwKHBvcHVwKSB7XHJcbiAgcG9wdXAuY2xhc3NMaXN0LmFkZChcInBvcHVwX29wZW5lZFwiKTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjbG9zZUJ5RXNjYXBlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VQb3B1cChwb3B1cCkge1xyXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNsb3NlQnlFc2NhcGUpO1xyXG4gIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9vcGVuZWRcIik7XHJcbiAgXHJcbn1cclxuXHJcbmNvbnN0IGNsb3NlQnlFc2NhcGUgPSAoZXZ0KSA9PiB7XHJcbiAgaWYgKGV2dC5jb2RlID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICBjb25zdCBvcGVuZWRQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfb3BlbmVkXCIpXHJcbiAgICBjbG9zZVBvcHVwKG9wZW5lZFBvcHVwKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBhZGRSZW1vdGVDbGlja0xpc3RlbmVycyA9IChwb3B1cExpc3QpID0+IHtcclxuICBwb3B1cExpc3QuZm9yRWFjaCgocG9wdXApID0+IHtcclxuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2dCkgPT4ge1xyXG4gICAgICBpZiAoZXZ0LnRhcmdldC5tYXRjaGVzKFwiLnBvcHVwXCIpKSB7XHJcbiAgICAgICAgY2xvc2VQb3B1cChwb3B1cCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBpbWFnZVBvcHVwQ29udGFpbmVyLCBwb3B1cEltYWdlSW1nLCBwb3B1cEltYWdlVGl0bGUgfSBmcm9tIFwiLi4vcGFnZS9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBvcGVuUG9wdXAgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoZGF0YSwgdGVtcGxhdGVTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fdGV4dCA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XHJcbiAgICB0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yID0gdGVtcGxhdGVTZWxlY3RvcjtcclxuICB9XHJcblxyXG4gIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fdGVtcGxhdGVTZWxlY3RvcilcclxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5waG90b3NfX2NhcmRcIilcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZUNhcmQoKSB7XHJcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcclxuICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90b3NfX2ltZ1wiKTtcclxuICAgIGltYWdlRWxlbWVudC5zcmMgPSB0aGlzLl9saW5rO1xyXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBob3Rvc19fdGl0bGVcIikudGV4dENvbnRlbnQgPSB0aGlzLl90ZXh0O1xyXG4gICAgaW1hZ2VFbGVtZW50LmFsdCA9IGBwaWN0dXJlIG9mICR7dGhpcy5fdGV4dH1gO1xyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fZWxlbWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5waG90b3NfX2xpa2VcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl90b2dnbGVMaWtlQnV0dG9uKTtcclxuICAgIHRoaXMuX2VsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG9zX19yZW1vdmVcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9yZW1vdmVDYXJkKTtcclxuICAgIHRoaXMuX2VsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIucGhvdG9zX19pbWdcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9vcGVuSW1nUG9wdXApO1xyXG4gIH1cclxuXHJcbiAgX3RvZ2dsZUxpa2VCdXR0b24gPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9lbGVtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnBob3Rvc19fbGlrZVwiKVxyXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInBob3Rvc19fbGlrZV9hY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBfcmVtb3ZlQ2FyZCA9ICgpID0+IHtcclxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIF9vcGVuSW1nUG9wdXAgPSAoKSA9PiB7XHJcbiAgICBwb3B1cEltYWdlSW1nLnNyYyA9IHRoaXMuX2xpbms7XHJcbiAgICBwb3B1cEltYWdlSW1nLmFsdCA9IGBwaWN0dXJlIG9mICR7dGhpcy5fdGV4dH1gO1xyXG4gICAgcG9wdXBJbWFnZVRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5fdGV4dDtcclxuICAgIG9wZW5Qb3B1cChpbWFnZVBvcHVwQ29udGFpbmVyKTtcclxuICB9O1xyXG59O1xyXG4iLCJleHBvcnQgeyBpbml0aWFsQ2FyZHMsIHZhbGlkYXRpb25Db25maWcgfTtcclxuXHJcbmNvbnN0IGluaXRpYWxDYXJkcyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJMYWdvIGRpIEJyYWllc1wiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhZ28uanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlZhbm9pc2UgTmF0aW9uYWwgUGFya1wiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkxhdGVtYXJcIixcclxuICAgICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJCYWxkIE1vdW50YWluc1wiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xha2UtbG91aXNlLmpwZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJZb3NlbWl0ZSBWYWxsZXlcIixcclxuICAgICAgbGluazogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS95b3NlbWl0ZS5qcGdcIixcclxuICAgIH0sXHJcbiAgXTtcclxuICBcclxuICBjb25zdCB2YWxpZGF0aW9uQ29uZmlnID0ge1xyXG4gICAgZm9ybVNlbGVjdG9yOiBcIi5wb3B1cF9fZm9ybVwiLFxyXG4gICAgaW5wdXRTZWxlY3RvcjogXCIucG9wdXBfX2lucHV0XCIsXHJcbiAgICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIucG9wdXBfX3NhdmVcIixcclxuICAgIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwicG9wdXBfX3NhdmVfZGlzYWJsZWRcIixcclxuICAgIGlucHV0RXJyb3JDbGFzczogXCJwb3B1cF9faW5wdXRfdHlwZV9lcnJvclwiLFxyXG4gICAgZXJyb3JDbGFzczogXCJwb3B1cF9fZXJyb3JfdmlzaWJsZVwiLFxyXG4gIH07IiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XHJcbmltcG9ydCB7IG9wZW5Qb3B1cCwgY2xvc2VQb3B1cCwgYWRkUmVtb3RlQ2xpY2tMaXN0ZW5lcnMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy91dGlscy5qc1wiO1xyXG5pbXBvcnQgeyBpbml0aWFsQ2FyZHMsIHZhbGlkYXRpb25Db25maWcgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb25zdGFudHMuanNcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQge1xyXG4gIGltYWdlUG9wdXBDb250YWluZXIsXHJcbiAgcG9wdXBJbWFnZUltZyxcclxuICBwb3B1cEltYWdlVGl0bGUsXHJcbiAgaW1hZ2VGb3JtQ29udGFpbmVyLFxyXG4gIGFkZEltYWdlRm9ybVZhbGlkYXRvcixcclxuICBwcm9maWxlRm9ybVZhbGlkYXRvcixcclxuICBwcm9maWxlRm9ybUNvbnRhaW5lcixcclxuICBpbnB1dE5hbWUsXHJcbiAgaW5wdXRBYm91dCxcclxuICBwcm9maWxlTmFtZSxcclxuICBwcm9maWxlQWJvdXQsXHJcbiAgcmVuZGVyQ2FyZCxcclxufTtcclxuXHJcbmNvbnN0IGltYWdlUG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX2ltYWdlLXBvcHVwXCIpO1xyXG5jb25zdCBpbWFnZUZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX25ldy1pbWFnZVwiKTtcclxuY29uc3QgcHJvZmlsZUZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX3Byb2ZpbGVcIik7XHJcbmNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpO1xyXG5jb25zdCBwcm9maWxlQWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3N1YnRpdGxlXCIpO1xyXG5jb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0XCIpO1xyXG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZFwiKTtcclxuY29uc3QgcHJvZmlsZUNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fY2xvc2VfcHJvZmlsZVwiKTtcclxuY29uc3QgaW1hZ2VDbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Nsb3NlX2ltYWdlXCIpO1xyXG5jb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19uYW1lXCIpO1xyXG5jb25zdCBpbnB1dEFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fYWJvdXRcIik7XHJcbmNvbnN0IGlucHV0VXJsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXRfdXJsXCIpO1xyXG5jb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXRfdGl0bGVcIik7XHJcbmNvbnN0IHBvcHVwSW1hZ2VDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Nsb3NlX2ltYWdlLXBvcHVwXCIpO1xyXG5jb25zdCBwb3B1cHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cFwiKV07XHJcbmNvbnN0IHBvcHVwSW1hZ2VJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWdfaW1hZ2UtcG9wdXBcIik7XHJcbmNvbnN0IHBvcHVwSW1hZ2VUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX3RpdGxlX2ltYWdlLXBvcHVwXCIpO1xyXG5jb25zdCBwaG90b3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG90b3NfX2xpc3RcIik7XHJcbmNvbnN0IG5ld0ltYWdlRm9ybSA9IGltYWdlRm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlUHJvZmlsZUZvcm1TYXZlKGV2dCkge1xyXG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHByb2ZpbGVOYW1lLnRleHRDb250ZW50ID0gaW5wdXROYW1lLnZhbHVlO1xyXG4gIHByb2ZpbGVBYm91dC50ZXh0Q29udGVudCA9IGlucHV0QWJvdXQudmFsdWU7XHJcbiAgY2xvc2VQb3B1cChwcm9maWxlRm9ybUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUltYWdlQWRkRm9ybUNyZWF0ZShldnQpIHtcclxuICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBjYXJkRGF0YSA9IHtcclxuICAgIG5hbWU6IGlucHV0VGl0bGUudmFsdWUsXHJcbiAgICBsaW5rOiBpbnB1dFVybC52YWx1ZSxcclxuICB9O1xyXG4gIHJlbmRlckNhcmQoY2FyZERhdGEpO1xyXG4gIGNsb3NlUG9wdXAoaW1hZ2VGb3JtQ29udGFpbmVyKTtcclxuICBuZXdJbWFnZUZvcm0ucmVzZXQoKTtcclxuICBhZGRJbWFnZUZvcm1WYWxpZGF0b3IudG9nZ2xlU3VibWl0QnV0dG9uKCk7XHJcbn1cclxuXHJcbmNvbnN0IGZpbGxQcm9maWxlRm9ybSA9ICgpID0+IHtcclxuICBpbnB1dE5hbWUudmFsdWUgPSBwcm9maWxlTmFtZS50ZXh0Q29udGVudDtcclxuICBpbnB1dEFib3V0LnZhbHVlID0gcHJvZmlsZUFib3V0LnRleHRDb250ZW50O1xyXG59XHJcblxyXG5wcm9maWxlRm9ybUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVByb2ZpbGVGb3JtU2F2ZSk7XHJcbmltYWdlRm9ybUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUltYWdlQWRkRm9ybUNyZWF0ZSk7XHJcbmVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBwcm9maWxlRm9ybVZhbGlkYXRvci50b2dnbGVTdWJtaXRCdXR0b24oKTtcclxuICBmaWxsUHJvZmlsZUZvcm0oKTtcclxuICBvcGVuUG9wdXAocHJvZmlsZUZvcm1Db250YWluZXIpO1xyXG59KTtcclxucHJvZmlsZUNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxyXG4gIGNsb3NlUG9wdXAocHJvZmlsZUZvcm1Db250YWluZXIpXHJcbik7XHJcbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGFkZEltYWdlRm9ybVZhbGlkYXRvci50b2dnbGVTdWJtaXRCdXR0b24oKTtcclxuICBvcGVuUG9wdXAoaW1hZ2VGb3JtQ29udGFpbmVyKTtcclxufSk7XHJcbmltYWdlQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XHJcbiAgY2xvc2VQb3B1cChpbWFnZUZvcm1Db250YWluZXIpXHJcbik7XHJcbnBvcHVwSW1hZ2VDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICBjbG9zZVBvcHVwKGltYWdlUG9wdXBDb250YWluZXIpXHJcbik7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDYXJkKGNhcmQpIHtcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IG5ldyBDYXJkKGNhcmQsIFwiI2NhcmQtdGVtcGxhdGVcIik7XHJcbiAgY29uc3QgbmV3Q2FyZCA9IGNhcmRFbGVtZW50LmdlbmVyYXRlQ2FyZCgpO1xyXG4gIHBob3Rvc0xpc3QucHJlcGVuZChuZXdDYXJkKTtcclxufVxyXG5cclxuXHJcbmluaXRpYWxDYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XHJcbiAgcmVuZGVyQ2FyZChjYXJkKTtcclxufSk7XHJcblxyXG5hZGRSZW1vdGVDbGlja0xpc3RlbmVycyhwb3B1cHMpO1xyXG5cclxuY29uc3QgYWRkSW1hZ2VGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoXHJcbiAgdmFsaWRhdGlvbkNvbmZpZyxcclxuICBpbWFnZUZvcm1Db250YWluZXJcclxuKTtcclxuYWRkSW1hZ2VGb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuXHJcbmNvbnN0IHByb2ZpbGVGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoXHJcbiAgdmFsaWRhdGlvbkNvbmZpZyxcclxuICBwcm9maWxlRm9ybUNvbnRhaW5lclxyXG4pO1xyXG5wcm9maWxlRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZXhwb3J0cyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkZvcm1WYWxpZGF0b3IiLCJjb25zdHJ1Y3RvciIsInNldHRpbmdzIiwiZm9ybSIsInRoaXMiLCJfY3VycmVudEZvcm0iLCJfZm9ybVNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2lucHV0cyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfc3VibWl0QnV0dG9uIiwicXVlcnlTZWxlY3RvciIsIl9zaG93SW5wdXRFcnJvciIsImlucHV0IiwiZXJyb3JNZXNzYWdlIiwiZXJyb3IiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiX2hpZGVJbnB1dEVycm9yIiwicmVtb3ZlIiwiX3RvZ2dsZUlucHV0RXJyb3IiLCJ2YWxpZGl0eSIsInZhbGlkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGFzSW52YWxpZElucHV0Iiwic29tZSIsInRvZ2dsZVN1Ym1pdEJ1dHRvbiIsImRpc2FibGVkIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbmFibGVWYWxpZGF0aW9uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib3BlblBvcHVwIiwicG9wdXAiLCJkb2N1bWVudCIsImNsb3NlQnlFc2NhcGUiLCJjbG9zZVBvcHVwIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2dCIsImNvZGUiLCJDYXJkIiwiZGF0YSIsInRlbXBsYXRlU2VsZWN0b3IiLCJfZWxlbWVudCIsInRvZ2dsZSIsInBvcHVwSW1hZ2VJbWciLCJzcmMiLCJfbGluayIsImFsdCIsIl90ZXh0IiwicG9wdXBJbWFnZVRpdGxlIiwiaW1hZ2VQb3B1cENvbnRhaW5lciIsIm5hbWUiLCJsaW5rIiwiX3RlbXBsYXRlU2VsZWN0b3IiLCJfZ2V0VGVtcGxhdGUiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiZ2VuZXJhdGVDYXJkIiwiaW1hZ2VFbGVtZW50IiwiX3RvZ2dsZUxpa2VCdXR0b24iLCJfcmVtb3ZlQ2FyZCIsIl9vcGVuSW1nUG9wdXAiLCJ2YWxpZGF0aW9uQ29uZmlnIiwiaW1hZ2VGb3JtQ29udGFpbmVyIiwicHJvZmlsZUZvcm1Db250YWluZXIiLCJwcm9maWxlTmFtZSIsInByb2ZpbGVBYm91dCIsImVkaXRCdXR0b24iLCJhZGRCdXR0b24iLCJwcm9maWxlQ2xvc2VCdXR0b24iLCJpbWFnZUNsb3NlQnV0dG9uIiwiaW5wdXROYW1lIiwiaW5wdXRBYm91dCIsImlucHV0VXJsIiwiaW5wdXRUaXRsZSIsInBvcHVwSW1hZ2VDbG9zZSIsInBvcHVwcyIsInBob3Rvc0xpc3QiLCJuZXdJbWFnZUZvcm0iLCJyZW5kZXJDYXJkIiwiY2FyZCIsIm5ld0NhcmQiLCJwcmVwZW5kIiwidmFsdWUiLCJyZXNldCIsImFkZEltYWdlRm9ybVZhbGlkYXRvciIsInByb2ZpbGVGb3JtVmFsaWRhdG9yIiwidGFyZ2V0IiwibWF0Y2hlcyJdLCJzb3VyY2VSb290IjoiIn0=