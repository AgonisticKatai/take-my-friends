import axios from 'axios'

import { getAuthHeader } from 'services/AuthService.js'

export async function GetUserByjob (job) {
  const url = `http://localhost:3005/friends/${job}`
  const response = await axios.get(url, getAuthHeader())
  return response.data
}
