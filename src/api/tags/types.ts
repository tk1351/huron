import { CommonItem, CommonList } from '../common/types'

export type TagItem = {
  title: string
  href: string
} & CommonItem

export type Tags = CommonList<TagItem>
