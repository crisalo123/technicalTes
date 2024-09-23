import axios from 'axios'
import { API_BASE_URL, API_KEY } from '../const/app'

export const movieApi = axios.create({
  baseURL: API_BASE_URL,
})

movieApi.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error)
)

movieApi.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    api_key: API_KEY,
  }

  const { token } = import.meta.env.VITE_API_TOKEN

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
