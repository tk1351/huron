import { FC } from 'react'
import { TextLink } from '../../atoms/TextLink/TextLink'
import { Tag } from '../../atoms/Tag/Tag'
import { articleTitle, header, list, section, text } from './style'
import { Cluster } from '../../atoms/Cluster/Cluster'

type Props = {
  title: string
  createdAt: string
  tags: { id: string; title: string; href: string }[]
  content: string
}

export const ArticleCard: FC<Props> = ({ title, createdAt, tags, content }) => (
  <article>
    <header css={header}>
      <h3 css={articleTitle}>
        <TextLink title={title} href="#" textDecoration="none" />
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
      <TextLink title="続きを読む" href="#" />
    </nav>
  </article>
)
