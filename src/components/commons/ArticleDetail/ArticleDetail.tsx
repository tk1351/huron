import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Cluster } from '../../atoms/Cluster/Cluster'
import { Tag } from '../../atoms/Tag/Tag'
import { article, articleTitle, list, markdownStyle } from './style'
import { TagItem } from '../../../constants/types'

type Props = {
  title: string
  createdAt: string
  tags: TagItem[]
  content: string
}

export const ArticleDetail: FC<Props> = ({
  title,
  createdAt,
  tags,
  content
}) => (
  <article css={article}>
    <header>
      <h3 css={articleTitle}>{title}</h3>
      <Cluster gap="20px">
        <span>{createdAt}</span>
        <ul css={list}>
          {tags.map((tag) => (
            <li key={tag.id}>
              <Tag title={tag.title} href={tag.href} />
            </li>
          ))}
        </ul>
      </Cluster>
    </header>
    <section>
      <ReactMarkdown
        css={markdownStyle}
        children={content}
        remarkPlugins={[remarkGfm]}
      />
    </section>
  </article>
)
