import { FC } from 'react'
import { ArticleDetail } from '../../commons/ArticleDetail/ArticleDetail'
import { TagItem } from '../../../constants/types'

type Props = {
  title: string
  createdAt: string
  tags: TagItem[]
  content: string
}

export const DetailPagePresentational: FC<Props> = ({
  title,
  createdAt,
  tags,
  content
}) => (
  <ArticleDetail
    title={title}
    createdAt={createdAt}
    tags={tags}
    content={content}
  />
)
