import axios from 'axios'

import { getAuthHeader } from 'services/AuthService.js'

export async function GetUserById (id) {
  const url = `http://localhost:3005/user/${id}`
  const response = await axios.get(url, getAuthHeader())
  return response.data
}
