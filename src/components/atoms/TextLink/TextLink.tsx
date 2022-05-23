import { FC, MouseEvent } from 'react'
import { TextDecoration } from '../../../constants/types'
import { link } from './style'

type Props = {
  title: string
  href: string
  textDecoration?: TextDecoration
  pushDetailPage?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export const TextLink: FC<Props> = ({
  title,
  href,
  textDecoration = 'underline',
  pushDetailPage
}) => (
  <a
    href={href}
    css={link({ textDecoration })}
    onClick={(event) => pushDetailPage!(event)}
  >
    {title}
  </a>
)
