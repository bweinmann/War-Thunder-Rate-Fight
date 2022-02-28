import { api } from './api-helper.js'


export const getAllComments = async (review_id) => {
  const resp = await api.get(`aircraft/${aircraft_id}/reviews/${review_id}/comments`)
  return resp.data
}

export const createComment = async (review_id,commentData) => {
  const resp = await api.review(`aircraft/${aircraft_id}/reviews/${review_id}/comments`,{comment: commentData})
  return resp.data
}

export const updateComment = async (review_id, comment_id, updateData) => {
  const resp = await api.put(`aircraft/${aircraft_id}/reviews/${review_id}/comments/${comment_id}`, {review: updateData})
  return resp.data
}

export const deleteComment = async (review_id,comment_id) => {
  const resp = await api.delete(`aircraft/${aircraft_id}/reviews/${review_id}/comments/${comment_id}`)
  return resp.data
}