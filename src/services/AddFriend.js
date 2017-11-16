import axios from 'axios'

const token = localStorage.getItem('token')

export function AddFriend (_id) {
  const url = `http://localhost:3005/user/${_id}`
  return axios.put(url, {},
    {
    headers: {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : `bearer ${token}`
    }
  })
  .then(response => response.data)
}
