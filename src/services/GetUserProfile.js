import axios from 'axios'

import { getAuthHeader } from 'services/AuthService.js'

export async function GetUserProfile () {
  const url = 'http://localhost:3005/user'
  const response = await axios.get(url, getAuthHeader())
  return response.data
}
