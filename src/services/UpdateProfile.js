import axios from 'axios'

const token = localStorage.getItem('token')

export function UpdateProfile (name, lastname, email, profile_img, occupation) {
  const url = 'http://localhost:3005/account'
  return axios.put(url, {name, lastname, email, profile_img, occupation},
    {
    headers : {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : `bearer ${token}`
    }
  })
}
