import axios from 'axios'
import toastr from 'toastr'

function login( email, password ) {
  const url = 'http://localhost:3005/login'
  return axios.post(url, { username: email, password })
    .then(response => response.data.token)
}

export default login