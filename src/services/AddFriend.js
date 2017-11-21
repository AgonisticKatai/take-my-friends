import axios from 'axios'

import { getAuthHeader } from 'services/AuthService.js'

export async function AddFriend (_id) {
  const url = `http://localhost:3005/user/${_id}`
  const response = await axios.put(url, {}, getAuthHeader())
  return response.data
}
