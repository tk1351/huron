import { FC } from 'react'
import { TextDecoration } from '../../../constants/types'
import { link } from './style'

type Props = {
  title: string
  href: string
  textDecoration?: TextDecoration
}

export const TextLink: FC<Props> = ({
  title,
  href,
  textDecoration = 'underline'
}) => (
  <a href={href} css={link({ textDecoration })}>
    {title}
  </a>
)
