import { api } from './apiconfig.js'

export const getReview = async (aircraft_id) => {
  const resp = await api.get(`/aircrafts/${aircraft_id}/reviews`)
  return resp.data
}

export const createReview = async (aircraft_id, reviewData) => {
  const resp = await api.post(`/aircrafts/${aircraft_id}/reviews`, {review: reviewData})
  return resp.data
}

export const updateReview = async (aircraft_id, review_id, updateData) => {
  const resp = await api.put(`/aircrafts/${aircraft_id}/reviews/${review_id}`, {review: updateData})
  return resp.data
}

export const deleteReview = async (aircraft_id, review_id) => {
  const resp = await api.delete(`/aircrafts/${aircraft_id}/reviews/${review_id}`)
  return resp.data
}