import { FC } from 'react'

type Props = {
  title: string
  href: string
}

export const TextLink: FC<Props> = ({ title, href }) => (
  <a href={href}>{title}</a>
)
