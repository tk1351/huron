import axios from 'axios'

const API_URL = 'https://huron.microcms.io/api/v1'

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'X-MICROCMS-API-KEY': import.meta.env.VITE_MICROCMS_API_KEY
  }
})
