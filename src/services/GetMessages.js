import axios from 'axios'

const token = localStorage.getItem('token')

export function getMessages () {
  const url = 'http://localhost:3005/messages'
  return axios.get(url, 
    {
    headers : {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : `bearer ${token}`
    }
  })
  .then(response => response.data.conversations)
}
