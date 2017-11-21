import axios from 'axios'

import { getAuthHeader } from 'services/AuthService.js'

export async function getMessages () {
  const url = 'http://localhost:3005/messages'
  const { data: { conversations } } = await axios.get(url, getAuthHeader())
  return conversations
}
