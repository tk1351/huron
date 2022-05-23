import { CommonItem, CommonList } from '../common/types'
import { Tags } from '../tags/types'

export type BlogItem = {
  title: string
  content: string
  slug: string
  tags: Tags
} & CommonItem

export type Blogs = CommonList<BlogItem>
