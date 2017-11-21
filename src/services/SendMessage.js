import axios from 'axios'

import { getAuthHeader } from 'services/AuthService.js'

export async function SendMessage (id, message) {
  const url = `http://localhost:3005/message/${id}`
  const response = await axios.put(url, { message }, getAuthHeader())
  return response.data
}
