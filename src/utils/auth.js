const url = 'https://api.talynik.student.nomoredomains.club';

const onError = (res) => {
  if(res.ok){
    return res.json();
  }
  return Promise.reject('Сервер не доступен')
}

//регистрация нового пользователя
export const register = (data) => {
  return fetch(`${url}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(onError)
}

// авторизация пользователя
export const authorize = (data) => {
  return fetch(`${url}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(onError)
}