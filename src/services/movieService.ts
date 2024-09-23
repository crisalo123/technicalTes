import { movieApi } from '@/api/movies'

export interface PaginationResponse<T> {
  total_results: number
  results: T[]
  page: number
  total_pages: number
}

export type DataMovie = {
  id: number
  title: string
  overview: string
  release_date: string
  account_id: string
}

interface GetMovies {
  with_genres?: string
  language?: string
  page?: number
  region?: string
}

export const getMovieDetail = async (params: DataMovie): Promise<unknown> => {
  const { account_id } = params
  return await movieApi.get(`/account/${account_id}/favorite/movies`)
}

export const getMovies = async (
  params: GetMovies
): Promise<PaginationResponse<DataMovie>> => {
  return await movieApi.get(`/discover/movie`, { params })
}

export const getMoviesList = async (): Promise<unknown> => {
  return await movieApi.get(`genre/movie/list?language=en`)
}
