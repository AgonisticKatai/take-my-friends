import axios from 'axios'

function register(email, password) {
  const url = 'http://localhost:3005/register'
  return axios.post(url, { email, password })
    .then(response => console.log('user registered...'))
}

export default register