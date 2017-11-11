function saveToken(token) {
  return localStorage.setItem('token', token)
}

function getToken(token) {
  return localStorage.getItem('token')
}

function removeToken(token) {
  return localStorage.removeItem('token')
}

export { saveToken, getToken, removeToken }