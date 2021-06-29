class MoviesApi{
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
  removeCard(id){
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then(this._onError)
  }

    // изменение статуса лайка
  changeLikeCardStatus(id, like) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: like ? 'PUT' : 'DELETE',
      headers: this._headers,
    })
    .then(this._onError)
  }

    //загрузка карточек с сервера
  getCards(){
    return fetch(`${this._url}`, {
      method: "GET",
      headers: this._headers,
    })
    .then(this._onError)
  }

    //добавление новой карточки
  addCard(data){
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._onError)
  }
}

const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies', 
  headers:{
    'Content-Type': 'application/json',
  }
});
export default moviesApi;