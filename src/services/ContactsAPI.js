import axios from 'axios'

const token = localStorage.getItem('token')

export function getUsersData () {
  const url = 'http://localhost:3005/users'
  return axios.get(url, 
    {
    headers : {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : `bearer ${token}`
    }
  })
  .then(response => response.data)
}
