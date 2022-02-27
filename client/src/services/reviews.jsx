import { api } from './apiconfig.js'


export const getReview = async () => {
  const resp = await api.get('/reviews')
  return resp.data
}

export const createReview = async (reviewData) => {
  const resp = await api.review('/reviews',{review: reviewData})
  return resp.data
}

export const updateReview = async (review_id, updateData) => {
  const resp = await api.put(`/reviews/${review_id}`, {review: updateData})
  return resp.data
}

export const deleteReview = async (review_id) => {
  const resp = await api.delete(`/reviews/${review_id}`)
  return resp.data
}