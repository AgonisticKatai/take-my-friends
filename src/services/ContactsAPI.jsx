import axios from 'axios'

export function getUsersData () {
  const url = 'http://localhost:3005/home'
  return axios.get(url)
  .then(response => response.data.contacts)
}
