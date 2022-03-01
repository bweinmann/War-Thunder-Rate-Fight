import { api } from './api-helper'

export const getAllAircraft = async () => {
  const resp = await api.get('/aircrafts')
  return resp.data
}

export const getOneAircraft = async (aircraft_id) => {
  const resp = await api.get(`/aircrafts/${aircraft_id}`)
  return resp.data
}

export const createAircraft = async (aircraftData) => {
  const resp = await api.post('/aircrafts', {aircraft: aircraftData})
  return resp.data
}

export const updateAircraft = async (aircraft_id, aircraftData) => {
  const resp = await api.put(`/aircrafts/${aircraft_id}`, {aircraft: aircraftData})
  return resp.data
}

export const deleteAircraft = async (aircraft_id) => {
  const resp = await api.delete(`/aircrafts/${aircraft_id}`)
  return resp.data
}
