import { FC } from 'react'
import ReactPaginate from 'react-paginate'
import { ArticleCard } from '../../commons/ArticleCard/ArticleCard'
import { TagItem } from '../../../constants/types'
import { paginate, wrapper } from './style'

type Props = {
  articles: {
    id: string
    title: string
    createdAt: string
    tags: TagItem[]
    content: string
  }[]
  pageCount: number
}

export const MainPagePresentational: FC<Props> = ({ articles, pageCount }) => (
  <div css={wrapper}>
    {articles.map(({ id, title, createdAt, tags, content }) => (
      <ArticleCard
        key={id}
        title={title}
        createdAt={createdAt}
        tags={tags}
        content={content}
      />
    ))}
    <ReactPaginate
      pageCount={pageCount}
      css={paginate}
      nextLabel=">"
      previousLabel="<"
    />
  </div>
)
