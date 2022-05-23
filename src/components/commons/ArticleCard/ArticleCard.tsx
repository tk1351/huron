import { FC, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextLink } from '../../atoms/TextLink/TextLink'
import { Tag } from '../../atoms/Tag/Tag'
import { articleTitle, header, list, section, text } from './style'
import { Cluster } from '../../atoms/Cluster/Cluster'
import { TagItem } from '../../../constants/types'

type Props = {
  title: string
  createdAt: string
  tags: TagItem[]
  content: string
}

export const ArticleCard: FC<Props> = ({ title, createdAt, tags, content }) => {
  const navigate = useNavigate()
  const pushDetailPage = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    navigate('/1')
  }
  return (
    <article>
      <header css={header}>
        <h3 css={articleTitle}>
          <TextLink
            title={title}
            href="#"
            textDecoration="none"
            pushDetailPage={pushDetailPage}
          />
        </h3>
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
      <section css={section}>
        <p css={text}>{content}</p>
      </section>
      <nav>
        <TextLink title="続きを読む" href="#" pushDetailPage={pushDetailPage} />
      </nav>
    </article>
  )
}
