import axios from 'axios'

import { getAuthHeader } from 'services/AuthService.js'

export async function UpdateProfile (name, lastname, email, profile_img, occupation) {
  const url = 'http://localhost:3005/account'
  const response = await axios.put(url, { name, lastname, email, profile_img, occupation }, getAuthHeader())
  return response.data
}
