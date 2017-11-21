import axios from 'axios'

import { getAuthHeader } from 'services/AuthService.js'

export async function getFriends () {
  const url = 'http://localhost:3005/friends'
  const { data: { friends } } = await axios.get(url, getAuthHeader())
  return friends
}
