//конфигурационный объект валидации форм входа и регистрации
export const validationSign = {
  inputSelector: '.signForm__input',
  submitButtonSelector: '.signForm__button',
  inactiveButtonClass: 'signForm__button_disabled',
  inputErrorClass: 'signForm__input-error',
  errorClass: 'popup__visible-error'
};

//конфигурационный объект валидации формы редактирования профиля
export const validationEditProfile = {
  inputSelector: '.profile__input',
  submitButtonSelector: '.profile__button',
  inactiveButtonClass: 'profile__button_disabled',
  inputErrorClass: 'profile__input-error',
  errorClass: 'popup__visible-error'
};