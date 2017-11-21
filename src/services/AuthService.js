import axios from 'axios'

async function login (email, password) {
  const url = 'http://localhost:3005/login'
  const response = await axios.post(url, { username: email, password })
  return response.data.token
}

async function register (email, password) {
  const url = 'http://localhost:3005/register'
  await axios.post(url, { email, password })
}

function getAuthHeader () {
  const token = localStorage.getItem('token')
  return ({
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `bearer ${token}`
    }
  })
}

export { login, register, getAuthHeader }
