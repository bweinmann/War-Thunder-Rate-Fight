import { api } from './api-helper'

export const getAllroducts = async () => {
  const resp = await api.get('/aircraft')
  return resp.data
}

export const getOneAircraft = async (aircraft_id) => {
  const resp = await api.get(`/aircraft/${aircraft_id}`)
  return resp.data
}

export const createAircraft = async (aircraftData) => {
  const resp = await api.post('/aircraft', {aircraft: aircraftData})
  return resp.data
}

export const updateAircraft = async (aircraft_id, aircraftData) => {
  const resp = await api.put(`/aircraft/${aircraft_id}`, {aircraft: aircraftData})
  return resp.data
}

export const deleteAircraft = async (aircraft_id) => {
  const resp = await api.delete(`/aircraft/${aircraft_id}`)
  return resp.data
}
