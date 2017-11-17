import axios from 'axios'

function login( email, password ) {
  const url = 'http://localhost:3005/login'
  return axios.post(url, { username: email, password })
    .then(response => response.data.token)
}

export default login

//export { login, isAuthenticated, .... }