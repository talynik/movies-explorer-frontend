class MainApi{
  constructor(config){
    this._url = config.url;
    this._headers = config.headers;
  }

  _onError(res) {
    if(res.ok){
      return res.json();
    }
    return Promise.reject('Сервер не доступен')
  }

    //регистрация нового пользователя
  register = (data) => {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(this._onError)
  }

  // авторизация пользователя
  authorize = (data) => {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(this._onError)
  }

    //загрузка информации о пользователе
  getUserInfo(){
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
    .then(this._onError)
  }

    //изменение данных пользователя
  setUserInfo(data){
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._onError)
  }

    //изменение аватарки
  editAvatar(data){
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._onError)
  }

    //удаление карточки
  removeMovies(id){
    return fetch(`${this._url}/movies/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then(this._onError)
  }

    //загрузка карточек с сервера
  getCard(){
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: this._headers,
    })
    .then(this._onError)
  }

    //добавление новой карточки
  addMovies(data){
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._onError)
  }
}

localStorage.setItem('jwt', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRlMTEyN2FiYTA5NDE5YzBkNDdmMmIiLCJpYXQiOjE2MjU1NDUwOTIsImV4cCI6MTYyNjE0OTg5Mn0.cggI9MlLADzFIQFrlwoyV0fzTd-7P9j03w5KObNIZeA");

let jwt = localStorage.getItem('jwt');

const mainApi = new MainApi({
  url: 'http://localhost:3005', 
  headers:{
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${jwt}`
  }
});
export default mainApi;


// https://api.talynik.diploma.nomoredomains.club

// http://localhost:3005