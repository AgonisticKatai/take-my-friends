import axios from 'axios'

const token = localStorage.getItem('token')

export function SendMessage (id, message) {
  const url = `http://localhost:3005/message/${id}`
  return axios.put(url, { message },
    {
    headers : {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'Authorization' : `bearer ${token}`
    }
  })
}
