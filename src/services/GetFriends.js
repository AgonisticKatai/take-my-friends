import axios from 'axios'

const token = localStorage.getItem('token')

export function getFriends () {
  const url = 'http://localhost:3005/friends'
  return axios.get(url, 
    {
    headers : {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : `bearer ${token}`
    }
  })
  .then(response => response.data.friends)
}
