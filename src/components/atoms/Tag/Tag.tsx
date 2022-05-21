import { FC } from 'react'
import { tag } from './style'

type Props = {
  title: string
  href: string
}

export const Tag: FC<Props> = ({ title, href }) => (
  <a css={tag} href={href}>
    {title}
  </a>
)
