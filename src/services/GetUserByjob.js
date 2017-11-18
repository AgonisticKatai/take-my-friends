import axios from 'axios'

const token = localStorage.getItem('token')

export function GetUserByjob (job) {
  const url = `http://localhost:3005/friends/${job}`
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
