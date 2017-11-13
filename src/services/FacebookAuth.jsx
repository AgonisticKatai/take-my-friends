import axios from 'axios'

function facebookAuth() {
  const url = 'http://localhost:3005/auth/facebook'
  return axios.get(url)
    .then(response => response.data)
}

export default facebookAuth
