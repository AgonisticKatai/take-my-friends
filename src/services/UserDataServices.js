import axios from 'axios'

import { getAuthHeader } from 'services/AuthService.js'

async function AddFriend (_id) {
  const url = `http://localhost:3005/user/${_id}`
  const response = await axios.put(url, {}, getAuthHeader())
  return response.data
}

async function getAllUsers () {
  const url = 'http://localhost:3005/users'
  const response = await axios.get(url, getAuthHeader())
  return response.data
}

async function getFriends () {
  const url = 'http://localhost:3005/friends'
  const { data: { friends } } = await axios.get(url, getAuthHeader())
  return friends
}

async function getMessages () {
  const url = 'http://localhost:3005/messages'
  const { data: { conversations } } = await axios.get(url, getAuthHeader())
  return conversations
}

async function GetUserById (id) {
  const url = `http://localhost:3005/user/${id}`
  const response = await axios.get(url, getAuthHeader())
  return response.data
}

async function GetUserProfile () {
  const url = 'http://localhost:3005/user'
  const response = await axios.get(url, getAuthHeader())
  return response.data
}

async function SendMessage (id, message) {
  const url = `http://localhost:3005/message/${id}`
  const response = await axios.put(url, { message }, getAuthHeader())
  return response.data
}

async function UpdateProfile (name, lastname, email, profile_img, occupation) {
  const url = 'http://localhost:3005/account'
  const response = await axios.put(url, { name, lastname, email, profile_img, occupation }, getAuthHeader())
  return response.data
}

async function GetUserByjob (job) {
  const url = `http://localhost:3005/friends/${job}`
  const response = await axios.get(url, getAuthHeader())
  return response.data
}

export { AddFriend, getAllUsers, getFriends, getMessages, GetUserById, GetUserProfile, SendMessage, UpdateProfile, GetUserByjob }
