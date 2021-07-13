const url = 'https://api.nomoreparties.co/beatfilm-movies';

const onError = (res) => {
  if(res.ok){
    return res.json();
  }
  return Promise.reject('Сервер не доступен')
}

  // загрузка карточек с сервиса beatfilm-movies
export const getCards = () => {
  return fetch(`${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(onError)
}