import { api } from '../common'
import { Blogs } from './types'

export const fetchArticles = async (): Promise<Blogs> => {
  const { data } = await api.get<Blogs>('/blogs')
  return data
}
