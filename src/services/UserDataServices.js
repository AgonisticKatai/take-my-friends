import axios from 'axios'

import { getAuthHeader } from 'services/AuthService.js'

const AddFriend = async (_id) => {
  const url = `http://localhost:3005/user/${_id}`
  const response = await axios.put(url, {}, getAuthHeader())
  return response.data
}

const getAllUsers = async () => {
  const url = 'http://localhost:3005/users'
  const response = await axios.get(url, getAuthHeader())
  return response.data
}

const getFriends = async () => {
  const url = 'http://localhost:3005/friends'
  const { data: { friends } } = await axios.get(url, getAuthHeader())
  return friends
}

const GetUserById = async (id) => {
  const url = `http://localhost:3005/user/${id}`
  const response = await axios.get(url, getAuthHeader())
  return response.data
}

const GetUserProfile = async () => {
  const url = 'http://localhost:3005/user'
  const response = await axios.get(url, getAuthHeader())
  return response.data
}

const UpdateProfile = async (name, lastname, email, profileImg, occupation) => {
  const url = 'http://localhost:3005/account'
  const response = await axios.put(url, { name, lastname, email, profileImg, occupation }, getAuthHeader())
  return response.data
}

const GetUserByjob = async (job) => {
  const url = `http://localhost:3005/friends/${job}`
  const response = await axios.get(url, getAuthHeader())
  return response.data
}

const GetFriendsJobs = async () => {
  const url = `http://localhost:3005/friends_jobs`
  const response = await axios.get(url, getAuthHeader())
  return response.data
}

const SendMessage = async (id, message) => {
  const url = `http://localhost:3005/message/${id}`
  const response = await axios.put(url, { message }, getAuthHeader())
  return response.data
}

const GetInboxMessages = async () => {
  const url = 'http://localhost:3005/messages_inbox'
  const { data: { inbox } } = await axios.get(url, getAuthHeader())
  return inbox
}

const GetOutboxMessages = async () => {
  const url = 'http://localhost:3005/messages_outbox'
  const { data: { outbox } } = await axios.get(url, getAuthHeader())
  return outbox
}

const RemoveInboxMessageById = async (id) => {
  const url = `http://localhost:3005/message_inbox/${id}`
  const response = await axios.delete(url, getAuthHeader())
  return response.data
}

const RemoveOutboxMessageById = async (id) => {
  const url = `http://localhost:3005/message_outbox/${id}`
  const response = await axios.delete(url, getAuthHeader())
  return response.data
}

export { AddFriend, getAllUsers, getFriends, GetInboxMessages, GetUserById, GetUserProfile, SendMessage, UpdateProfile, GetUserByjob, GetFriendsJobs, GetOutboxMessages, RemoveInboxMessageById, RemoveOutboxMessageById }
