import axios from 'axios'

import { getAuthHeader } from 'services/AuthService.js'

export async function getAllUsers () {
  const url = 'http://localhost:3005/users'
  const response = await axios.get(url, getAuthHeader())
  return response.data
}
