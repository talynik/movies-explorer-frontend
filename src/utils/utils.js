//конфигурационный объект валидации формы входа и регистрации
export const validationSign = {
  inputSelector: '.signForm__input',
  submitButtonSelector: '.signForm__button',
  inactiveButtonClass: 'signForm__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__visible-error'
};

//массив первоначальных данных
export const cards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    time: "1ч 47 м",
    like: 1
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    time: "1ч 47 м",
    like: 0
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    time: "1ч 47 м",
    like: 1
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    time: "1ч 47 м",
    like: 0
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    time: "1ч 47 м",
    like: 0
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    time: "1ч 47 м",
    like: 0
  }
];

//массив первоначальных данных
export const saveCards = [
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    time: "1ч 47 м",
    like: 1
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    time: "1ч 47 м",
    like: 1
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    time: "1ч 47 м",
    like: 1
  }
];