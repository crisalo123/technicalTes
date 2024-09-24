import { movieApi } from '@/api/movies'

export const getAuthSession = async (): Promise<unknown> => {
  return await movieApi.get(`authentication/guest_session/new`)
}
