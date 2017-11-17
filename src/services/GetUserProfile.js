import axios from 'axios'

const token = localStorage.getItem('token')

export function GetUserProfile () {
  const url = 'http://localhost:3005/user'
  console.log('token api petition page...' + token)
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