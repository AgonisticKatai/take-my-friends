import axios from 'axios'

const login = async (email, password) => {
  const url = 'http://localhost:3005/login'
  const response = await axios.post(url, { username: email, password })
  return response.data.token
}

const register = async (email, password) => {
  const url = 'http://localhost:3005/register'
  await axios.post(url, { email, password })
}

const getAuthHeader = () => {
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
